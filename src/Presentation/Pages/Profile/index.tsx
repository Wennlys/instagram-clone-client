import React from 'react';
import './styles.scss';

export default function Profile(): JSX.Element {
  const renderFromPostType = (type: string): React.ReactNode => {
    switch (type) {
      case 'gallery':
        return (
          <>
            <span className="visually-hidden">Gallery</span>
            <i className="fas fa-clone" aria-hidden="true"></i>
          </>
        );
      case 'video':
        return (
          <>
            <span className="visually-hidden">Video</span>
            <i className="fas fa-video" aria-hidden="true"></i>
          </>
        );
      case 'singleImage':
        break;
    }
  };

  const userName = 'wennlys';
  const fullName = 'Wennlys Oliveira';
  const postsCount = '24';
  const followersCount = '1990';
  const followingCount = '534';

  const posts = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop',
      likesCount: 56,
      commentsCount: 2,
      type: 'singleImage',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop',
      likesCount: 56,
      commentsCount: 2,
      type: 'gallery',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop',
      likesCount: 56,
      commentsCount: 2,
      type: 'video',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop',
      likesCount: 56,
      commentsCount: 2,
      type: 'video',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop',
      likesCount: 56,
      commentsCount: 2,
      type: 'gallery',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop',
      likesCount: 56,
      commentsCount: 2,
      type: 'gallery',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop',
      likesCount: 56,
      commentsCount: 2,
      type: 'galley',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop',
      likesCount: 56,
      commentsCount: 2,
      type: 'video',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop',
      likesCount: 56,
      commentsCount: 2,
      type: 'video',
    },
  ];

  return (
    <>
      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img
                src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                alt=""
              />
            </div>
            <div className="profile-user-settings">
              <h1 className="profile-user-name">{userName}</h1>
              <button className="btn profile-edit-btn">Edit Profile</button>
              <button className="btn profile-settings-btn" aria-label="profile settings">
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>
            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">{postsCount}</span> posts
                </li>
                <li>
                  <span className="profile-stat-count">{followersCount}</span> followers
                </li>
                <li>
                  <span className="profile-stat-count">{followingCount}</span> following
                </li>
              </ul>
            </div>
            <div className="profile-bio">
              <p>
                <span className="profile-real-name">{fullName}</span> <br /> Lorem ipsum dolor sit, amet consectetur
                adipisicing elit 📷✈️🏕️
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="gallery">
            {posts.map(({ imageUrl, likesCount, commentsCount, type }, idx) => {
              return (
                <div className="gallery-item" tabIndex={0} key={idx}>
                  <img src={imageUrl} className="gallery-image" alt="" />
                  <div className="gallery-item-type">{renderFromPostType(type)}</div>
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true"></i> {likesCount}
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true"></i> {commentsCount}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="loader"></div>
        </div>
      </main>
    </>
  );
}
