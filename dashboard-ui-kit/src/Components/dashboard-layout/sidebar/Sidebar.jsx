import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
export function Sidebar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logoBox}>
                <img src="/img/SidebarIcons/logoCard.svg" alt="logo" />
                <h1 className={styles.logoText}>BankDash.</h1>
            </div>
            <div className={styles.menu}>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/dashboard.svg" alt="" />
                    <Link to="/" className={styles.btn}>Dashboard</Link>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/transactions.svg" alt="" />
                    <Link to="/transactions" className={styles.btn}>Transactions</Link>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/accounts.svg" alt="" />
                    <Link to="/accounts" className={styles.btn}>Accounts</Link>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/investments.svg" alt="" />
                    <Link to="/investments" className={styles.btn}>Investments</Link>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/creditCards.svg" alt="" />
                    <Link to="/credit-cards" className={styles.btn}>Credit Cards</Link>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/loans.svg" alt="" />
                    <Link to="/loans" className={styles.btn}>Loans</Link>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/Services.svg" alt="" />
                    <Link to="/services" className={styles.btn}>Services</Link>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/MyPrivilege.svg" alt="" />
                    <Link to="/my-privileges" className={styles.btn}>My Privileges</Link>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/settings.svg" alt="" />
                    <Link to="/settings" className={styles.btn}>Settings</Link>
                </div>
            </div>
            </div>
    );
}
