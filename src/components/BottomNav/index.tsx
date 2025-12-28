// src/components/BottomNav/index.tsx
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Puedes usar emojis o importar iconos SVG
const navItems = [
    { label: 'Inicio', to: '/', icon: '🏠' },
    { label: 'Cursos', to: '/docs/introduccion/bienvenida', icon: '📚' },
    { label: 'Tutoriales', to: '/docs/02-modulo-uno/concepto-basico', icon: '🚀' },
    { label: 'Donar', to: '/donar', icon: '☕' },
];

export default function BottomNav() {
    return (
        <nav className={styles.bottomNav}>
            {navItems.map((item, idx) => (
                <Link key={idx} to={item.to} className={styles.navItem} activeClassName={styles.active}>
                    <span className={styles.icon}>{item.icon}</span>
                    <span className={styles.label}>{item.label}</span>
                </Link>
            ))}
        </nav>
    );
}