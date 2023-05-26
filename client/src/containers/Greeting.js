import React from 'react'
import Text from '../components/Text'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    '& > div': {
      lineHeight: '45px'
    },
    marginBottom: 25
  },
  frenchGreeting: {
    opacity: 0.7,
    fontSize: 50
  },
  englishGreeting: {
    opacity: 0.4,
    fontSize: 45
  }
}))

const Greeting = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Text variant='h2' color='default'>Tonga soa</Text>
      <Text styles={{ textContainer: classes.frenchGreeting }} variant='h2' color='default'>Bienvenue</Text>
      <Text styles={{ textContainer: classes.englishGreeting }} variant='h2' color='default'>Welcome</Text>
    </div>
  )
}

export default Greeting
