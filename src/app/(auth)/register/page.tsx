"use client"

import Link from "next/link"
import styles from "./register.module.css"
import Button from "../../../components/ui/Button"

export default function RegisterPage() {
  return (
    <main className={styles.wrap}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create account</h2>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <label className={styles.label}>
            Full name
            <input name="name" className={styles.input} />
          </label>

          <label className={styles.label}>
            Email
            <input type="email" name="email" className={styles.input} />
          </label>

          <label className={styles.label}>
            Password
            <input type="password" name="password" className={styles.input} />
          </label>

          <Button type="submit" variant="primary" size="md">Create Account</Button>
        </form>

        <p className={styles.links}>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </main>
  )
}
