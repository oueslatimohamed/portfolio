import React from 'react';
import './sidebar.css';
import { Sidebardata } from './Sidebardata/Sidebardata';
import {BiLogOut} from 'react-icons/bi'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            {Sidebardata.map( (item,index)=> {
                return(
                    <ul className="sidebar-items">
                    <li key={index} className={item.cName} onClick={()=>{window.location.pathname = item.path}}>
                        <div className="icon">{item.icon}</div>
                        <div className="title">{item.title}</div>
                    </li>
                </ul>
                );
            })}
            <div className="log-out"onClick={()=>{window.location.pathname = "/signin"}}>
                <div className="icon"><BiLogOut /></div>
                <div className="title">Log out</div>
            </div>
        </div>
    )
}
