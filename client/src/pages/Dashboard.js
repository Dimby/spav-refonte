import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  root: {}
}))

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Dashboard
    </div>
  )
}

export default Dashboard
