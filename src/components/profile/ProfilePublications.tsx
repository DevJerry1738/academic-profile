import { FaExternalLinkAlt } from "react-icons/fa"
import styles from "./ProfilePublications.module.css"

interface Publication {
    title: string
    year: string
    url?: string
    journal?: string
}

interface ProfilePublicationsProps {
    publications: Publication[]
}

export default function ProfilePublications({ publications }: ProfilePublicationsProps) {
    return (
        <section id="publications" className={styles.section}>
            <div className="container">
                <h2 className={styles.header}>Selected Publications</h2>
                <div className={styles.pubList}>
                    {publications.map((pub, index) => (
                        <div key={index} className={styles.pubItem}>
                            <h3 className={styles.pubTitle}>{pub.title}</h3>
                            <div className={styles.pubMeta}>
                                <span className={styles.pubYear}>{pub.year}</span>
                                {pub.journal && <span>{pub.journal}</span>}
                                {pub.url && (
                                    <a href={pub.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        View Publication <FaExternalLinkAlt style={{ fontSize: "0.75rem", marginLeft: "4px" }} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
