import styles from "./ProfileAbout.module.css"

interface ProfileAboutProps {
    bio: string
    researchInterests: string[]
}

export default function ProfileAbout({ bio, researchInterests }: ProfileAboutProps) {
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <h2 className={styles.header}>About Me</h2>
                <div className={styles.grid}>
                    <div className={styles.bio}>
                        {bio}
                    </div>
                    <aside>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Research Interests</h3>
                            <div className={styles.tagContainer}>
                                {researchInterests.map((interest, index) => (
                                    <span key={index} className={styles.tag}>
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}
