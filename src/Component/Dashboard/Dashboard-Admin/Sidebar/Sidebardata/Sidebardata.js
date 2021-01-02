import {AiFillHome} from 'react-icons/ai'
import{FaUsers} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {MdAccountBox , MdEvent} from 'react-icons/md'
export const Sidebardata = [
    {
        title : "Home",
        icon : <AiFillHome/>,
        path: "dashboard/home",
        cName: "sidebar-text"
    },
    {
        title : "Associations",
        icon : <FaUsers/>,
        path: "dashboard/associations",
        cName: "sidebar-text"
    },
    {
        title : "Spaces",
        icon : <HiUsers/>,
        path: "dashboard/spaces",
        cName: "sidebar-text"
    },
    {
        title : "Accounts",
        icon : <MdAccountBox/>,
        path: "dashboard/accounts",
        cName: "sidebar-text"
    },
    {
        title : "Events",
        icon : <MdEvent/>,
        path: "dashboard/events",
        cName: "sidebar-text"
    }
];

