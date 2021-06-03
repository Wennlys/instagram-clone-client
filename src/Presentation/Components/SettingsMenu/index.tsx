import React from 'react';
import './styles.scss';

export default function SettingsMenu(): JSX.Element {
  return (
    <>
      <ul className="list-container">
        <li>
          <a className="list-node selected" href="/accounts/edit/" tabIndex={0}>
            Edit Profile
          </a>
        </li>
        <li>
          <a className="list-node unselected" href="/accounts/password/change/" tabIndex={0}>
            Change Password
          </a>
        </li>
        <li>
          <a className="list-node unselected" href="/accounts/manage_access/" tabIndex={0}>
            Apps and Websites
          </a>
        </li>
        <li>
          <a className="list-node unselected" href="/emails/settings/" tabIndex={0}>
            Email and SMS
          </a>
        </li>
        <li>
          <a className="list-node unselected" href="/push/web/settings/" tabIndex={0}>
            Push Notifications
          </a>
        </li>
        <li>
          <a className="list-node unselected" href="/accounts/contact_history/" tabIndex={0}>
            Manage Contacts
          </a>
        </li>
        <li>
          <a className="list-node unselected" href="/accounts/privacy_and_security/" tabIndex={0}>
            Privacy and Security
          </a>
        </li>
        <li>
          <a className="list-node unselected" href="/session/login_activity/" tabIndex={0}>
            Login Activity
          </a>
        </li>
        <li>
          <a className="list-node unselected" href="/emails/emails_sent/" tabIndex={0}>
            Emails from Instagram
          </a>
        </li>
      </ul>
    </>
  );
}
