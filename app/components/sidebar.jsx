import { transform } from "next/dist/build/swc";
import '../globals.css'
import React from "react";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>
        Untitled UI
      </h3>
        <li>
  <ul>
    Home
  </ul>
  <ul>
    All Files
  </ul>
  <ul>
    Private Files
  </ul>
  <ul>
    Shared with me 
  </ul>
  <ul>
    Deleted files 
  </ul>
  <ul>
    Design
    </ul> 
  <ul/>
  <ul>
    Notifications
  </ul>
  <ul>
    Settings
  </ul>
</li>
<p>File Browser</p>
<strong>Folders</strong>
<br />
<strong className='strg'>Storage</strong>
    </div>
  );
}
export default Sidebar;