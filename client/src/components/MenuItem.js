import classNames from 'classnames';
import React from 'react'
import { createUseStyles } from 'react-jss';

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
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    '&:hover': {
      transition: 'background 150ms ease-out'
    }
  },
}))

const MenuItem = ({ children, styles }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.container, styles?.menuItemContainer)}>
      {children}
    </div>
  )
}

export default MenuItem
