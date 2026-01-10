import Link from "next/link"
import styles from "./Navbar.module.css"
import Button from "../ui/Button"

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          AcademicProfiles
        </Link>

        <div className={styles.actions}>
          <Link href="/login" className={styles.login}>
            Log in
          </Link>
          <Button href="/register" variant="primary" size="sm">Sign up</Button>
        </div>
      </nav>
    </header>
  )
}
