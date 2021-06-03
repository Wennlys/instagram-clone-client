import SettingsForm from '@/Presentation/Components/SettingsForm';
import SettingsMenu from '@/Presentation/Components/SettingsMenu';
import React from 'react';
import './styles.scss';

export default function Settings(): JSX.Element {
  return (
    <>
      <div className="container-border container container-margin">
        <SettingsMenu />
        <article className="page-container">
          <div className="profile-header">
            <div className="profile-icon-container">
              <div className="profile-icon">
                <button className="change-profile-icon" title="Change Profile Photo">
                  <img
                    alt="Change Profile Photo"
                    className="change-profile-icon-img"
                    src="https://instagram.fsdu1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/80746386_199369291242401_2301142940602335232_n.jpg?_nc_ht=instagram.fsdu1-1.fna.fbcdn.net&_nc_ohc=O7er-hc_URYAX-s7qrN&tp=1&oh=ee49db630fdc2a8ab099283228f8ccad&oe=60371C50"
                  />
                </button>
                <div>
                  <form role="presentation">
                    <input accept="image/jpeg,image/png" className="image-input" type="file" />
                  </form>
                </div>
              </div>
            </div>
            <div className="profile-name-container">
              <h1 className="user-name" title="wennlys">
                wennlys
              </h1>
              <button className="change-profile-icon-button clickable clickable-exceptions" type="button">
                Change Profile Photo
              </button>
              <div>
                <form role="presentation">
                  <input accept="image/jpeg,image/png" className="image-input" type="file" />
                </form>
              </div>
            </div>
          </div>
          <SettingsForm />
        </article>
      </div>
    </>
  );
}
