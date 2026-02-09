import { IconType } from "react-icons"
import { FaChalkboardTeacher, FaHandHoldingHeart, FaMicroscope } from "react-icons/fa"
import styles from "./ProfileServices.module.css"

interface Service {
    title: string
    description: string
    icon?: string // We'll map string to icon
}

interface ProfileServicesProps {
    services: Service[]
}

const iconMap: Record<string, IconType> = {
    teaching: FaChalkboardTeacher,
    mentoring: FaHandHoldingHeart,
    research: FaMicroscope,
}

export default function ProfileServices({ services }: ProfileServicesProps) {
    return (
        <section id="services" className={styles.section}>
            <div className="container">
                <h2 className={styles.header}>Services</h2>
                <div className={styles.grid}>
                    {services.map((service, index) => {
                        const Icon = (service.icon && iconMap[service.icon]) || FaChalkboardTeacher

                        return (
                            <div key={index} className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <Icon />
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
