import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className={"Sidebar"} style={{
            float: 'left',
            borderRight:'1px solid #ccc',
            borderBottom:'1px solid #ccc',
            margin: '0px 40px 0 0',
        }}>
           <ul className={"Sidebar_list"}>
               <li className={"Sidebar_item"}>
                   <a className={"Sidebar_link"} href="#">Fontastic</a>
               </li>
               <li className={"Sidebar_item"}>
                   <a className={"Sidebar_link"} href="#">Melodrama</a>
               </li>
               <li className={"Sidebar_item"}>
                   <a  className={"Sidebar_link"} href="#">Comedy</a>
               </li>
               <li className={"Sidebar_item"}>
                   <a className={"Sidebar_link"} href="#">Romantic</a>
               </li>
               <li className={"Sidebar_item"}>
                   <a className={"Sidebar_link"} href="#">Thriller</a>
               </li>
           </ul>
        </div>
    )
};

export default Sidebar;