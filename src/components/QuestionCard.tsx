import { motion } from 'framer-motion'
import type { QuizQuestion } from '../data/questions'
import AnswerOption from './AnswerOption'
export default function QuestionCard({ question, selected, choose }: { question: QuizQuestion; selected: string | null; choose: (answer: string) => void }) { return <motion.section className="question-card" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}><div className="question-label">Question {question.id}</div><h2>{question.question}</h2><div className="answers">{question.choices.map((choice) => <AnswerOption key={choice} label={choice} selected={selected === choice} onClick={() => choose(choice)} />)}</div></motion.section> }
