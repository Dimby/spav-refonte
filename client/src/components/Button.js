import classNames from 'classnames';
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    textTransform: 'uppercase',
    height: 60,
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 35px',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: 15,
    '&:hover': {
      transform: 'scale(0.98)',
      transition: 'transform 100ms ease-out'
    }
  },
  primary: {
    backgroundColor: '#006AB0',
  },
  secondary: {
    backgroundColor: '#FFD160',
  },
  default: {
    backgroundColor: '#FFFFFF',
    color: '#006AB0'
  },
}))


const Button = ({ variant = 'primary', children, styles }) => {
  const classes = useStyles({variant});

  const variantStyles = {
    primary: classNames(classes.container, classes.primary),
    secondary: classNames(classes.container, classes.secondary),
    default: classNames(classes.container, classes.default),
  };

  return (
    <div className={classNames(variantStyles[variant], styles?.buttonContainer)}>
      {children}
    </div>
  )
}

export default Button
