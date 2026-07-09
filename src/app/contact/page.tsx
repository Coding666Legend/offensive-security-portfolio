"use client";

import { Button } from "@/components/button";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";

import styles from "./contact.module.scss";
import { Card } from "@/components/card";

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <h1 className={styles.title}>Get In Touch</h1>
        <p className={styles.subtitle}>
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you!
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <h2>Let&apos;s Connect</h2>
          <p>
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p>

          <Card>
            <div className={styles.availability}>
              <h3>Availability</h3>
              <p>
                Currently open to Contribute In, Offensive Security Projects and Assessments
              </p>
            </div>
          </Card>
        </div>

        <Card>
          <div className={styles.contacts}>
            <h2>
              <FaRegComments /> Medias
            </h2>

            <div className={styles.contactMethods}>
              <a href="mailto:adikhaire27@gmail.com">
                <Button buttonStyle="secondary" full large>
                  <FaEnvelope size={24} /> adikhaire27@gmail.com
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/aditya-khaire-8a0474314/" target="_blank">
                <Button buttonStyle="secondary" full large>
                  <FaLinkedin size={24} /> linkedin.com/in/aditya-khaire
                </Button>
              </a>

              <a href="https://github.com/Coding666Legend" target="_blank">
                <Button buttonStyle="secondary" full large>
                  <FaGithub size={24} /> https://github.com/Coding666Legend
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
