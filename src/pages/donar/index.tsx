// src/pages/donar/index.tsx
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { X } from "lucide-react";
import { useState } from "react";
import QRCode from "react-qrcode-logo";
import { PAYMENT_METHODS } from "./_data";
import styles from "./donar.module.css";

export default function Donar() {
  const [activeQR, setActiveQR] = useState<string | null>(null);

  return (
    <Layout title="Apoya mi contenido">
      <main className={styles.donarPage}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Apoyo directo</span>
            <Heading as="h1">Construyamos juntos</Heading>
            <p className={styles.lead}>
              Apoya la creación de contenido técnico sin publicidad y con
              calidad sostenida.
            </p>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col col--6">
              <Heading as="h2" className={styles.sectionTitle}>
                Global
              </Heading>
              <div className={styles.grid}>
                {PAYMENT_METHODS.global.map(
                  ({ id, title, desc, color, Icon, href }) => (
                    <Link
                      key={id}
                      to={href!}
                      className={styles.glassCard}
                      aria-label={title}
                    >
                      <span
                        className={styles.cardIcon}
                        style={{ borderLeft: `3px solid ${color}` }}
                        aria-hidden
                      >
                        <Icon size={20} />
                      </span>
                      <span className={styles.cardInfo}>
                        <span className={styles.cardTitle}>{title}</span>
                        <span className={styles.cardDesc}>{desc}</span>
                      </span>
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="col col--6">
              <Heading as="h2" className={styles.sectionTitle}>
                Colombia
              </Heading>
              <div className={styles.grid}>
                {PAYMENT_METHODS.colombia.map(({ id, title, color, Icon }) => (
                  <button
                    key={id}
                    type="button"
                    className={clsx(
                      styles.glassCard,
                      activeQR === id && styles.activeCard
                    )}
                    onClick={() => setActiveQR(activeQR === id ? null : id)}
                    aria-pressed={activeQR === id}
                  >
                    <span
                      className={styles.cardIcon}
                      style={{ borderLeft: `3px solid ${color}` }}
                      aria-hidden
                    >
                      <Icon size={20} />
                    </span>
                    <span className={styles.cardInfo}>
                      <span className={styles.cardTitle}>{title}</span>
                      <span className={styles.cardDesc}>Ver código QR</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {activeQR && (
            <div className={styles.qrOverlay} role="dialog" aria-modal>
              <div className={styles.qrModal}>
                <button
                  className={styles.closeBtn}
                  onClick={() => setActiveQR(null)}
                  aria-label="Cerrar"
                >
                  <X />
                </button>
                <br />
                <QRCode
                  qrStyle="fluid"
                  eyeRadius={10}
                  size={200}
                  value={
                    PAYMENT_METHODS.colombia.find((m) => m.id === activeQR)?.qr
                  }
                />
                <p>Escanea para donar vía {activeQR}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
