import React, { useEffect } from 'react';

const FACEBOOK_APP_ID = '272354566715786';

export default () => {
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml            : true,
        version          : 'v3.2'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <React.Fragment>
      <div id="fb-root"></div>

      <div className="fb-customerchat"
        attribution="setup_tool"
        page_id={FACEBOOK_APP_ID}
        logged_in_greeting="Hi! How can I help you?"
        logged_out_greeting="Hi! How can I help you?">
      </div>
    </React.Fragment>
  )
}
