import React from 'react'
import styles from './layout.module.css'
function Layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.layout}>{children}</div>
}

export default Layout
