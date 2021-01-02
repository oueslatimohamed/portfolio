import React from 'react'
import Mainview from '../../../View/mainView/Mainview';

import './dashboard.css';
import { Sidebar } from './Sidebar/Sidebar'

export default function Dashboardadmin() {
    return (
        <div className="dashboard">
            <Sidebar/>
            <Mainview/>
        </div>
    )
}
