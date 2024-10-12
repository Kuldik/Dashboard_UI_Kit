import React from "react";
import styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { path: '/', name: 'Dashboard', icon: '/img/SidebarIcons/dashboard.svg' },
  { path: '/transactions', name: 'Transactions', icon: '/img/SidebarIcons/transactions.svg' },
  { path: '/accounts', name: 'Accounts', icon: '/img/SidebarIcons/accounts.svg' },
  { path: '/investments', name: 'Investments', icon: '/img/SidebarIcons/investments.svg' },
  { path: '/credit-cards', name: 'Credit Cards', icon: '/img/SidebarIcons/creditCards.svg' },
  { path: '/loans', name: 'Loans', icon: '/img/SidebarIcons/loans.svg' },
  { path: '/services', name: 'Services', icon: '/img/SidebarIcons/Services.svg' },
  { path: '/my-privileges', name: 'My Privileges', icon: '/img/SidebarIcons/MyPrivilege.svg' },
  { path: '/settings', name: 'Settings', icon: '/img/SidebarIcons/settings.svg' },
];

export function Sidebar() {
  const location = useLocation();

  const getActiveClass = (path: string) => location.pathname === path ? styles.active : '';

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoBox}>
        <img src="/img/SidebarIcons/logoCard.svg" alt="logo" />
        <h1 className={styles.logoText}>BankDash.</h1>
      </div>
      <div className={styles.menu}>
        {menuItems.map((item, index) => (
          <div key={index} className={`${styles.menuBox} ${getActiveClass(item.path)}`}>
            <img src={item.icon} alt="" />
            <Link to={item.path} className={styles.btn}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}