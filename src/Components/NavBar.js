import {NavLink} from 'react-router-dom';
import styles from './../styles/navbar.styles.css';

function NavBar() {
    let linkStyle = isActive => isActive? 'active' : 'inactive';

    return (
        <div>
            <NavLink to='/' className={({isActive}) => linkStyle(isActive)} >Home</NavLink>
            <NavLink to='/product' className={({isActive}) => linkStyle(isActive)}>Product</NavLink>
            <NavLink to='/category' className={({isActive}) => linkStyle(isActive)}>Category</NavLink>
        </div>
    )
}

export default NavBar;