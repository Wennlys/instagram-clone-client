import React from 'react';
import './styles.scss';

export default function SmallProfilePhoto(): JSX.Element {
  return (
    <>
      <div className="post-profile-photo-container">
        <div className="post-profile-photo" aria-disabled="false" role="button" tabIndex={0}>
          <canvas
            height={42}
            width={42}
            style={{
              position: 'absolute',
              top: '-5px',
              left: '-5px',
              width: '42px',
              height: '42px',
              userSelect: 'none',
            }}
          />
          <span className="post-profile-photo-span" role="link" tabIndex={-1} style={{ width: '32px', height: '32px' }}>
            <img
              alt="fiuk's profile picture"
              className="post-profile-photo-img"
              data-testid="user-avatar"
              draggable="false"
              src=""
            />
          </span>
        </div>
      </div>
    </>
  );
}
