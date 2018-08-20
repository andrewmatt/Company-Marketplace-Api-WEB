// @flow
import React from 'react';


const Avatar = ({ email, user_avatar, size , style }) => {

  
  let uri = user_avatar;
  if (uri == null) {
    uri = 'https://i.imgur.com/jNNT4LE.png';
  }

  else if ( !(uri.startsWith("https://i.imgur.com/"))){
    uri = 'https://i.imgur.com/jNNT4LE.png';
  }
  return (
    <img
      src={uri}
      alt={email}
      style={{ width: `${size}px`, height: `${size}px`, borderRadius: '35%', ...style }}
    />
  );
};

export default Avatar;