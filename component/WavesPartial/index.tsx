"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import styles from "./WavesPartial.module.scss";

type WavesPartialProps = {
  small?: boolean;
  reverse?: boolean;
  className?: string;
};

export default function WavesPartial({
  small,
  reverse,
  className,
}: WavesPartialProps) {
  let classNameCombined = `${styles.partial} ${className}`;

  if (small) {
    classNameCombined += ` ${styles["partial--small"]}`;
  }

  if (reverse) {
    classNameCombined += ` ${styles["partial--reverse"]}`;
  }

  return (
    <div className={classNameCombined}>
      <ParallaxProvider>
        <Parallax speed={-4} className={styles.partial__wave}>
          {(reverse && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 520"
              className={styles.partial__wave__svg}
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                d="M0,128L80,133.3C160,139,320,149,480,165.3C640,181,800,203,960,181.3C1120,160,1280,96,1360,64L1440,32L1440,520L1360,520C1280,520,1120,520,960,520C800,520,640,520,480,520C320,520,160,520,80,520L0,520Z"
              ></path>
            </svg>
          )) || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 520"
              className={styles.partial__wave__svg}
              preserveAspectRatio="none"
            >
              <defs>
                <path
                  id="wave-path-partial-1"
                  d="M0,0L48,5.3C96,11,192,21,288,48C384,75,480,117,576,149.3C672,181,768,203,864,202.7C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,520L1392,520C1344,520,1248,520,1152,520C1056,520,960,520,864,520C768,520,672,520,576,520C480,520,384,520,288,520C192,520,96,520,48,520L0,520Z"
                ></path>
                <filter id="noise-partial-1">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="19.5"
                    numOctaves="10"
                    result="turbulence"
                  />
                  <feComposite
                    operator="in"
                    in="turbulence"
                    in2="SourceAlpha"
                    result="composite"
                  />
                  <feColorMatrix in="composite" type="luminanceToAlpha" />
                  <feBlend
                    in="SourceGraphic"
                    in2="composite"
                    mode="color-burn"
                  />
                </filter>
                <linearGradient id="fade-partial-1" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stop-color="white" stop-opacity="0.2" />
                  <stop offset="50%" stop-color="white" stop-opacity="0.4" />
                  <stop offset="100%" stop-color="white" stop-opacity="0.6" />
                </linearGradient>
                <mask id="gradient-partial-1">
                  <use
                    href="#wave-path-partial-1"
                    fill="url('#fade-partial-1')"
                  />
                </mask>
              </defs>
              <use href="#wave-path-partial-1" fill="#2f80ed" />
              <use
                href="#wave-path-partial-1"
                fill="#2f80ed"
                mask="url('#gradient-partial-1')"
                filter="url('#noise-partial-1')"
              />
            </svg>
          )}
          <div className={styles.partial__wave__bottom}></div>
        </Parallax>

        <Parallax speed={-8} className={styles.partial__wave}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 520"
            className={styles.partial__wave__svg}
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path-partial-2"
                d="M0,32L80,37.3C160,43,320,53,480,80C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,520L1360,520C1280,520,1120,520,960,520C800,520,640,520,480,520C320,520,160,520,80,520L0,520Z"
              ></path>
              <filter id="noise-partial-2">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="19.5"
                  numOctaves="10"
                  result="turbulence"
                />
                <feComposite
                  operator="in"
                  in="turbulence"
                  in2="SourceAlpha"
                  result="composite"
                />
                <feColorMatrix in="composite" type="luminanceToAlpha" />
                <feBlend in="SourceGraphic" in2="composite" mode="color-burn" />
              </filter>
              <linearGradient id="fade-partial-2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="white" stop-opacity="0.2" />
                <stop offset="50%" stop-color="white" stop-opacity="0.4" />
                <stop offset="100%" stop-color="white" stop-opacity="0.6" />
              </linearGradient>
              <mask id="gradient-partial-2">
                <use
                  href="#wave-path-partial-2"
                  fill="url('#fade-partial-2')"
                />
              </mask>
            </defs>
            <use href="#wave-path-partial-2" fill="#a2d9ff" />
            <use
              href="#wave-path-partial-2"
              fill="#a2d9ff"
              mask="url('#gradient-partial-2')"
              filter="url('#noise-partial-2')"
            />
          </svg>

          <div className={styles.partial__wave__bottom}></div>
        </Parallax>

        <Parallax speed={-12} className={styles.partial__wave}>
          {(reverse && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 520"
              className={styles.partial__wave__svg}
              preserveAspectRatio="none"
            >
              <defs>
                <path
                  id="wave-path-partial-3-reverse"
                  d="M0,0L48,5.3C96,11,192,21,288,48C384,75,480,117,576,149.3C672,181,768,203,864,202.7C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,520L1392,520C1344,520,1248,520,1152,520C1056,520,960,520,864,520C768,520,672,520,576,520C480,520,384,520,288,520C192,520,96,520,48,520L0,520Z"
                ></path>
                <filter id="noise-partial-3-reverse">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="19.5"
                    numOctaves="10"
                    result="turbulence"
                  />
                  <feComposite
                    operator="in"
                    in="turbulence"
                    in2="SourceAlpha"
                    result="composite"
                  />
                  <feColorMatrix in="composite" type="luminanceToAlpha" />
                  <feBlend
                    in="SourceGraphic"
                    in2="composite"
                    mode="color-burn"
                  />
                </filter>
                <linearGradient
                  id="fade-partial-3-reverse"
                  x1="1"
                  y1="0"
                  x2="0"
                  y2="0"
                >
                  <stop offset="0%" stop-color="white" stop-opacity="0.2" />
                  <stop offset="50%" stop-color="white" stop-opacity="0.4" />
                  <stop offset="100%" stop-color="white" stop-opacity="0.6" />
                </linearGradient>
                <mask id="gradient-partial-3-reverse">
                  <use
                    href="#wave-path-partial-3-reverse"
                    fill="url('#fade-partial-3-reverse')"
                  />
                </mask>
              </defs>
              <use href="#wave-path-partial-3-reverse" fill="#2f80ed" />
              <use
                href="#wave-path-partial-3-reverse"
                fill="#2f80ed"
                mask="url('#gradient-partial-3-reverse')"
                filter="url('#noise-partial-3-reverse')"
              />
            </svg>
          )) || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 520"
              className={styles.partial__wave__svg}
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                d="M0,128L80,133.3C160,139,320,149,480,165.3C640,181,800,203,960,181.3C1120,160,1280,96,1360,64L1440,32L1440,520L1360,520C1280,520,1120,520,960,520C800,520,640,520,480,520C320,520,160,520,80,520L0,520Z"
              ></path>
            </svg>
          )}

          <div className={styles.partial__wave__bottom}></div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}
