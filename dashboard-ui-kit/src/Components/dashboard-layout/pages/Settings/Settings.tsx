import React, { useState } from 'react'
import { Sidebar } from '../../sidebar/Sidebar.tsx'
import { Header } from '../../header/Header.tsx';
import styles from './Settings.module.css'
import InputField from '../../../UI/InputField/InputField.tsx';
import { Button } from '../../../UI/Button/Button.tsx';
import { Switch } from '../../../UI/Switch/Switch';
export default function Setting() {

  const [activeTab, setActiveTab] = useState('editProfile');

  const handleTabClick = (module: string) => {
    setActiveTab(module);
  };

  return (
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <div>
        <Header title="Setting"></Header>
        <div className={styles.main}>
          <div className={styles.settingContainer}>
            <div className={styles.settingTabs}>
              <button
                className={styles.settingTab}
                onClick={() => handleTabClick('editProfile')}
                style={{ borderBottomColor: activeTab === 'editProfile' ? '#1814F3' : 'transparent' }}
              >
                Edit profile
              </button>
              <button
                className={styles.settingTab}
                onClick={() => handleTabClick('preferences')}
                style={{ borderBottomColor: activeTab === 'preferences' ? '#1814F3' : 'transparent' }}
              >
                Preferences
              </button>
              <button
                className={styles.settingTab}
                onClick={() => handleTabClick('security')}
                style={{ borderBottomColor: activeTab === 'security' ? '#1814F3' : 'transparent' }}
              >
                Security
              </button>
            </div>
            {activeTab === 'editProfile' && (
              <div className={styles.editProfile}>
                <div className={styles.editProfileContainer}>

                  <div className={styles.imageBox}>
                    <img src="/img/HeaderIcons/profile.jpg" alt="" />
                    <button className={styles.imageLabel}>
                      <img src="/img/Setting/label.svg" alt="" />
                    </button>
                  </div>

                  <div className={styles.editProfileInputBox}>
                    <InputField title="Your Name" type="text" placeholder="Charlene Reed" />
                    <InputField title="Email" type="text" placeholder="tim.klimenkoo@gmail.com" />
                    <InputField title="Date of Birth" type="text" placeholder="25 January 1990" />
                    <InputField title="Permanent Address" type="text" placeholder="San Jose, California, USA" />
                    <InputField title="Postal Code" type="text" placeholder="45962" />
                  </div>

                  <div className={styles.editProfileInputBox}>
                    <InputField title="User Name" type="text" placeholder="Charlene Reed" />
                    <InputField title="Password" type="text" placeholder="**********" />
                    <InputField title="Present Address" type="text" placeholder="San Jose, California, USAEddy Cusuma" />
                    <InputField title="City" type="text" placeholder="San Jose" />
                    <InputField title="Country" type="text" placeholder="USA" />
                    <div className={styles.saveBtn}>
                      <Button 
                        backgroundColor="#1814F3"
                        padding="0.7rem 5rem"
                        color="#ffff"
                        textAlign="center"
                        borderRadius="1rem"
                        text="Save" 
                        hoverBackgroundColor="#0F0F73"
                        hoverTextColor="#fff"
                      />
                    </div>
                  </div>

                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className={styles.preferences}>
                <div className={styles.preferencesContainer}>

                  <div className={styles.preferencesInputBox}>
                    <InputField title="Currency" type="text" placeholder="USD" />
                    <InputField title="Time Zone" type="text" placeholder="(GMT-12:00) International Date Line West" />
                  </div>

                  <div className={styles.notificationContainer}>
                    <div className={styles.notificationTitle}>
                      <p>Notification</p>
                    </div>
                    <div className={styles.switchBox}>
                      <Switch />
                      <p>I send or receive digita currency</p>
                    </div>
                    <div className={styles.switchBox}>
                      <Switch />
                      <p>I receive merchant order</p>
                    </div>
                    <div className={styles.switchBox}>
                      <Switch />
                      <p>There are recommendation for my account</p>
                    </div>
                  </div>

                  <div className={styles.saveBtn}>
                    <Button 
                      backgroundColor="#1814F3"
                      padding="0.7rem 4.5rem"
                      color="#ffff"
                      textAlign="center"
                      borderRadius="1rem"
                      text="Save" 
                      hoverBackgroundColor="#0F0F73"
                      hoverTextColor="#fff"
                    />
                  </div>

                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className={styles.security}>
                <div className={styles.authContainer}>

                  <div className={styles.authTitle}>
                    <p>Two-factor Authentication</p>
                  </div>

                  <div className={styles.authSwitchBox}>
                    <Switch />
                    <p>Enable or disable two factor authentication</p>
                  </div>

                </div>

                <div className={styles.passwordContainer}>

                  <div className={styles.passwordTitle}>
                    <p>Change Password</p>
                  </div>

                  <div className={styles.passwordInputBox}>
                    <InputField title="Current Password" type="text" placeholder="**********" />
                    <InputField title="New Password" type="text" placeholder="**********" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}