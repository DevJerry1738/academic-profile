"use client"

import Link from "next/link"
import styles from "./login.module.css"
import Button from "../../../components/ui/Button"

export default function LoginPage() {
  return (
    <main className={styles.wrap}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <label className={styles.label}>
            Email
            <input type="email" name="email" className={styles.input} />
          </label>

          <label className={styles.label}>
            Password
            <input type="password" name="password" className={styles.input} />
          </label>

          <Button type="submit" variant="primary" size="md">Login</Button>
        </form>

        <p className={styles.links}>
          Don't have an account? <Link href="/register">Sign up</Link>
        </p>
      </div>
    </main>
  )
}
