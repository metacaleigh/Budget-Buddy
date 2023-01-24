import React from "react";
import CalendarImage from '../images/CalendarImage.png';
import StatsImage from '../images/StatsImage.png';
import MoneyTreeImage from '../images/MoneyTreeImage.png';

function AboutUs() {
    return(
        <div id="about-us-flex">
            <h1 id="about-us-h1">About Us</h1>
            <div className="about-us-flex-1">
                <p className="about-us-left-text-1">
                 We created Budget Buddy to help you manage your monthly finances with ease.
                </p>
                <img id="calendar-image" src={CalendarImage} alt="calendar icon"/>
            </div>
            <div className="about-us-flex-2">
                <img id="stats-image" src={StatsImage} alt="stats icon"/>
                <p className="about-us-right-text">Users can log their transactions to see their customized spending stats.</p>
            </div>
            <div className="about-us-flex-3">
                <p className="about-us-left-text-2">Budget Buddy makes it easier to keep track of your budget and put away money for a rainy day.</p>
                <img id="money-tree-image" src={MoneyTreeImage} alt="money tree icon"/>
            </div>
        </div>
    )
}

export default AboutUs;