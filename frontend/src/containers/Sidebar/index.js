import React from "react";
import { SidebarContent } from "./constants";
import { NavLink, Link } from 'react-router-dom';
import "./sidebar.scss";
export default function Sidebar() {
    const handleClick = () => {
        //set JWT token to local
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("token");
    }
    return (
        SidebarContent.map(content => (
            <div className="sidebar" key={content.id}>
                <div className="sidebar__title">
                    {content.title}
                </div>
                <div className="sidebar__menu">
                    <ul>
                        {content.menus.map(item => (
                            <NavLink
                            key={item.id}
                            activeclassname="sidebar__menu active"
                            className="sidebar__menu normal"
                            to={item.link}
                            >
                            <li key={item.id}>
                                <span id="picture">
                                    {item.picture}
                                </span>
                                {item.name}
                            </li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
                <Link className="sidebar__logout" to="/login"  onClick={handleClick}>
                    <span id="picture">
                        {content.picture}
                    </span>
                    {content.logout}
                </Link>
            </div>
        ))
    );
}