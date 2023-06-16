import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    
  },
}))

const Verse = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      Verset
    </div>
  )
}

export default Verse
