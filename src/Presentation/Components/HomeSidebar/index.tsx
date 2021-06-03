import Footer from '@/Presentation/Components/Footer';
import MediumProfilePhoto from '@/Presentation/Components/ProfilePhotos/MediumProfilePhoto';
import SmallProfilePhoto from '@/Presentation/Components/ProfilePhotos/SmallProfilePhoto';
import React from 'react';
import './styles.scss';

export default function HomeSidebar(): JSX.Element {
  return (
    <>
      <div className="COOzN MnWb5 YT6rB" style={{ left: '65%' }}>
        <div className="m0NAq xrWdL">
          <div className="Igw0E IwRSH eGOV_ _4EzTm ItkAi" style={{ width: '100%' }}>
            <div aria-labelledby="f32e301dbba66 f1177fa1eeb345c" className="Igw0E rBNOH eGOV_ ybXk5 _4EzTm">
              <MediumProfilePhoto />
              <div className="Igw0E IwRSH YBx95 vwCYk">
                <div className="Igw0E IwRSH eGOV_ _4EzTm" id="f32e301dbba66">
                  <div className="_7UhW9 xLCgt MMzan KV-D4 fDxYl">
                    <div className="Igw0E IwRSH eGOV_ ybXk5 vwCYk n4cjz">
                      <a className="gmFkV" href="/wennlys/" tabIndex={0}>
                        wennlys
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Igw0E rBNOH YBx95 ybXk5 _4EzTm soMvl">
                <button className="change-profile-icon-button clickable clickable-exceptions" type="button">
                  <div className="_7UhW9 PIoXz qyrsm uL8Hv">Switch</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="_8UZ6e">
          <div className="Igw0E rBNOH eGOV_ ybXk5 _4EzTm _49XvD XfCBB XTCZH">
            <div className="Igw0E IwRSH eGOV_ vwCYk">
              <div className="_7UhW9 xLCgt qyrsm _0PwGv uL8Hv">Suggestions For You</div>
            </div>
            <a className="change-profile-icon-button clickable _8A5w5 ZIAjV" href="/explore/people/" tabIndex={0}>
              <div className="_7UhW9 PIoXz qyrsm KV-D4 uL8Hv">See All</div>
            </a>
          </div>
          <div className="Igw0E IwRSH eGOV_ _4EzTm pjcA_ WKY0a">
            <div className="tHaIX Igw0E IwRSH eGOV_ _4EzTm HVWg4">
              <div style={{ height: 'auto', overflow: 'hidden auto' }}>
                <div style={{ flexDirection: 'column', paddingBottom: '0px', paddingTop: '0px' }}>
                  <div
                    aria-labelledby="f3f482eb9b98964 f3c9c152547ad24"
                    className="Igw0E rBNOH eGOV_ ybXk5 _4EzTm XfCBB HVWg4"
                  >
                    <SmallProfilePhoto />
                    <div className="Igw0E IwRSH YBx95 vwCYk">
                      <div className="Igw0E IwRSH eGOV_ _4EzTm" id="f3f482eb9b98964">
                        <div className="_7UhW9 xLCgt MMzan KV-D4 uL8Hv">
                          <span className="Jv7Aj mArmR MqpiF">
                            <a
                              className="FPmhX notranslate MBL3Z"
                              title="manu.biscacio"
                              href="/manu.biscacio/"
                              tabIndex={0}
                            >
                              manu.biscacio
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="Igw0E IwRSH eGOV_ _4EzTm DhRcB">
                        <div className="_7UhW9 PIoXz MMzan _0PwGv uL8Hv">Followed by gaspaymenatalia + 35 more</div>
                      </div>
                    </div>
                    <div className="Igw0E rBNOH YBx95 ybXk5 _4EzTm soMvl">
                      <button className="change-profile-icon-button clickable clickable-exceptions" type="button">
                        <div className="_7UhW9 PIoXz qyrsm uL8Hv">Follow</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
