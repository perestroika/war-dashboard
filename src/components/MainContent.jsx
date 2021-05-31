import React from 'react'
import Charts from "./dashboard-charts/Charts";
import Charts2 from "./dashboard-charts/Charts2";

function MainContent() {
    return (
        <div className="flex-1">
            <div className="flex-1 font-medium px-9 py-12 sticky top-0 z-50 bg-white shadow-sm">
                <h2 className="text-5xl leading-tight mb-2 font-semibold tracking-tighter">Violence Against Civilians Dashboard</h2>
                <p className="text-brand-light-gray">Data's about intentional attacks on civilians by governments and formally organized armed groups.</p>
            </div>
            <br/>
            <Charts/>
            <Charts2/>
            <br/>
        </div>
    )
}

export default MainContent
