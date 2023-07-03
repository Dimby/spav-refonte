import classNames from 'classnames';
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    fontFamily: 'Mullingar',
    letterSpacing: '2px'
  },
  h1: {
    fontSize: '86px',
  },
  h2: {
    fontSize: '56px',
  },
  h3: {
    fontSize: '26px',
  },
  primary: {
    color: theme.color.secondary['DEFAULT'],
  },
  secondary: {
    color: '#FFD160',
  },
  default: {
    color: '#FFFFFF',
  },
}))

const Text = ({ variant, color, children, styles = {} }) => {
  const classes = useStyles();

  const variantStyles = {
    h1: classNames(classes.container, classes.h1),
    h2: classNames(classes.container, classes.h2),
    h3: classNames(classes.container, classes.h3),
  };

  const colorClass = classes[color] || classes.default;

  return (
    <div className={classNames(variantStyles[variant], colorClass, styles?.textContainer)}>
      {children}
    </div>
  )
}

export default Text
