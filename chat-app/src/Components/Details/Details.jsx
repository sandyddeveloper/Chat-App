import './details.css'
import { avatar, arrowUp, arrowDown, download } from '../../utils/asset';

const Details = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src={avatar} alt="" />
        <h2>Santhosh</h2>
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
                <span>Shared Photos</span>
                <img src={arrowUp} alt="" />
              </div>
            </div>
          </div>
        </div>
    
    

  )
}

export default Details