// src/components/BottomNav/index.tsx
import Link from "@docusaurus/Link";
import { Coffee, Home } from "lucide-react";
import React from "react";
import styles from "./styles.module.css";

type NavItem = {
  label: string;
  to: string;
  Icon: React.ComponentType<{ size?: number }>;
};

const navItems: NavItem[] = [
  { label: "Inicio", to: "/", Icon: Home },
  // { label: "Cursos", to: "/docs/introduccion/bienvenida", Icon: BookOpen },
  // {label: "Tutoriales",to: "/docs/02-modulo-uno/concepto-basico",Icon: Rocket,},
  { label: "Donar", to: "/donar", Icon: Coffee },
];

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav} aria-label="Navegación principal">
      {navItems.map(({ label, to, Icon }) => (
        <Link
          key={to}
          to={to}
          className={styles.navItem}
          activeClassName={styles.active}
        >
          <Icon size={20} className={styles.icon} aria-hidden />
          <span className={styles.label}>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
