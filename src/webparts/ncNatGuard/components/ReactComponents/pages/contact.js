import React, { Component } from 'react';
import ContactCard from "./contactCard";

import toddHunt from '../../Assets/images/ToddHunt.jpg'
import jamesHerring from '../../Assets/images/JamesHerring.png'
import jamesErnst from '../../Assets/images/JamesErnst.jpg'
import RussellPrince from '../../Assets/images/RussellPrince.jpg'
import StephenMallette from '../../Assets/images/StephenMallette.jpg'
import DavidRodriguez from '../../Assets/images/DavidRodriguez.jpg'
import vacant_img from '../../Assets/images/Vacant_Img.jpg'
import AllenBoyette from '../../Assets/images/AllenBoyette.jpg'

class Contact extends Component{
  render() {
    return (
        <div className="container-fluid">

          <h1>
          Our Leaders
          </h1>

          <div className="leaders">
            <div class="column">
            <div class="card">
            <ContactCard 
                contact={{name: "MG Todd Hunt", imgUrl: toddHunt, title: "The Adjutant General"}}
            />
            </div>
            </div>
            
            <div class="column">
            <div class="card">
            <ContactCard 
                contact={{name: "CW5 James B. Herring", imgUrl: jamesHerring, title: "State Command Chief Warrant Officer"}}
            />
            </div>
            </div>


            <div class="column">
            <div class="card">
            <ContactCard
                contact={{name: "MG James C. Ernst", imgUrl: jamesErnst, title: "Deputy Adjutant General Army"}}
            />
            </div>
            </div>
            
            <div class="column">
            <div class="card">
            <ContactCard 
                contact={{name: "CSM Russell D. Prince", imgUrl: RussellPrince, title: "NC Senior Enlisted Leader - Army"}}
            />
            </div>
            </div>

            <div class="column">
            <div class="card">
            <ContactCard 
                contact={{name: "Brig Gen Stephen Mallette", imgUrl: StephenMallette, title: "Assistant Adjutant General - Air"}}
            />
            </div>
            </div>

            <div class="column">
            <div class="card">
            <ContactCard 
                contact={{name: "David L. Rodriguez", imgUrl: DavidRodriguez, title: "NC Senior Enlisted Leader - Air"}}
            />
            </div>
            </div>

            <div class="column">
            <div class="card">
            <ContactCard 
                contact={{name: "VACANT", imgUrl: vacant_img, title: "Assistant Adjutant General Maneuver"}}
            />
            </div>
            </div>

            <div class="column">
            <div class="card">
            <ContactCard 
                contact={{name: "BG Allen R. Boyette", imgUrl: AllenBoyette, title: "Assistant Adjutant General Sustainment"}}
            />
            </div>
            </div>
            
            
        </div>

        </div>
        
    ); 
  }
}

export default Contact;
