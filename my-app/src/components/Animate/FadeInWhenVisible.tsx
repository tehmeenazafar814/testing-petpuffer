/* eslint-disable prettier/prettier */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisible({ children, delay = 0.3 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,  // only animate once
    threshold: 0.3,     // 20% in view to trigger
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
