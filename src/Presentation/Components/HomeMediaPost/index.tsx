import CommentaryInput from '@/Presentation/Components/CommentaryInput';
import CommentarySection from '@/Presentation/Components/CommentarySection';
import DottedButton from '@/Presentation/Components/DottedButton';
import EngagementButtons from '@/Presentation/Components/Engagement/EngagementButtons';
import EngagementStatus from '@/Presentation/Components/Engagement/EngagementStatus';
import PostDescription from '@/Presentation/Components/PostDescription';
import PostedTimeCounter from '@/Presentation/Components/PostedTimeCounter';
import SmallProfilePhoto from '@/Presentation/Components/ProfilePhotos/SmallProfilePhoto';
import React from 'react';
import './styles.scss';

export default function HomeMediaPost(): JSX.Element {
  return (
    <>
      <article className="post-container" role="presentation" tabIndex={-1}>
        <header className="post-header-container">
          <SmallProfilePhoto />
          <div className="post-profile-name-container o-MQd z8cbW">
            <a className="post-profile-name" href="/fiuk/" tabIndex={0}>
              fiuk
            </a>
          </div>
        </header>
        <div className="post-options-button-container">
          <DottedButton />
        </div>
        <div className="kPFhm B1JlO OAXCp">
          <div style={{ height: '100%', position: 'absolute', width: '100%' }}>
            <div className="GRtmf wymO0">
              <div className="_5wCQW">
                <video
                  className="tWeCl"
                  playsInline
                  poster=""
                  preload="none"
                  src="blob:"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </div>
          <div className="PyenC">
            <span aria-label="Play" className="qBUYS _7CSz9 FGFB7 videoSpritePlayButton" role="button" />
          </div>
          <div aria-label="Control" className="fXIG0" role="button" tabIndex={0} />
        </div>
        <div className="eo2As">
          <EngagementButtons />
          <EngagementStatus />
          <div className="EtaWk">
            <PostDescription />
            <CommentarySection />
          </div>
          <PostedTimeCounter />
          <CommentaryInput />
        </div>
      </article>
    </>
  );
}
