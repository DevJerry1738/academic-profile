"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Button from "../components/ui/Button";

export default function LandingPage() {
  const heroBgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${-offset}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={`page-main`}>
      <header className={`${styles.hero}`}>
        <div ref={heroBgRef} className={styles.heroBg}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroInner}>
          <h1 className={styles.headline}>Elevate Your Academic Presence with Professional Profiles</h1>
          <p className={styles.sub}>
            Build a sleek, shareable profile that showcases your research expertise, teaching experience, and career achievements. Tailored specifically for scholars, educators, and academic professionals.
          </p>
          <div className={styles.ctaRow}>
            <Button href="/register" variant="primary" size="md">Get Started Now</Button>
            <Button href="/profile/sample" variant="secondary" size="md">Explore a Sample</Button>
          </div>
        </div>
      </header>
      <section className="container">
        <h2 className={styles.center}>Why Choose Our Platform?</h2>
        <div className={styles.features}>
          <article className={styles.card}>
            <h3>Polished Professional Profiles</h3>
            <p>Display your research, teaching, and career milestones in a clear, impactful format that resonates with academic peers.</p>
          </article>
          <article className={styles.card}>
            <h3>Effortless CV Integration</h3>
            <p>Upload your CV and let our system generate a refined profile automatically, saving you valuable time.</p>
          </article>
          <article className={styles.card}>
            <h3>Easy Sharing and Visibility</h3>
            <p>Make your profile publicly accessible and easy to share with colleagues, institutions, and collaborators worldwide.</p>
          </article>
          <article className={styles.card}>
            <h3>Seamless CV Export</h3>
            <p>Generate and download customized CVs from your profile data whenever you need them.</p>
          </article>
        </div>
      </section>
      <section className={styles.ctaSection}>
        <div className="container center">
          <h2>Ready to Amplify Your Academic Impact?</h2>
          <p>Join thousands of scholars in creating profiles that open doors to new opportunities in research and education.</p>
          <div style={{ marginTop: '1rem' }}>
            <Button href="/register" variant="primary" size="md">Sign Up Today</Button>
          </div>
        </div>
      </section>
    </main>
  )
}