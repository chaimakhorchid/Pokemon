

import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    return (
        <div >
        
        <ul className="navbar navbar-dark bg-dark" >
            <li className="nav-item">
                <Link className='navbar-brand' to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className='navbar-brand' to="/login">Login</Link>
            </li>
        </ul> 
        </div>     
)
}
export default Nav