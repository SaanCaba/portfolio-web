import { useAnimation, motion } from 'framer-motion'
import React, { useEffect } from 'react'

const controlAnimations = {
  fromLeft: {
    from: 'translateX(-100px)',
    to: 'translateX(0px)'
  },
  fromRight: {
    from: 'translateX(200px)',
    to: 'translateX(0px)'
  }
}

interface Props {
  children: React.ReactNode
  fromAction: 'fromLeft' | 'fromRight'
}

function FadeInWhenVisibleWrapper({ children, fromAction }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: controlAnimations[fromAction].from }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      whileInView={{
        opacity: 1,
        transform: controlAnimations[fromAction].to
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisibleWrapper
