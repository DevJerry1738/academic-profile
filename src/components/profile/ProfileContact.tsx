"use client"

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import Button from "../ui/Button"
import styles from "./ProfileContact.module.css"

interface ProfileContactProps {
    email: string
    phone?: string
    address?: string
}

export default function ProfileContact({ email, phone, address }: ProfileContactProps) {
    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <h2 className={styles.header}>Get in Touch</h2>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <p style={{ color: "var(--muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                            I am available for collaborations, speaking engagements, and consulting opportunities.
                            Feel free to reach out using the form or the contact details below.
                        </p>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <FaEnvelope />
                            </div>
                            <div className={styles.infoText}>
                                <h3>Email</h3>
                                <a href={`mailto:${email}`}>{email}</a>
                            </div>
                        </div>

                        {phone && (
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <FaPhone />
                                </div>
                                <div className={styles.infoText}>
                                    <h3>Phone</h3>
                                    <a href={`tel:${phone}`}>{phone}</a>
                                </div>
                            </div>
                        )}

                        {address && (
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div className={styles.infoText}>
                                    <h3>Office</h3>
                                    <p>{address}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={styles.formCard}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input type="text" id="name" className={styles.input} placeholder="Your Name" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input type="email" id="email" className={styles.input} placeholder="your@email.com" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea id="message" className={styles.textarea} placeholder="How can I help you?"></textarea>
                            </div>
                            <Button href="#" variant="primary" size="md" style={{ width: "100%" }}>Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
