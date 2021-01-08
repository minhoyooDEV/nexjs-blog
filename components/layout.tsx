import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* <header className={styles.header}>
        <div className={styles.wrapper}>
          <div>logo</div>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
          </ul>
        </div>
      </header> */}
      <Nav>nav</Nav>
      <main>children</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  )
}
