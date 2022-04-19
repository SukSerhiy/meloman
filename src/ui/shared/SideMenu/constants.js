import React from 'react';
import AlbumIcon from '@material-ui/icons/Album'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'

const styleSheet = {
  itemIcon: {
    color: '#ffff',
  },
}

export const routeLinks = [
  {
    to: '/albums',
    icon: <AlbumIcon style={styleSheet.itemIcon} />,
    label: 'Search Albums',
  },
  {
    to: '/artists',
    icon: <EmojiPeopleIcon style={styleSheet.itemIcon} />,
    label: 'Search Artists',
  },
]