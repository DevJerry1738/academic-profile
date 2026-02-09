"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FaUser, FaBook, FaBriefcase, FaGraduationCap, FaFileAlt, FaEnvelope, FaLayerGroup, FaEdit } from "react-icons/fa"
import styles from "./ProfileLayout.module.css"

interface ProfileLayoutProps {
    children: React.ReactNode
}

const navItems = [
    { id: "hero", label: "Home", icon: <FaUser /> },
    { id: "about", label: "About", icon: <FaFileAlt /> },
    { id: "expertise", label: "Expertise", icon: <FaLayerGroup /> },
    { id: "resume", label: "Resume", icon: <FaBriefcase /> },
    { id: "publications", label: "Research", icon: <FaBook /> },
    { id: "services", label: "Services", icon: <FaGraduationCap /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
    { id: "edit", label: "Edit Prifile", icon: <FaEdit /> },
]

export default function ProfileLayout({ children }: ProfileLayoutProps) {
    const [activeSection, setActiveSection] = useState("hero")

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => document.getElementById(item.id))
            const scrollPosition = window.scrollY + 100 // Offset

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    setActiveSection(section.id)
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80, // Adjust for header height
                behavior: "smooth",
            })
        }
    }

    return (
        <div className={styles.layout}>
            {/* Desktop Navigation */}
            <header className={styles.desktopNav}>
                <div className={`container ${styles.desktopNavInner}`}>
                    <ul className={styles.navItems}>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`${styles.navLink} ${activeSection === item.id ? styles.navLinkActive : ""}`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <Link href="/profile/edit" className={styles.editButton}>
                        Edit Profile
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main>{children}</main>
        </div>
    )
}