import classNames from 'classnames';
import React from 'react'
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';
import { MENUS } from '../misc/utils';
import { IconArrowRight } from '@tabler/icons-react';

const useStyles = createUseStyles(theme => ({
  container: {
    textTransform: 'uppercase',
    height: 50,
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 25px',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: 15,
    backgroundColor: ({isActive}) => isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.06)',
    '&:hover': {
      transition: 'background 150ms ease-out'
    }
  },
  arrowRight: {
    marginLeft: 10
  }
}))

const MenuItem = ({ children, styles, ...res }) => {
  const { pathname } = useLocation();
  const isActive = !!MENUS.find(menu => '/'+menu.to === pathname && menu.name === children);

  const classes = useStyles({isActive});

  return (
    <div className={classNames(classes.container, styles?.menuItemContainer)} {...res}>
      {children} {isActive && <IconArrowRight className={classes.arrowRight} />}
    </div>
  )
}

export default MenuItem
