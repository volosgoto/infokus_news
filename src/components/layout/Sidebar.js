import React from 'react'

export default function Sidebar() {
  return (
    <div id="sidebar-wrapper" style={{ border: '1px solid red' }}>
      <ul className="sidebar-nav">
        <li><a href="#">Account</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>

  )
}
