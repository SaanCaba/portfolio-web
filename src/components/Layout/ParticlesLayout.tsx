import React from 'react'
import Particle from '../Particle'
import styles from './layout.module.css'

interface Props {
  children: React.ReactNode
}

function ParticlesLayout({ children }: Props) {
  return (
    <main style={{ position: 'relative' }}>
      <Particle />
      {children}
    </main>
  )
}

export default ParticlesLayout
