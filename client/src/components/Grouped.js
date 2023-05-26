import classNames from 'classnames';
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 15
  },
}))

const Grouped = ({ children, styles }) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.container, styles?.groupedContainer)}>
      {children}
    </div>
  )
}

export default Grouped
