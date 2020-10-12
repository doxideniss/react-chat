import React from 'react';

import { generateAvatarFromHash } from "utils/helpers";

import './avatar.scss';

const Avatar = ({ user }) => {
  if (user.avatar) {
    return <img className="avatar"
                src={user.avatar}
                alt={`${user.fullName} avatar`}/>;
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user._id);
    const firstChar = user.fullName[0].toUpperCase();
    return (
      <div style={{
        background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
      }}
           className="avatar avatar--symbol"
      >
        {firstChar}
      </div>
    )
  }
};

export default Avatar;
