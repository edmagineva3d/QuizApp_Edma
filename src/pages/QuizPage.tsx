import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../data/questions'
import { useQuiz } from '../context/QuizContext'
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import QuizHeader from '../components/QuizHeader'
export default function QuizPage() { const navigate = useNavigate(); const { current, selected, choose, next } = useQuiz(); const question = questions[current]; const goNext = () => { next(); if (current === questions.length - 1) navigate('/result') }; return <main className="page quiz-page"><QuizHeader /><div className="quiz-note">Choose one answer before moving forward.</div><div className="quiz-shell"><ProgressBar current={current} total={questions.length} /><QuestionCard question={question} selected={selected} choose={choose} /><div className="quiz-nav"><button className="text-button" onClick={() => navigate('/')}><ArrowLeft size={17}/> Home</button><motion.button className="gradient-button" disabled={!selected} onClick={goNext} whileHover={selected ? { scale: 1.04 } : undefined} whileTap={selected ? { scale: .96 } : undefined}>{current === questions.length - 1 ? 'Finish Quiz' : 'Next Question'} <ArrowRight size={17}/></motion.button></div></div></main> }
