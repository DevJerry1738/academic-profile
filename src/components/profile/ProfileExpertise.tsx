import styles from "./ProfileExpertise.module.css"

interface Skill {
    name: string
    level: number // 0 to 100
}

interface ProfileExpertiseProps {
    skills: Skill[]
}

export default function ProfileExpertise({ skills }: ProfileExpertiseProps) {
    return (
        <section id="expertise" className={styles.section}>
            <div className="container">
                <h2 className={styles.header}>Expertise</h2>
                <div className={styles.grid}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.skillItem}>
                            <div className={styles.skillInfo}>
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className={styles.skillBarBg}>
                                <div
                                    className={styles.skillBarFill}
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
