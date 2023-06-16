import classNames from 'classnames';
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: ({gap}) => gap && gap
  },
}))

const Grouped = ({ children, gap = 15, styles }) => {
  const classes = useStyles({gap});

  return (
    <div className={classNames(classes.container, styles?.groupedContainer)}>
      {children}
    </div>
  )
}

export default Grouped
