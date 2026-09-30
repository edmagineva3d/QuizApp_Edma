import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const backgroundBubbles = [
  { className: 'bubble bubble-one' },
  { className: 'bubble bubble-two' },
  { className: 'bubble bubble-three' },
  { className: 'bubble bubble-four' },
  { className: 'bubble bubble-five' },
  { className: 'bubble bubble-six' },
  { className: 'bubble bubble-seven' },
  { className: 'bubble bubble-eight' },
  { className: 'bubble bubble-nine' },
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <main className="page home-page">
      <div className="moving-background" aria-hidden="true">
        {backgroundBubbles.map((bubble, index) => (
          <span key={index} className={bubble.className} />
        ))}
      </div>
      <motion.div
        className="home-card"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6, ease: 'easeOut' }}
      >
        <div className="sparkle"><Sparkles size={18} /></div>
        <p className="welcome">Welcome to the</p>
        <h1>Frontend Quiz!</h1>
        <p className="description">Test your knowledge of HTML, CSS, JavaScript, React, and modern web development.</p>
        <motion.button
          className="gradient-button"
          onClick={() => navigate('/quiz')}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: .96 }}
        >
          Start Quiz <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </main>
  )
}
