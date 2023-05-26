import classNames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    
  },
  primary: {
    color: '#006AB0',
  },
  secondary: {
    color: '#FFD160',
  },
  default: {
    color: '#FFFFFF',
  },
  mullingar: { 
    fontFamily: 'Mullingar',
    letterSpacing: '1px',
    fontSize: 26,
    lineHeight: '25px'
  },
  lato: {
    fontFamily: 'Lato-Regular'
  },
  author: {
    fontFamily: 'Lato-Light',
    fontSize: ({ variant }) => variant === 'mullingar' ? 17 : 14
  }
}))

const Citation = ({ variant = 'mullingar', author, children, withQuote = true, color, styles }) => {
  const classes = useStyles({variant});

  const variantStyles = {
    lato: classNames(classes.container, classes.lato),
    mullingar: classNames(classes.container, classes.mullingar),
  };
  const colorClass = classes[color] || classes.default;

  return (
    <div className={classNames(variantStyles[variant], colorClass, styles?.citationContainer)}>
      {withQuote ? `"${children}"` : children}
      <div className={classes.author}>{author}</div>
    </div>
  )
}

export default Citation
