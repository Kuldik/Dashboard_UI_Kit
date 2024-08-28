import { Header } from "./header/Header.jsx";
import { Sidebar } from "./sidebar/Sidebar";
import styles from "./DashboardLayout.module.css";

export function DashboardLayout() {
    return (
        <div className={styles.wrapper}>
            <Sidebar/>
            <div className={styles.main}>
                <Header/>
            </div>
        </div>
    );
}