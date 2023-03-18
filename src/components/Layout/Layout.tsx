import React from "react";
import Particle from "../Particle";
import styles from "./layout.module.css";

interface Props {
    children: React.ReactNode;
}

function Layout({ children }: Props) {
    return (
        <main className={styles.layout}>
            <Particle />
            {children}
        </main>
    );
}

export default Layout;
