import React, { Component } from 'react';

class Footer extends Component{
  render() {
    return (
        <footer>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <h6> North Carolina National Guard 2020 </h6>
        
          <a href="http://www.facebook.com/NCNationalGuard" className="fa fa-facebook"></a>
          <a href="http://twitter.com/NCNationalGuard" className="fa fa-twitter"></a>
          <a href="http://www.youtube.com/user/NorthCarolinaGuard" className="fa fa-youtube"></a>
          <a href="https://www.instagram.com/NCNationalGuard" className="fa fa-instagram"></a>
          <a href="http://www.flickr.com/photos/ncngpao/" className="fa fa-flickr"></a>
          <a href="#" className="fa fa-dvidshub"></a>


        </footer>
    ); 
  }
}

export default Footer;
