import { motion } from 'framer-motion'
export default function AnswerOption({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) { return <motion.button type="button" className={`answer-option ${selected ? 'selected' : ''}`} onClick={onClick} whileHover={{ scale: 1.015, x: 3 }} whileTap={{ scale: 0.985 }}><span className="choice-dot" />{label}</motion.button> }
