import { FaLinkedin, FaEnvelope, FaTwitter, FaGlobe } from "react-icons/fa"
import Image from "next/image"
import styles from "./ProfileHero.module.css"

interface ProfileHeroProps {
    name: string
    title: string
    institution: string
    avatar: string | { src: string; width: number; height: number }
    email?: string
    linkedin?: string
    website?: string
    twitter?: string
}

export default function ProfileHero({
    name,
    title,
    institution,
    avatar,
    email,
    linkedin,
    website,
    twitter,
}: ProfileHeroProps) {
    return (
        <section id="hero" className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.imageWrapper}>
                        {typeof avatar === "string" ? (
                            <img src={avatar} alt={name} className={styles.avatar} />
                        ) : (
                            <Image src={avatar} alt={name} className={styles.avatar} />
                        )}
                    </div>

                    <div className={styles.info}>
                        <span className={styles.institution}>{institution}</span>
                        <h1 className={styles.name}>{name}</h1>
                        <p className={styles.title}>{title}</p>

                        <div className={styles.socials}>
                            {email && (
                                <a href={`mailto:${email}`} className={styles.socialLink} aria-label="Email">
                                    <FaEnvelope />
                                </a>
                            )}
                            {linkedin && (
                                <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                            )}
                            {twitter && (
                                <a href={twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                            )}
                            {website && (
                                <a href={website} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Website">
                                    <FaGlobe />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
