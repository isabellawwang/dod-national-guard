import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"

import picture from '../../Assets/images/hornet.jpg'
import news1 from '../../Assets/images/News1.jpg'
import news2 from '../../Assets/images/News2.jpg'
import news3 from '../../Assets/images/News3.jpg'
import news4 from '../../Assets/images/News4.jpg'
import news5 from '../../Assets/images/News5.jpg'
import crawlingPicture from '../../Assets/images/crawling-woman.jpg'



class HomePage extends Component{
  render() {
    return (
        <div className="container-fluid">
          <div className="urgent-info">
            <h2>
              Emergency Updates
            </h2>
            <div className="dropdown">
              <button className="dropbtn">
                COVID-19 Information
              </button>
              <div className="dropdown-content">
                <a href="https://nc.ng.mil/services/familyprograms/Pages/default.aspx">Family Programs COVID-19 Message</a>
                <a href="https://nc.ng.mil/services/Pages/Legal-Services.aspx">Tax Season COVID-19 Impacts</a>
                <a href="https://nc.ng.mil/services/eec/Pages/Employment-Center.aspx"> Employment Center COVID-19 Message </a>
                <a href="https://nc.ng.mil/services/crisisintervention/Pages/Behavioral-Health-(IBHS).aspx"> IBHS COVID-19 Message </a>
              </div>
            </div>

          </div>
          <div className = "page-top">
            <h1>
            JOIN THE GUARD
            </h1>
            <em><h5>
              Join the National Guard to make an impact in your community
            </h5></em>
          </div>
          <div className = "front-page-image">
            <img src = {crawlingPicture} alt = "A Soldier training to be resilient in the face of danger" />
          </div>

          <div className="news">
            <h2 className = "blueHeading">Today's News</h2>
            <div class="row">
            <div class="column">
              <div class="card">
                <img src={news1}/>
                <a href="https://nc.ng.mil/NewsArticles/Lists/Posts/Post.aspx?List=99e3683e-d1fc-4334-ac7d-8483ac3ebdab&Id=49&Web=1ab6446d-56dc-4f07-b333-db271613a6d6&SiteId=378bdb14-04b1-4a65-bb0d-225ca96874c9&Source=https%3A%2F%2Fnc%2Eng%2Emil%2Fpages%2Fdefault%2Easpx">
                  <h3>Air National Guard Forecasts Weather for 30th Armored Brigade Combat Team</h3></a>
                <p>U.S. Airmen from the North Carolina Air National Guard’s 156th Weather Flight, 145th Air Wing, forecasted a severe sandstorm event for the 30th Armored Brigade Combat Team, five days before it occurred in late February while deployed in the Central Command (CENTCOM) area of responsibility.</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
              <img src={news2}/>
              <a href = "https://nc.ng.mil/NewsArticles/Lists/Posts/Post.aspx?List=99e3683e-d1fc-4334-ac7d-8483ac3ebdab&Id=48&Web=1ab6446d-56dc-4f07-b333-db271613a6d6&SiteId=378bdb14-04b1-4a65-bb0d-225ca96874c9&Source=https%3A%2F%2Fnc%2Eng%2Emil%2Fpages%2Fdefault%2Easpx">
                <h3>NC Guard Cyber Team on Election Duty</h3></a>
              <p>The militia at the founding of the Republic was ready in a minute to defend their homeland but for this modern, hand-picked team of North Carolina National Guard (NCNG) cyber experts that reaction time is way too slow.</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div class="card">
                <img src={news3}/>
                <a href = "https://nc.ng.mil/NewsArticles/Lists/Posts/Post.aspx?List=99e3683e-d1fc-4334-ac7d-8483ac3ebdab&Id=47&Web=1ab6446d-56dc-4f07-b333-db271613a6d6&SiteId=378bdb14-04b1-4a65-bb0d-225ca96874c9&Source=https%3A%2F%2Fnc%2Eng%2Emil%2Fpages%2Fdefault%2Easpx">
                <h3>Coronavirus Prevention and Best Practices</h3></a>
                <p>The Coronavirus is spreading across the world causing global events to shut down, schools to close, and even airlines to reduce flights. A disease started in Wuhan, China, COVID19, has now infected over 100,000 people in 96 countries.</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
              <img src={news4}/>
              <a href = "https://nc.ng.mil/NewsArticles/Lists/Posts/Post.aspx?List=99e3683e-d1fc-4334-ac7d-8483ac3ebdab&Id=46&Web=1ab6446d-56dc-4f07-b333-db271613a6d6&SiteId=378bdb14-04b1-4a65-bb0d-225ca96874c9&Source=https%3A%2F%2Fnc%2Eng%2Emil%2Fpages%2Fdefault%2Easpx">
              <h3>NCNG Build Relationships With Civilian Employers</h3></a>
              <p>Over 30 employers met at the North Carolina National Guard’s (NCNG) Army Aviation Support Facility in Morrisville, N.C. March 10, 2020, to learn more about what the guardsmen they employ do during their time away from work.</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div class="card">
                <img src={news5}/>
                <a href = "https://nc.ng.mil/NewsArticles/Lists/Posts/Post.aspx?List=99e3683e-d1fc-4334-ac7d-8483ac3ebdab&Id=45&Web=1ab6446d-56dc-4f07-b333-db271613a6d6&SiteId=378bdb14-04b1-4a65-bb0d-225ca96874c9&Source=https%3A%2F%2Fnc%2Eng%2Emil%2Fpages%2Fdefault%2Easpx">
                <h3>North Carolina National Guard's 42nd CST Evaluated by U.S. Army North</h3></a>
                <p>Every 18 months the 42nd CST is validated on core tasks in a realistic setting. This validation proves that the 42nd is ready to respond to a chemical, radiological or biological event.</p>
              </div>
            </div>
          </div>
          </div>

          <div className = "page-bottom">
          <h2>The HORNET Magazine</h2>
          <h4> Check out our latest magazine here. </h4>
          <a href = "https://issuu.com/thehornetmag/docs/april_2020_issuu"><img src={picture} /></a>

          <h2> Featured News </h2>
          <a href = "https://www.fox46.com/news/thousands-gather-at-vigil-to-honor-uncc-shooting-victims/"><h4>​UNCC student, National Guard Medic acts fast to help shooting victim</h4></a>
          
          <h2> Featured Videos </h2>
          <h4>UNC-TV: 2018 a Historic Year for the NCNG, and what's ahead in 2019</h4>
          <div className = "player-wrapper">
          <ReactPlayer class = "video"
              url="https://www.youtube.com/watch?v=OStmMliZiz8&spfreload=10"
            />
            </div>
          </div>
        
      </div>

    );
  }
}

export default HomePage;
