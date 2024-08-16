import styles from "./Sidebar.module.css";
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
                    <button className={styles.btn}>Dashboard</button>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/transactions.svg" alt="" />
                    <button className={styles.btn}>Transactions</button>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/accounts.svg" alt="" />
                    <button className={styles.btn}>Accounts</button>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/investments.svg" alt="" />
                    <button className={styles.btn}>Investments</button>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/creditCards.svg" alt="" />
                    <button className={styles.btn}>Credit Cards</button>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/loans.svg" alt="" />
                    <button className={styles.btn}>Loans</button>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/Services.svg" alt="" />
                    <button className={styles.btn}>Services</button>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/MyPrivilege.svg" alt="" />
                    <button className={styles.btn}>My Privileges</button>
                </div>
                <div className={styles.menuBox}>
                    <img src="/img/SidebarIcons/settings.svg" alt="" />
                    <button className={styles.btn}>Settings</button>
                </div>
            </div>
        </div>
    );
}
