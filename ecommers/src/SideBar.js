import React from 'react';
import './SideBar.css'
import { faShoppingBag, faCreditCard, faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';


const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="list-unstyled">
        <li className="mb-2">
          <a href="/" className="text-decoration-none text-dark">
          <FontAwesomeIcon icon={faShoppingBag} style={{color: '#02D693'}}/>
          
          </a>
        </li>
        <li className="mb-2">
          <a href="/" className="text-decoration-none text-dark">
          <FontAwesomeIcon icon={faStore} />
          
          </a>
        </li>
        <li className="mb-2">
          <a href="/Bag" className="text-decoration-none text-dark">
          <FontAwesomeIcon icon={faShoppingBag} />
          </a>
        </li>
        <li>
          <a href="/checkout" className="text-decoration-none text-dark">
          <FontAwesomeIcon icon={faCreditCard} />
          
          </a>
        </li>
        <li class="logout">
        <a href="/logout" className="text-decoration-none text-dark">
      <FontAwesomeIcon icon={faDoorOpen} style={{color:'red'}}/>
      
    </a>
</li>
      </ul>
    </div>
  );
};

export default SideBar;