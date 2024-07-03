import './details.css'
import { avatar, arrowUp, arrowDown, download } from '../../utils/asset';
import { useUserStore } from '../../lib/AppStore';
import { auth } from '../../lib/Firebase';

const Details = () => {
  const { currentUser } = useUserStore();
  return (
    <div className="detail">
      <div className="user">
        <img src={currentUser.avatars || avatar} alt="" />
        <h2>{currentUser.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src={arrowUp} alt="" />
          </div>
        </div>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Privacy</span>
            <img src={arrowUp} alt="" />
          </div>
        </div>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Photos</span>
            <img src={arrowDown} alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://c4.wallpaperflare.com/wallpaper/14/548/927/the-avengers-avengers-endgame-avengers-endgame-infinity-gauntlet-iron-man-hd-wallpaper-preview.jpg" alt=""  />
              <span>ironman_01.png</span>
              </div>
            <img src={download} alt="" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://c4.wallpaperflare.com/wallpaper/14/548/927/the-avengers-avengers-endgame-avengers-endgame-infinity-gauntlet-iron-man-hd-wallpaper-preview.jpg" alt="" />
              <span>ironman_01.png</span>
              </div>
            <img src={download} alt="" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://c4.wallpaperflare.com/wallpaper/14/548/927/the-avengers-avengers-endgame-avengers-endgame-infinity-gauntlet-iron-man-hd-wallpaper-preview.jpg" alt="" />
              <span>ironman_01.png</span>
              </div>
            <img src={download} alt="" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://c4.wallpaperflare.com/wallpaper/14/548/927/the-avengers-avengers-endgame-avengers-endgame-infinity-gauntlet-iron-man-hd-wallpaper-preview.jpg" alt="" />
              <span>ironman_01.png</span>
              </div>
            <img src={download} alt="" className='icon' />
            </div>
          </div>
          <div className="info">
            <div className="option">
              <div className="title">
                <span>Media</span>
                <img src={arrowUp} alt="" />
              </div>
            </div>
          </div>
        </div>
        <button>Block</button>
        <button className='logout' onClick={() =>auth.signOut()}>Logout</button>
      </div>
      
    </div>



  )
}

export default Details