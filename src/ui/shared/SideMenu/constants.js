import React from 'react';
import AlbumIcon from '@material-ui/icons/Album'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import HomeIcon from '@material-ui/icons/Home';

const styleSheet = {
  itemIcon: {
    color: '#ffff',
  },
}

export const routeLinks = [
  {
    to: '/',
    exact: true,
    icon: <HomeIcon style={styleSheet.itemIcon} />,
    label: 'Home',
  },
  {
    to: '/albums',
    icon: <AlbumIcon style={styleSheet.itemIcon} />,
    label: 'Search Releases',
  },
  {
    to: '/artists',
    icon: <EmojiPeopleIcon style={styleSheet.itemIcon} />,
    label: 'Search Artists',
  },
]