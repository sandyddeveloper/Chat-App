import './userinfo.css';
import {avatar,
  moreIcon,
  videoIcon,
  editIcon} from '../../../utils/asset'

const UserInfo = () => {
  return (
    <div className='userInfo'>
      <div className="userid">
        <img src={avatar} alt="User avatar" />
        <h4>Sandy</h4>
      </div>

      <div className="settings">
        <img src={moreIcon} alt="More options" />
        <img src={videoIcon} alt="Start video call" />
        <img src={editIcon} alt="Edit profile" />
      </div>
    </div>
  );
};

export default UserInfo;
