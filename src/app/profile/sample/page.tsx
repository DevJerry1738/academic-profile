import ProfileLayout from "../../../components/profile/ProfileLayout"
import ProfileHero from "../../../components/profile/ProfileHero"
import ProfileAbout from "../../../components/profile/ProfileAbout"
import ProfileExpertise from "../../../components/profile/ProfileExpertise"
import ProfileResume from "../../../components/profile/ProfileResume"
import ProfilePublications from "../../../components/profile/ProfilePublications"
import ProfileServices from "../../../components/profile/ProfileServices"
import ProfileContact from "../../../components/profile/ProfileContact"
import styles from "./page.module.css"


const profile = {
  name: "Prof. Oyedunni S. Arulogun",
  title: "Professor of Health Promotion and Education",
  institution: "Chrisland University",
  bio: "Oyedunni Sola Arulogun is a Nigerian professor of health promotion and education. She is the second and incumbent vice-chancellor of Chrisland University, a private university in Owode, Abeokuta, Ogun State. She holds the title Professor of Health Promotion and Education and is known as a speech pathology and audiology expert. She previously served as the director of the Centre for Entrepreneurship and Innovation at the University of Ibadan.",
  research: [
    "Health Promotion and Education",
    "Speech Pathology and Audiology",
    "Reproductive Health",
    "Stroke Studies",
    "Community Health Interventions",
  ],
  education: [
    { degree: "Ph.D., Health Promotion and Education", institution: "University of Ibadan", year: "1998" },
    { degree: "M.P.H.", institution: "University of Ibadan", year: "1992" },
    { degree: "M.Ed., Special Education", institution: "University of Ibadan", year: "1989" },
    { degree: "B.Ed., Special Education", institution: "University of Ibadan", year: "1987" },
  ],
  employment: [
    { role: "Vice-Chancellor", institution: "Chrisland University", years: "2024–present" },
    { role: "Director, Centre for Entrepreneurship and Innovation", institution: "University of Ibadan", years: "2019–2024" },
  ],
  publications: [
    { title: "Community Insight on Stroke Genomics", year: "2022", journal: "Journal of Community Genetics" },
  ],
  avatar: "https://tribuneonlineng.com/wp-content/uploads/2020/01/IMG-20191225-WA0026.jpg",
  email: "vc@chrislanduniversity.edu.ng",
  linkedin: "https://ng.linkedin.com/in/oyedunni-arulogun-b4525b38",
  phone: "+234 800 123 4567",
  address: "Chrisland University, Ogun State, Nigeria",
  skills: [
    { name: "Health Promotion", level: 95 },
    { name: "Academic Leadership", level: 90 },
  ],
  services: [
    { title: "Academic Mentorship", description: "Guiding students and junior faculty." },
    { title: "Research Collaboration", description: "Public health research partnerships." },
  ],
}

import { FaUser, FaFileAlt, FaLayerGroup, FaBriefcase, FaBook, FaGraduationCap, FaEnvelope } from "react-icons/fa"

const navItems = [
  { label: "About", href: "#about", icon: FaFileAlt },
  { label: "Expertise", href: "#expertise", icon: FaLayerGroup },
  { label: "Resume", href: "#resume", icon: FaBriefcase },
  { label: "Publications", href: "#publications", icon: FaBook },
  { label: "Services", href: "#services", icon: FaGraduationCap },
  { label: "Contact", href: "#contact", icon: FaEnvelope },
]

export default function SampleProfile() {
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
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.navLink}>
                    <item.icon className={styles.navIcon} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
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
              cvUrl="/Prof-Oyedunni-Arulogun-CV.pdf"
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
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.mobileNavLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </ProfileLayout>
  )
}
