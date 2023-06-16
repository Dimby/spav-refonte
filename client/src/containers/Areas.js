import React from 'react'
import { createUseStyles } from 'react-jss';
import PageItem from '../components/PageItem';

const useStyles = createUseStyles(theme => ({
  container: {
    
  },
}))

const Areas = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <PageItem />
    </div>
  )
}

export default Areas
