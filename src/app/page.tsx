"use client";

import { ImageThemeToggle } from "@/components/imageThemeToggle";
// import {
//   technologie_icon_map,
//   TechnologieIcon,
// } from "@/components/technologieIcon";
// import { InfiniteCarousel } from "@/components/infiniteCarousel";

import styles from "./page.module.scss";

export default function HomePage() {
  // const techs = Object.keys(technologie_icon_map);

  return (
    <div className={styles.home}>
      <div className={styles.personal}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hi, I&apos;m</p>
          <h1 className={styles.name}>Aditya Khaire</h1>
          <p className={styles.bio}>
            Aspiring offensive security practitioner with a focus on system internals, networking, and controlled lab environments. 
            I build and test isolated infrastructures to simulate real-world attack scenarios, 
            exploring reconnaissance, enumeration, and privilege boundaries using tools such as Nmap, Wireshark, and Docker. 
            My approach emphasizes understanding how systems fail and how attackers exploit those gaps.

          </p>
        </div>

        <div className={styles["image-wrapper"]}>
          <ImageThemeToggle />
        </div>
      </div>

      {/* <div className={styles.technologies}>
        <InfiniteCarousel
          items={techs.map((tech, i) => (
            <TechnologieIcon key={i} technologie={tech} size={40} />
          ))}
        />
      </div> */}
    </div>
  );
}
