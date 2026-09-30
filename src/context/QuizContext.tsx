import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { questions } from '../data/questions'

type QuizContextValue = { current: number; score: number; selected: string | null; completed: boolean; choose: (answer: string) => void; next: () => void; reset: () => void }
const QuizContext = createContext<QuizContextValue | null>(null)

export function QuizProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [completed, setCompleted] = useState(false)
  const choose = (answer: string) => setSelected(answer)
  const next = () => {
    if (!selected) return
    if (selected === questions[current].answer) setScore((value) => value + 1)
    if (current === questions.length - 1) setCompleted(true)
    else { setCurrent((value) => value + 1); setSelected(null) }
  }
  const reset = () => { setCurrent(0); setScore(0); setSelected(null); setCompleted(false) }
  const value = useMemo(() => ({ current, score, selected, completed, choose, next, reset }), [current, score, selected, completed])
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
export function useQuiz() { const context = useContext(QuizContext); if (!context) throw new Error('useQuiz must be used inside QuizProvider'); return context }
