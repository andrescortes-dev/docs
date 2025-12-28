import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css'; // Reutilizamos los estilos de la home

export default function GenericPage({ title, description, children }) {
    return (
        <Layout title={title} description={description}>
            <header className={styles.heroBanner}>
                <div className="container">
                    <Heading as="h1" className={styles.heroTitle}>{title}</Heading>
                    <p className={styles.heroSubtitle}>{description}</p>
                </div>
            </header>
            <main className="container margin-top--xl margin-bottom--xl">
                {/* Aquí irá el contenido específico de cada página */}
                <section className="row">
                    <div className="col col--12">
                        {children}
                    </div>
                </section>
            </main>
        </Layout>
    );
}