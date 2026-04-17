import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      className="section-title-wrap"
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      {description ? (
        <p className="section-subtitle">{description}</p>
      ) : null}
    </motion.div>
  );
}
