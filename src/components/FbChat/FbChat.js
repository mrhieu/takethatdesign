import React from 'react';

const FACEBOOK_APP_ID = '272354566715786';

export default () => {
  return (
    <div className="fb-customerchat"
      attribution="setup_tool"
      page_id={FACEBOOK_APP_ID}
      logged_in_greeting="Hi! How can I help you?"
      logged_out_greeting="Hi! How can I help you?">
    </div>
  )
}
