import { avatar } from '../../utils/asset'
import './adduser.css'

const AddUser = () => {
  return (
    <div className='addUser'>
        <form >
            <input type="text" name="username" placeholder='Username' />
            <button>Search</button>
        </form>
        <div className="user">
            <div className="details">
            <img src={avatar} alt="" />
            <span>Santhosh</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default AddUser