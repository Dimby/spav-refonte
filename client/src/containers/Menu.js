import { IconMenu2 } from '@tabler/icons-react';
import React from 'react'
import { createUseStyles } from 'react-jss';
import MenuItem from '../components/MenuItem';
import { MENUS } from '../misc/utils';

const useStyles = createUseStyles(theme => ({
  container: {
    
  },
  iconMenuContainer: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ffffff3d',
      transition: 'background 150ms ease-out'
    }
  },
  iconMenu: {
    width: 30,
    height: 30
  },
  menuItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
}))

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.iconMenuContainer}>
      <IconMenu2 className={classes.iconMenu}/>
      </div>
      <div className={classes.menuItems}>
        {MENUS.map(menu => <MenuItem>{menu.name}</MenuItem>)}
      </div>
    </div>
  )
}

export default Menu
