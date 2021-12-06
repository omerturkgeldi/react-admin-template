import React from 'react'

import Routes from '../../Routes'
import Sidebar from '../sidebar/Sidebar'
import {
    Switch,
    Route,
} from "react-router-dom";
import Profile from '../../pages/Profile';

const Layout = () => {
    return (
        <>
            <Routes />
        </>
    )
}

export default Layout
