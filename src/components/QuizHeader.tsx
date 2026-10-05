import { Sparkles } from 'lucide-react'

export default function QuizHeader({ score, total }: { score: number; total: number }) {
  return (
    <header className="quiz-header">
      <div className="brand">
        <Sparkles size={18} /> Frontend Quiz
      </div>
      <div className="quiz-header-right">
        <span>{total} questions • frontend basics</span>
        <span className="score-badge">Score: {score}/{total}</span>
      </div>
    </header>
  )
}
