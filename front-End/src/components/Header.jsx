import React from 'react';
//REDUX 
import {useDispatch, useSelector} from 'react-redux'
import {logOutAction} from '../redux/authDuck'
const Header = () => {
   const dispatch = useDispatch()
   const data= useSelector(store => store.authReducer.user.user)
   console.log(data);
   const handleLogOut = () => {
      dispatch(logOutAction());
    };
   return (
      <>
         <header>
        <div className="Layout__header wrapper">
          <div>{data ? data.name: ''}</div>
          <div>
            <a href="tel:3138726918">
              <i className="fas fa-phone"></i>
            </a>
            <i className="fas fa-sign-out-alt" onClick={handleLogOut}></i>
          </div>
        </div>
      </header>
      <div className="Layout__header__separator"></div>
      </>
   );
}

export default Header;
