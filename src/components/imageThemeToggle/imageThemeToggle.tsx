"use client";

import { FC } from "react";
import Image from "next/image";

import { useTheme } from "@/hooks/useTheme";

import { themes } from "@/context/ThemeProvider";

import styles from "./imageThemeToggle.module.scss";

export const ImageThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const currentThemeIndex = themes.findIndex((t) => t === theme);

  const clickLeft = () => {
    toggleTheme(
      themes[(currentThemeIndex - 1 + themes.length) % themes.length]
    );
  };

  const clickRight = () => {
    toggleTheme(themes[(currentThemeIndex + 1) % themes.length]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.clickZones}>
        <div
          onClick={clickLeft}
          className={`${styles.clickZone} ${styles.leftZone}`}
        />
        <div
          onClick={clickRight}
          className={`${styles.clickZone} ${styles.rightZone}`}
        />
      </div>

      <Image
        src="/alphabay.jpg"
        alt="Cartoon profile of Aditya Khaire"
        width={400}
        height={400}
        priority
      />
    </div>
  );
};
