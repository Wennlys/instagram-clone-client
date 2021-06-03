import HomeMediaPost from '@/Presentation/Components/HomeMediaPost';
import HomeSidebar from '@/Presentation/Components/HomeSidebar';
import StoriesBox from '@/Presentation/Components/StoriesBox';
import React from 'react';
import './styles.scss';

export default function Home(): JSX.Element {
  return (
    <>
      <main className="main" role="main">
        <section className="section">
          <div className="content">
            <StoriesBox />
            <HomeMediaPost />
            <HomeMediaPost />
          </div>
          <HomeSidebar />
        </section>
      </main>
    </>
  );
}
