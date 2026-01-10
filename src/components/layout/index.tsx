import styles from "./layout.module.css"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return <div className="page-main">{children}</div>
}

export default MainLayout
