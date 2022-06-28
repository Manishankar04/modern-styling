import {Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Mlogo } from "../../assets/M.svg";
import './navigation.styles.scss';

const Navigation=()=>{
    return( 
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                <Mlogo className="logo" />
                </Link>
            <div className='nav-link-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/auth'>
                    SIGNIN
                </Link>
            </div>
            </div>
            <Outlet />
        </Fragment>
    );
  }

  export default Navigation;