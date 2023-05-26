import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    
  },
}))

const ex = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      
    </div>
  )
}

export default ex
