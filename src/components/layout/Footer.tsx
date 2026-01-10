import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.brand}>AcademicProfiles</p>

        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/login">Log in</Link>
          <Link href="/register">Sign up</Link>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} AcademicProfiles. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
