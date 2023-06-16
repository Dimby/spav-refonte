import React, { useState, useRef } from 'react'
import { IconMenu2 } from '@tabler/icons-react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

import MenuItem from '../components/MenuItem';
import { MENUS } from '../misc/utils';
import { useLocation, useNavigate } from 'react-router-dom';

const useStyles = createUseStyles(theme => ({
  container: {
    position: 'absolute',
    zIndex: 10
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
    },
    position: 'relative',
    zIndex: 10
  },
  iconMenu: {
    width: 30,
    height: 30
  },
  menuItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    position: 'relative',
    top: ({top}) => top && top,
    left: ({left}) => left && `calc(${left}px + 60px)`
  },
  opacity: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: ({pathname}) => pathname === '/' ? '50%' : '35%',
    height: '100vh',
    zIndex: 9,
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
  }
}))

const Menu = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const iconRef = useRef(null);
  
  const getPosition = () => {
    if(iconRef.current) {
      const { left, top } = iconRef.current.getBoundingClientRect();
      return { left, top }
    }
  }
  const classes = useStyles({pathname, left: getPosition()?.left, top: getPosition()?.top});

  const _handleMenu = () => {
    setOpen(!open);
  }
  
  return (
    <div className={classes.container}>
      <div className={classes.iconMenuContainer} onClick={_handleMenu} ref={iconRef}>
        <IconMenu2 className={classes.iconMenu}/>
      </div>
      {open &&
      <div className={classes.opacity}>
        <div className={classes.menuItems}>
          {MENUS.map((menu, key) => <motion.div key={key} initial={{ x: menu?.x, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
            <MenuItem onClick={() => {
              navigate(menu?.to) 
              setOpen(false)}}>{menu.name}</MenuItem>
              </motion.div>)}
        </div>
      </div>
      }
    </div>
  )
}

export default Menu
