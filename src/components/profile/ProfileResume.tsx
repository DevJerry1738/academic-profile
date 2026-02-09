import { FaBriefcase, FaGraduationCap } from "react-icons/fa"
import Button from "../ui/Button"
import styles from "./ProfileResume.module.css"

interface Education {
    degree: string
    institution: string
    year: string
}

interface Experience {
    role: string
    institution: string
    years: string
    description?: string
}

interface ProfileResumeProps {
    education: Education[]
    experience: Experience[]
    cvUrl?: string
}

export default function ProfileResume({ education, experience, cvUrl }: ProfileResumeProps) {
    return (
        <section id="resume" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Resume</h2>
                    {cvUrl && <Button href={cvUrl} variant="outline" size="sm">Download CV</Button>}
                </div>

                <div className={styles.timelineGrid}>
                    {/* Experience Column */}
                    <div>
                        <h3 className={styles.columnTitle}>
                            <FaBriefcase /> Professional Experience
                        </h3>
                        <div className={styles.timeline}>
                            {experience.map((job, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <h4 className={styles.role}>{job.role}</h4>
                                    <span className={styles.meta}>{job.institution} • {job.years}</span>
                                    {job.description && <p className={styles.description}>{job.description}</p>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className={styles.columnTitle}>
                            <FaGraduationCap /> Education
                        </h3>
                        <div className={styles.timeline}>
                            {education.map((edu, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <h4 className={styles.role}>{edu.degree}</h4>
                                    <span className={styles.meta}>{edu.institution} • {edu.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
