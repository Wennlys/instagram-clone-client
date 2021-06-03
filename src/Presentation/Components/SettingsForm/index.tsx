import React from 'react';
import './styles.scss';

export default function SettingsForm(): JSX.Element {
  return (
    <>
      <form className="user-settings-form">
        <div className="user-settings-form-field-container">
          <aside className="user-settings-field">
            <label htmlFor="pepName">Name</label>
          </aside>
          <div className="field-container">
            <div className="field" style={{ width: '100%', maxWidth: '355px' }}>
              <input
                aria-required="false"
                id="pepName"
                placeholder="Name"
                type="text"
                className="field-text-input"
                defaultValue="default"
                style={{
                  backgroundImage: 'url("data:image/png")',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'scroll',
                  backgroundSize: '16px 18px',
                  backgroundPosition: '98% 50%',
                  cursor: 'auto',
                }}
              />
              <div className="field-description" style={{ width: '100%', maxWidth: '355px' }}>
                Help people discover your account by using the name you're known by: either your full name, nickname, or
                business name. You can only change your name twice within 14 days.
              </div>
            </div>
          </div>
        </div>
        <div className="user-settings-form-field-container">
          <aside className="user-settings-field">
            <label htmlFor="pepUsername">Username</label>
          </aside>
          <div className="field-container">
            <div className="field" style={{ width: '100%', maxWidth: '355px' }}>
              <input
                aria-required="true"
                id="pepUsername"
                placeholder="Username"
                type="text"
                className="field-text-input"
                defaultValue="wennlys"
              />
              <div className="field-description" style={{ width: '100%', maxWidth: '355px' }}>
                In most cases, you&rsquo;ll be able to change your username back to wennlys for another 14 days.
                <a
                  className="link"
                  href="https://help.instagram.com/876876079327341"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  style={{ marginLeft: 0 }}
                >
                  Learn More
                </a>
                <div className="field-description" style={{ width: '100%', maxWidth: '355px' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="user-settings-form-field-container">
          <aside className="user-settings-field">
            <label htmlFor="pepWebsite">Website</label>
          </aside>
          <div className="field-container">
            <div className="field" style={{ width: '100%', maxWidth: '355px' }}>
              <input
                aria-required="false"
                id="pepWebsite"
                placeholder="Website"
                type="text"
                className="field-text-input"
                defaultValue="default"
              />
            </div>
          </div>
        </div>
        <div className="user-settings-form-field-container">
          <aside className="user-settings-field">
            <label htmlFor="pepBio">Bio</label>
          </aside>
          <div className="field-container">
            <div className="field" style={{ width: '100%', maxWidth: '355px' }}>
              <textarea className="textarea-input" id="pepBio" />
            </div>
          </div>
        </div>
        <div className="user-settings-form-field-container">
          <aside className="user-settings-field tvweK">
            <label />
          </aside>
          <div className="field-container">
            <div className="field" style={{ width: '100%', maxWidth: '355px' }}>
              <div className="field-description" style={{ width: '100%', maxWidth: '355px' }}>
                <h2 className="bold-description">Personal Information</h2>
              </div>
              <div className="field-description" style={{ width: '100%', maxWidth: '355px' }}>
                Provide your personal information, even if the account is used for a business, a pet or something else.
                This won't be a part of your public profile.
              </div>
            </div>
          </div>
        </div>
        <div className="user-settings-form-field-container">
          <aside className="user-settings-field">
            <label htmlFor="pepEmail">Email</label>
          </aside>
          <div className="field-container">
            <div className="field" style={{ width: '100%', maxWidth: '355px' }}>
              <input
                aria-required="false"
                id="pepEmail"
                placeholder="Email"
                type="text"
                className="field-text-input"
                defaultValue="wennlys@gmail.com"
              />
            </div>
          </div>
        </div>
        <div className="user-settings-form-field-container">
          <aside className="user-settings-field">
            <label htmlFor="pepPhone Number">Phone Number</label>
          </aside>
          <div className="field-container">
            <div className="field" style={{ width: '100%', maxWidth: '355px' }}>
              <input
                aria-required="false"
                id="pepPhone Number"
                placeholder="Phone Number"
                type="text"
                className="field-text-input"
                defaultValue="+55 22 99758-9562"
              />
            </div>
          </div>
        </div>
        <div className="user-settings-form-field-container">
          <aside className="user-settings-field">
            <label htmlFor="pepGender">Gender</label>
          </aside>
          <div className="field-container">
            <div className="field" style={{ width: '100%', maxWidth: '355px' }}>
              <button className="change-profile-icon-button clickable gender-field-button" type="button">
                <input readOnly type="text" className="gender-input" defaultValue="Male" />
              </button>
            </div>
          </div>
        </div>
        <div className="user-settings-form-field-container">
          <aside className="user-settings-field">
            <label>Similar Account Suggestions</label>
          </aside>
          <div className="field-container">
            <label className="dark-field-description" htmlFor="f14b1be22f65b28">
              <input
                className="default-checkbox"
                id="f14b1be22f65b28"
                type="checkbox"
                defaultValue="default"
                defaultChecked
              />
              <div className="checked-character" />
              <div className="field" style={{ width: '40%' }}>
                Include your account when recommending similar accounts people might want to follow.
                <a
                  className="link"
                  href="https://help.instagram.com/530450580417848"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  [?]
                </a>
              </div>
            </label>
          </div>
        </div>
        <div className="user-settings-form-field-container">
          <aside className="user-settings-field">
            <label />
          </aside>
          <div className="submit-container">
            <button className="button submit" disabled type="button">
              Submit
            </button>
            <div className="text-container">
              <button className="button texted-button" type="button">
                Temporarily disable my account
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
