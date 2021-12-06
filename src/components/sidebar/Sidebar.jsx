import React from 'react'

import { Link } from 'react-router-dom'

import './sidebar.css'
import './sidebar-resp'


// const SidebarItem = props => {

//     const active = props.active ? 'active' : ''

//     return (
//         // <div className="sidebar__item">
//         //     <div className={`sidebar__item-inner ${active}`}>
//         //         <i className={props.icon}></i>
//         //         <span>
//         //             {/* {props.title} */}
//         //         </span>
//         //     </div>
//         // </div>
//     )
// }

const Sidebar = props => {

    // const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        <>
            <header className="header" id="header">
                <div className="header_toggle"> <i className='bx bx-menu' id="header-toggle"></i> </div>
                <div className="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt="" /> </div>

                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>


            </header>
            <div className="l-navbar" id="nav-bar">
                <nav className="nav">
                    <div>
                        <a href="#" className="nav_logo">
                            <i className='bx bx-layer nav_logo-icon'></i>
                            <span className="nav_logo-name">BBBootstrap</span>
                        </a>
                        <div className="nav_list">
                            <Link to="/" className="nav_link">
                                <i className='bx bx-grid-alt nav_icon'></i>
                                <span className="nav_name">
                                    Ana sayfa
                                </span>
                            </Link>
                            <Link to="/profile" className="nav_link">
                                <i className='bx bx-book-reader nav_icon'></i>
                                <span className="nav_name">
                                    Profil
                                </span>
                            </Link>
                            <Link to="/bookshelf" className="nav_link">
                                <i className='bx bx-book-alt nav_icon'></i>
                                <span className="nav_name">
                                    Kitaplık
                                </span>
                            </Link>
                        </div>
                    </div> <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </a>
                </nav>
            </div>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <h4>Theme settings</h4>
                    <div className="theme-menu__select">
                        <span>Choose mode</span>
                        <ul className="mode-list">
                            <li>
                                <div className="mode-list__color">
                                    <i className='bx bx-check'></i>
                                </div>
                                <span>deneme</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar
