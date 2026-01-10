import type { Profile } from '../../types/profile'
import styles from './profile.module.css'

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <article className={styles.card}>
      <h2 className={styles.name}>{profile.name}</h2>
      <p className={styles.username}>@{profile.username}</p>
    </article>
  )
}

export default ProfileCard
