import React from 'react'
import MenuHeader from './MenuHeader'
import './App.css'

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.name}</h1>
      <MenuHeader links={props.links} />
    </header>
  );
}
export default Header;