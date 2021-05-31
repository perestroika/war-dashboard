import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/data.svg'


function Sidebar(){
    return (
        <div className="w-72 min-h-screen border-r border-opacity-15 px-8 h-screen sticky top-0">
            <div>
                <Link to="/"><img src={logo} alt="dashboard logo" width={65} height={65} className="py-16 mx-auto"/></Link>
            </div>
            <div className="side-menu font-medium leading-5 space-y-1.5">
                {/* active link */}
                <Link to="/"  className="flex hover:bg-brand-primary hover:text-white hover:rounded-2xl hover:shadow-primary p-5">
                    <span className="inline-flex "><i className="fas fa-project-diagram text-lg mr-4"/> Continents</span>
                </Link>
                <Link to="/country" className="flex hover:bg-brand-primary hover:text-white hover:rounded-2xl hover:shadow-primary p-5">
                    <span className="inline-flex"><i className="fas fa-chart-bar text-lg mr-4"/> Country</span>
                </Link>
                <Link to="/race" className="flex hover:bg-brand-primary hover:text-white hover:rounded-2xl hover:shadow-primary p-5">
                    <span className="inline-flex"><i className="fas fa-chart-line text-lg mr-4"/> Evolution</span>
                </Link>
                <a href="https://github.com/perestroika/dashboard-war" target="_blank" className="flex hover:bg-brand-primary hover:text-white hover:rounded-2xl hover:shadow-primary p-5">
                    <span className="inline-flex"><i className="fas fa-code-branch text-lg mr-4"/> Github</span>
                </a>
                <a href="https://ucdp.uu.se/downloads/" target="_blank" className="flex hover:bg-brand-primary hover:text-white hover:rounded-2xl hover:shadow-primary p-5">
                    <span className="inline-flex"><i className="fas fa-heart text-lg mr-4"/> Data source</span>
                </a>
            </div>
        </div>
    )
}

export default Sidebar
