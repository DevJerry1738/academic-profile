"use client"

import ProfileLayout from "../../../components/profile/ProfileLayout"
import ProfileHero from "../../../components/profile/ProfileHero"
import ProfileAbout from "../../../components/profile/ProfileAbout"
import ProfileExpertise from "../../../components/profile/ProfileExpertise"
import ProfileResume from "../../../components/profile/ProfileResume"
import ProfilePublications from "../../../components/profile/ProfilePublications"
import ProfileServices from "../../../components/profile/ProfileServices"
import ProfileContact from "../../../components/profile/ProfileContact"
import ProfileImage from "../../../assets/profileimage.png"
import styles from "./page.module.css"
import { useState, useEffect } from "react"

const profile = {
  name: "Dr. Olalekan Joel Awujoola",
  title: "Chief System Analyst and Programmer",
  institution: "Nigerian Defence Academy",
  bio: "A seasoned Chief System Analyst and Programmer with over two decades of experience, specializing in technological innovation, computational modeling, and algorithm development.",
  research: [
    "Machine Learning & Deep Learning",
    "Healthcare AI Applications",
    "Cybersecurity & Network Security",
    "Medical Image Analysis",
    "Computational Modeling",
  ],
  education: [
    { degree: "Ph.D. in Computer Science", institution: "Nigerian Defence Academy, Kaduna", year: "2024" },
    { degree: "M.Sc. in Information Technology", institution: "National Open University of Nigeria", year: "2024" },
    { degree: "M.Sc. in Computer Science", institution: "Ahmadu Bello University, Zaria", year: "2016" },
    { degree: "M.Sc. in Nuclear and Radiation Physics", institution: "Nigerian Defence Academy, Kaduna", year: "2012" },
    { degree: "B.Tech in Mathematics Education with Computer Science", institution: "Federal University of Technology, Minna", year: "1998" },
  ],
  employment: [
    { role: "Chief System Analyst / Programmer", institution: "Nigerian Defence Academy, Kaduna", years: "August 2001–Present" },
    { role: "Adjunct Lecturer", institution: "Stepping Stone Advertising, New York, NY", years: "2013–Present" },
  ],
  publications: [
    { title: "Integration of layer-wise relevance propagation, recursive data pruning, and convolutional neural networks for improved text classification", year: "2025", journal: "FUDMA Journal of Sciences" },
    { title: "Mitigating Class Imbalance in Tuberculosis Detection: Combining Smote and Tomek Link with Modified Focal Loss and Class Weighting In a Transfer Learning Framework", year: "2025", journal: "FUDMA Journal of Sciences" },
    { title: "Performance evaluation of efficientnetv2 models on the classification of histopathological benign breast cancer images", year: "2024", journal: "Science Journal of University of Zakho" },
    { title: "A Combined Approach Of Adasyn And Tomeklink For Anomaly Network Intrusion Detection System Using Some Selected Machine Learning Algorithms", year: "2024", journal: "International Journal of Web Research" },
    { title: "Malware detection and classification using embedded convolutional neural network and long short-term memory technique", year: "2023", journal: "Science World Journal" },
  ],
  avatar: ProfileImage,
  email: "ojawujoola@nda.edu.ng",
  linkedin: "https://linkedin.com/in/olalekan-awujoola",
  phone: "+234 803 705 3088",
  address: "Nigerian Defence Academy, PMB 2109, Kaduna, Kaduna State, Nigeria",
  skills: [
    { name: "TensorFlow", level: 100 },
    { name: "Machine Learning", level: 100 },
    { name: "Data Analysis", level: 100 },
    { name: "Security Analysis", level: 100 },
    { name: "Python", level: 90 },
    { name: "PyTorch", level: 90 },
    { name: "Keras", level: 90 },
    { name: "Neural Network", level: 90 },
    { name: "Deep Learning", level: 90 },
    { name: "Malware Detection", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Digital Forensic", level: 85 },
    { name: "Network Intrusion Detection", level: 80 },
    { name: "PHP", level: 80 },
    { name: "scikit-learn", level: 75 },
  ],
  services: [
    { title: "AI Research & Development", description: "Machine learning and deep learning model development for healthcare and cybersecurity applications." },
    { title: "Technical Mentorship", description: "Guiding junior researchers and cadets in software development and AI methodologies." },
    { title: "Cybersecurity Solutions", description: "Network intrusion detection, malware classification, and digital forensics." },
    { title: "Academic Collaboration", description: "Research partnerships and collaborative projects in AI and computational modeling." },
  ],
}

import { FaFileAlt, FaLayerGroup, FaBriefcase, FaBook, FaGraduationCap, FaEnvelope, FaHome, FaEdit } from "react-icons/fa"

const navItems = [
  { label: "About", href: "#about", icon: FaFileAlt },
  { label: "Home", href: "#home", icon: FaHome },
  { label: "Expertise", href: "#expertise", icon: FaLayerGroup },
  { label: "Resume", href: "#resume", icon: FaBriefcase },
  { label: "Publications", href: "#publications", icon: FaBook },
  { label: "Services", href: "#services", icon: FaGraduationCap },
  { label: "Contact", href: "#contact", icon: FaEnvelope },
  { label: "Edit Profile", href: "#edit", icon: FaEdit },
]

export default function Sample2Profile() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const id = item.href.replace("#", "")
        return document.getElementById(id)
      })
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Auto-scroll mobile nav to show active item
    const activeLink = document.querySelector(`.${styles.mobileNav} a[href="#${activeSection}"]`)
    const navList = document.querySelector(`.${styles.mobileNavList}`)

    if (activeLink && navList) {
      const linkRect = activeLink.getBoundingClientRect()
      const listRect = navList.getBoundingClientRect()
      const offset = linkRect.left - listRect.left + navList.scrollLeft

      navList.scrollTo({
        left: offset - (navList.clientWidth / 2) + (linkRect.width / 2),
        behavior: "smooth",
      })
    }
  }, [activeSection, styles])

  return (
    <ProfileLayout>
      <ProfileHero
        name={profile.name}
        title={profile.title}
        institution={profile.institution}
        avatar={profile.avatar}
        email={profile.email}
        linkedin={profile.linkedin}
      />

      <div className={styles.container}>
        {/* Sticky Desktop Nav */}
        <aside className={styles.sidebar}>
          <nav className={styles.desktopNav} aria-label="Profile sections">
            <ul className={styles.navList}>
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "")
                const isActive = activeSection === sectionId
                return (
                  <li key={item.href}>
                    <a href={item.href} className={styles.navLink} aria-current={isActive ? "page" : undefined}>
                      <item.icon className={styles.navIcon} />
                      <span>{item.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>

        <main className={styles.mainContent}>
          <section id="about" className={styles.section}>
            <ProfileAbout bio={profile.bio} researchInterests={profile.research} />
          </section>

          <section id="expertise" className={styles.section}>
            <ProfileExpertise skills={profile.skills} />
          </section>

          <section id="resume" className={styles.section}>
            <ProfileResume
              education={profile.education}
              experience={profile.employment}
              cvUrl="/Dr-Olalekan-Awujoola-CV.pdf"
            />
          </section>

          <section id="publications" className={styles.section}>
            <ProfilePublications publications={profile.publications} />
          </section>

          <section id="services" className={styles.section}>
            <ProfileServices services={profile.services} />
          </section>

          <section id="contact" className={styles.section}>
            <ProfileContact email={profile.email} phone={profile.phone} address={profile.address} />
          </section>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className={styles.mobileNav} aria-label="Profile sections">
        <ul className={styles.mobileNavList}>
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "")
            const isActive = activeSection === sectionId
            return (
              <li key={item.href}>
                <a href={item.href} className={styles.mobileNavLink} aria-current={isActive ? "page" : undefined}>
                  <item.icon className={styles.navIcon} />
                  <span className={styles.navText}>{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </ProfileLayout>
  )
}
