import React from 'react'
import HeaderCartButton from './HeaderCartButton';
import  './header.css'

 const Header = () => {
  return (
    <header className='header'>
        <h1>T-shirt Store</h1>
        
            <HeaderCartButton/>
        
    </header>
    
  )
}
export default Header;