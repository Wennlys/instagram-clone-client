import MediumProfilePhoto from '@/Presentation/Components/ProfilePhotos/MediumProfilePhoto';
import StoriesLiveProfilePhoto from '@/Presentation/Components/ProfilePhotos/StoriesLiveProfilePhoto';
import React from 'react';
import './styles.scss';

export default function SettingsForm(): JSX.Element {
  return (
    <>
      <div className="zGtbP IPQK5 VideM">
        <div className="ku8Bn ">
          <div className="EcJQs">
            <div className="ekfSF" role="presentation" style={{ overflow: 'hidden' }}>
              <div className="_9nCnY">
                <ul className="vi798">
                  <li style={{ transform: 'translateX(0px)', width: '10px' }}></li>
                  <li style={{ transform: 'translateX(12080px)', width: '10px' }}></li>
                  <li className="Ckrof" tabIndex={-1} style={{ transform: 'translateX(10px)' }}>
                    <div className="Fd_fQ">
                      <button className="OE3OK " role="menuitem" tabIndex={0}>
                        <div className="RR-M- QN629" aria-disabled="true" role="button" tabIndex={-1}>
                          <StoriesLiveProfilePhoto />
                          <div className="RDhSu">
                            <span
                              className="_1iHbP "
                              data-testid="live-badge"
                              style={{
                                borderRadius: '4px',
                                padding: '0px 4px',
                                fontSize: '11px',
                                border: '2px solid rgb(255, 255, 255)',
                              }}
                            >
                              LIVE
                            </span>
                          </div>
                        </div>
                        <div className="eebAO h_uhZ">albertodellisola</div>
                      </button>
                    </div>
                  </li>
                  <li className="Ckrof" tabIndex={-1} style={{ transform: 'translateX(90px)' }}>
                    <div className="Fd_fQ">
                      <button className="OE3OK " role="menuitem" tabIndex={0}>
                        <MediumProfilePhoto />
                        <div className="eebAO  h_uhZ">l3llys</div>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <button className=" _6CZji oevZr " tabIndex={-1}>
              <div className=" glyphsSpriteChevron_circle_shadow_right"></div>
            </button>
          </div>
        </div>
      </div>
      <></>
    </>
  );
}
