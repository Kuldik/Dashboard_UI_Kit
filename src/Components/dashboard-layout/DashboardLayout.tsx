import { Header } from "./header/Header.tsx";
import React from "react";
import { Sidebar } from "./sidebar/Sidebar.tsx";
import styles from "./DashboardLayout.module.css";

export function DashboardLayout() {
    return (
        <div className={styles.wrapper}>
            <Sidebar/>
            <div className={styles.main}>
                <Header title="Dashboard"/>
            </div>
        </div>
    );
}