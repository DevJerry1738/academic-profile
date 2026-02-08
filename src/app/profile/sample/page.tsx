import Button from "../../../components/ui/Button"
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
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
    "Community Health Interventions"
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
    { role: "Dean, Faculty of Public Health", institution: "University of Ibadan", years: "2014–2016" },
    { role: "Professor", institution: "University of Ibadan", years: "2012–2024" },
  ],
  publications: [
    { title: "Community Insight on The Ethical, Legal, And Social Implications Of Stroke Genomic and Biobanking Research in Sub-Saharan Africa", year: "2022" },
    { title: "Exclusive Breastfeeding Intentions Among Adolescents In Urban Communities In Ibadan, Nigeria", year: "2022" },
    { title: "Symbolic legislation and the regulation of stroke biobanking and genomics research in Sub-Saharan Africa", year: "2021" },
    { title: "Community Gatekeepers' Awareness and Perception of Prevention of Mother-to-Child Transmission of HIV Services in Ibadan, Nigeria", year: "2007" },
  ],
  avatar: "https://tribuneonlineng.com/wp-content/uploads/2020/01/IMG-20191225-WA0026.jpg",
  email: "vc@chrislanduniversity.edu.ng",
  linkedin: "https://ng.linkedin.com/in/oyedunni-arulogun-b4525b38"
}

export default function SampleProfile() {
  return (
    <main className={`${styles.main} page-main`}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            <img src={profile.avatar} alt={profile.name} className={styles.avatar} />
            <div className={styles.meta}>
              <h1 className={styles.name}>{profile.name}</h1>
              <p className={styles.title}>{profile.title}</p>
              <p className={styles.institution}>{profile.institution}</p>
              <div className={styles.social}>
                <a href={`mailto:${profile.email}`} aria-label="Email" className={styles.socialLink}>
                  <FaEnvelope aria-hidden />
                </a>
                <a href={profile.linkedin} aria-label="LinkedIn" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin aria-hidden />
                </a>
              </div>
            </div>

            <div className={styles.actions}>
              <Button href="/Prof-Oyedunni-Arulogun-CV.pdf" variant="outline" size="md">Download CV</Button>
              <Button href="/register" variant="primary" size="md" className={styles.cta}>Create Your Profile</Button>
            </div>
          </div>

          <p className={styles.bio}>{profile.bio}</p>
        </div>
      </header>

      <section className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.section}>
              <h2 className={styles.sectionHeader}>Research Interests</h2>
              <ul className={styles.list}>
                {profile.research.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionHeader}>Selected Publications</h2>
              <ol className={styles.pubList}>
                {profile.publications.map((p, i) => (
                  <li key={i} className={styles.pubItem}>
                    {p.title} <span className={styles.pubYear}>({p.year})</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className={styles.aside}>
            <div className={styles.section}>
              <h2 className={styles.sectionHeader}>Education</h2>
              <ul className={styles.list}>
                {profile.education.map((e, i) => (
                  <li key={i}>
                    <strong>{e.degree}</strong>
                    <div className={styles.muted}>{e.institution} • {e.year}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionHeader}>Employment</h2>
              <ul className={styles.list}>
                {profile.employment.map((e, i) => (
                  <li key={i}>
                    <strong>{e.role}</strong>
                    <div className={styles.muted}>{e.institution} • {e.years}</div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}