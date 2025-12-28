import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './donar.module.css';

const MÉTODOS = {
    global: [
        { id: 'paypal', title: 'PayPal', color: '#0070ba', icon: '💳', desc: 'Internacional / Tarjeta' },
        { id: 'patreon', title: 'Patreon', color: '#ff424d', icon: '🧡', desc: 'Mecenazgo Mensual' },
        { id: 'coffee', title: 'Buy me a Coffee', color: '#FFDD00', icon: '☕', desc: 'Donación puntual' },
    ],
    colombia: [
        { id: 'nequi', title: 'Nequi', color: '#E10075', icon: '📱', qr: '/img/donar/nequi-qr.png' },
        { id: 'daviplata', title: 'Daviplata', color: '#ED1C24', icon: '🔴', qr: '/img/donar/daviplata-qr.png' },
        { id: 'bancolombia', title: 'Bancolombia', color: '#fdc82d', icon: '🟡', qr: '/img/donar/bancolombia-qr.png' },
    ]
};

export default function Donar() {
    const [activeQR, setActiveQR] = useState<string | null>(null);

    return (
        <Layout title="Apoya mi contenido">
            <main className={styles.donarPage}>

                {/* HERO SECTION MINIMALISTA */}
                <section className={styles.hero}>
                    <div className="container">
                        <span className={styles.badge}>Gracias por tu apoyo</span>
                        <Heading as="h1">Construyamos juntos </Heading>
                        <p className={styles.lead}>
                            Si mi contenido te ha aportado valor, considera apoyarme para mantener
                            esta academia libre de publicidad y con contenido de alta calidad.
                        </p>
                    </div>
                </section>

                <div className="container">
                    <div className="row">
                        {/* COLUMNA IZQUIERDA: MÉTODOS GLOBALES */}
                        <div className="col col--6">
                            <Heading as="h2" className={styles.sectionTitle}>Global</Heading>
                            <div className={styles.grid}>
                                {MÉTODOS.global.map(m => (
                                    <a key={m.id} href="#" className={styles.glassCard}>
                                        <div className={styles.cardIcon} style={{ borderLeft: `3px solid ${m.color}` }}>{m.icon}</div>
                                        <div className={styles.cardInfo}>
                                            <span className={styles.cardTitle}>{m.title}</span>
                                            <span className={styles.cardDesc}>{m.desc}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* COLUMNA DERECHA: MÉTODOS COLOMBIA */}
                        <div className="col col--6">
                            <Heading as="h2" className={styles.sectionTitle}>Colombia</Heading>
                            <div className={styles.grid}>
                                {MÉTODOS.colombia.map(m => (
                                    <div
                                        key={m.id}
                                        className={clsx(styles.glassCard, activeQR === m.id && styles.activeCard)}
                                        onClick={() => setActiveQR(activeQR === m.id ? null : m.id)}
                                    >
                                        <div className={styles.cardIcon} style={{ borderLeft: `3px solid ${m.color}` }}>{m.icon}</div>
                                        <div className={styles.cardInfo}>
                                            <span className={styles.cardTitle}>{m.title}</span>
                                            <span className={styles.cardDesc}>Click para ver QR</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* VISOR DE QR DINÁMICO */}
                    {activeQR && (
                        <div className={styles.qrOverlay}>
                            <div className={styles.qrModal}>
                                <button className={styles.closeBtn} onClick={() => setActiveQR(null)}>×</button>
                                <img src={MÉTODOS.colombia.find(m => m.id === activeQR)?.qr} alt="QR Code" />
                                <p>Escanea el código para donar vía {activeQR}</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    );
}