import styles from "./ui.module.css"

export function Button({ children }: { children?: React.ReactNode }) {
  return <button className={styles.button}>{children ?? 'Button'}</button>
}

export default Button
