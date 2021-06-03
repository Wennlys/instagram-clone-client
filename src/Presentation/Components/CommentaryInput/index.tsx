import React from 'react';
import './styles.scss';

export default function CommentaryInput(): JSX.Element {
  return (
    <>
      <section className="sH9wk _JgwE">
        <div className="RxpZH">
          <form className="X7cDz" method="POST">
            <textarea
              aria-label="Add a comment…"
              placeholder="Add a comment…"
              className="Ypffh"
              autoComplete="off"
              autoCorrect="off"
              defaultValue={''}
            />
            <button className="change-profile-icon-button clickable clickable-exceptions" disabled type="submit">
              Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
