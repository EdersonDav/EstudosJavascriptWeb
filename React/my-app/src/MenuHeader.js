import React from 'react'

const MenuHeader = (props) => {
  const listLinks = props.links.map((link, key) => <li key={key}>{link}</li>)
  return (
    <ul className="menu">
      {listLinks}
    </ul>
  );
}

export default MenuHeader;