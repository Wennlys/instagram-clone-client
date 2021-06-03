import React from 'react';
import './styles.scss';

export default function StoriesLiveProfilePhoto(): JSX.Element {
  return (
    <>
      <canvas
        className="CfWVH"
        height="66"
        width="66"
        style={{ position: 'absolute', top: '-5px', left: '-5px', width: '66px', height: '66px' }}
      />
      <div className=" Igw0E IwRSH eGOV_ _4EzTm " style={{ height: '56px', width: '56px' }}>
        <div className="_3SOD">
          <svg height="66" viewBox="0 0 90 90" width="66">
            <circle cx="50%" cy="50%" fill="#000000" r="38"></circle>
            <circle className="Hvk4l" cx="50%" cy="50%" fill="#737373" r="38"></circle>
          </svg>
        </div>
        <div className="hlryi" style={{ left: '5px', top: '5px' }}>
          <span className="_2dbep " role="link" tabIndex={-1} style={{ width: '46px', height: '46px' }}>
            <img
              alt="albertodellisola's profile picture"
              className="_6q-tv"
              data-testid="user-avatar"
              draggable="false"
              src="https://instagram.fsdu1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/152510903_730356081006067_7081256829125226237_n.jpg?tp=1&amp;_nc_ht=instagram.fsdu1-1.fna.fbcdn.net&amp;_nc_ohc=7hdpzy15zDgAX80s3_-&amp;oh=4ea29be93be5b561ac3b507e13e4b15b&amp;oe=606BD691"
            />
          </span>
        </div>
      </div>
    </>
  );
}
