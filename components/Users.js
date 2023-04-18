import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import './Users.css';

export default function Users({ users }) {
    function getRandomColor() {
      const colors = ['#3FE08A', '#C89DFC', '#FF9979', '#EA6666', '#FFE579'];
      return colors[Math.floor(Math.random() * 5)];
    }

    function abbreviateName(name) {
      return `${name.split(' ')[0][0]?.toUpperCase()}${name.split(' ')?.[1]?.[0]?.toUpperCase() || ""}`;
    }

    return (
      <AvatarGroup max={6} className='users'>
        {users.map(user => {
          return (
            <Avatar
              className='avatar'
              key={user.username}
              alt={user.username}
              children={abbreviateName(user.username)}
              sx={{ 
                bgcolor: getRandomColor(),
                color: '#203558',
              }}
            />
          );
        })}
      </AvatarGroup>
    );
  }