import * as React from 'react';
// import styles from './NcNatGuard.module.scss';
import { INcNatGuardProps } from './INcNatGuardProps';
import { escape } from '@microsoft/sp-lodash-subset';
import ReactPlayer from "react-player";

/*
import news1 from '../../../Assets/images/News1.jpg'
import news2 from '../../../Assets/images/News2.jpg'
import news3 from '../../../Assets/images/News3.jpg'
import news4 from '../../../Assets/images/News4.jpg'
import news5 from '../../../Assets/images/News5.jpg'
import crawlingPicture from '../../../Assets/images/crawling-woman.jpg'
*/

export default class NcNatGuard extends React.Component<INcNatGuardProps, {}> {
  public render(): React.ReactElement<INcNatGuardProps> {
    return (
      <div className = { styles.container }>
        <div className = { styles.urgentInfo }>
          <h2>
            Emergency Updates
          </h2>

          <div className = { styles.dropdown }>
            <button className = { styles.dropbtn }>
              COVID-19 Information
            </button>
            <div className = { styles.dropdownContent }>
              <a href="https://nc.ng.mil/services/familyprograms/Pages/default.aspx">Family Programs COVID-19 Message</a>
              <a href="https://nc.ng.mil/services/Pages/Legal-Services.aspx">Tax Season COVID-19 Impacts</a>
              <a href="https://nc.ng.mil/services/eec/Pages/Employment-Center.aspx"> Employment Center COVID-19 Message </a>
              <a href="https://nc.ng.mil/services/crisisintervention/Pages/Behavioral-Health-(IBHS).aspx"> IBHS COVID-19 Message </a>
            </div>
          </div>

        <div className = { styles.pageTop }>
          <h1>
          JOIN THE GUARD
          </h1>
          <em><h5>
            Join the National Guard to make an impact in your community
          </h5></em>
        </div>

        <div className = { styles.news }>
          <h2 className = { styles.blueHeading }>Today's News</h2>
          <div className = { styles.row }>
            <div className = { styles.column }>
            <div className = { styles.card }>
              <a href="https://nc.ng.mil/NewsArticles/Lists/Posts/Post.aspx?List=99e3683e-d1fc-4334-ac7d-8483ac3ebdab&Id=49&Web=1ab6446d-56dc-4f07-b333-db271613a6d6&SiteId=378bdb14-04b1-4a65-bb0d-225ca96874c9&Source=https%3A%2F%2Fnc%2Eng%2Emil%2Fpages%2Fdefault%2Easpx">
                <h3>Air National Guard Forecasts Weather for 30th Armored Brigade Combat Team</h3></a>
              <p>U.S. Airmen from the North Carolina Air National Guard’s 156th Weather Flight, 145th Air Wing, forecasted a severe sandstorm event for the 30th Armored Brigade Combat Team, five days before it occurred in late February while deployed in the Central Command (CENTCOM) area of responsibility.</p>
            </div>
            </div>
          </div>
          <div className = {styles.row}>
          <div className = { styles.column }>
            <div className = { styles.card }>
            <a href = "https://nc.ng.mil/NewsArticles/Lists/Posts/Post.aspx?List=99e3683e-d1fc-4334-ac7d-8483ac3ebdab&Id=48&Web=1ab6446d-56dc-4f07-b333-db271613a6d6&SiteId=378bdb14-04b1-4a65-bb0d-225ca96874c9&Source=https%3A%2F%2Fnc%2Eng%2Emil%2Fpages%2Fdefault%2Easpx">
              <h3>NC Guard Cyber Team on Election Duty</h3></a>
            <p>The militia at the founding of the Republic was ready in a minute to defend their homeland but for this modern, hand-picked team of North Carolina National Guard (NCNG) cyber experts that reaction time is way too slow.</p>
            </div>
          </div>
          </div>
        </div>

        <div className = { styles.pageBottom }>
        <h2>The HORNET Magazine</h2>
        <h4> Check out our latest magazine here. </h4>
        <a href = "https://issuu.com/thehornetmag/docs/april_2020_issuu"><img src="${require<string>('../images/hornet.jpg')}" alt="Hornet.jpg" /></a>

        <h2> Featured News </h2>
        <a href = "https://www.fox46.com/news/thousands-gather-at-vigil-to-honor-uncc-shooting-victims/"><h4>​UNCC student, National Guard Medic acts fast to help shooting victim</h4></a>

        <h2> Featured Videos </h2>
        <h4>UNC-TV: 2018 a Historic Year for the NCNG, and what's ahead in 2019</h4>
        <div>
          <ReactPlayer class = "video"
              url="https://www.youtube.com/watch?v=OStmMliZiz8&spfreload=10"
            />
            </div>
        </div>
    </div>
    </div>

      /*<div className={ styles.ncNatGuard }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>*/
    );
  }
}
