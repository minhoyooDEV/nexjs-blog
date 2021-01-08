import styles from './nav.module.scss'

export default function Nav({ children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>nav</nav>
    </div>
  )
}
