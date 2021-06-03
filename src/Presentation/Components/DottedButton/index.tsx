import React from 'react';
import './styles.scss';

export default function DottedButton(): JSX.Element {
  return (
    <>
      <button className="post-options-button" type="button">
        <div style={{ height: '24px', width: '24px', justifyContent: 'center' }}>
          <svg aria-label="More options" fill="#262626" height={16} viewBox="0 0 48 48" width={16}>
            <circle clipRule="evenodd" cx={8} cy={24} fillRule="evenodd" r="4.5" />
            <circle clipRule="evenodd" cx={24} cy={24} fillRule="evenodd" r="4.5" />
            <circle clipRule="evenodd" cx={40} cy={24} fillRule="evenodd" r="4.5" />
          </svg>
        </div>
      </button>
    </>
  );
}
