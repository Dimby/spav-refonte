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
    },
    '& svg': {
      width: 22,
      height: 22,
      marginLeft: 10
    }
  },
  primary: {
    backgroundColor: '#006AB0',
  },
  primaryOutline: {
    color: '#006AB0',
    border: '1px solid #006AB0'
  },
  secondary: {
    backgroundColor: '#FFD160',
  },
  secondaryOutline: {
    backgroundColor: '#FFD160',
  },
  default: {
    backgroundColor: '#FFFFFF',
    color: '#006AB0'
  },
  defaultOutline: {
    backgroundColor: '#FFFFFF',
    color: '#006AB0'
  },
}))


const Button = ({ variant = 'primary', icon, children, styles, ...res }) => {
  const classes = useStyles({variant});

  const variantStyles = {
    primary: classNames(classes.container, classes.primary),
    primaryOutline: classNames(classes.container, classes.primaryOutline),
    secondary: classNames(classes.container, classes.secondary),
    secondaryOutline: classNames(classes.container, classes.secondaryOutline),
    default: classNames(classes.container, classes.default),
    defaultOutline: classNames(classes.container, classes.defaultOutline),
  };

  return (
    <div className={classNames(variantStyles[variant], styles?.buttonContainer)} {...res}>
      {children} {icon && icon}
    </div>
  )
}

export default Button
