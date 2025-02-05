import React from 'react'

const Footer = (props) => {
    // const year = new Date();
  return (
    <footer>
      <p>To Do lists you created is {props.length}
      &nbsp;
      {/* conditions nachinatu petukovochu anta bro  */}
        {props.length===1 ? "item" :"items"} 
      </p>
    </footer>
  )
}

export default Footer;