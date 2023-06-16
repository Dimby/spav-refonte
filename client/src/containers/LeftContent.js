import React from 'react'
import { createUseStyles } from 'react-jss';
import Text from '../components/Text';
import Citation from '../components/Citation';
import { getRandomVerset } from '../misc/utils';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'calc(100vh - 280px)',
    position: 'relative',
  },
  title: {
    marginBottom: 25
  },
  citationContainer: {
    width: 350
  },
  blur: {
    opacity: 0.8
  }
}))

const LeftContent = ({ data }) => {
  const classes = useStyles();
  const { cta, name } = data;
  const randomCitation = getRandomVerset();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div>
        <Text styles={{ textContainer: classes.title }} variant='h2' color='default'>{name}</Text>
        <Citation styles={{ citationContainer: classes.citationContainer }} variant='lato' author={randomCitation?.author}>{randomCitation?.text}</Citation>
      </div>
      <div>
      {!!cta && <Button variant='default' onClick={() => navigate(cta?.to)}>{cta?.text}</Button>}
      </div>
    </div>
  )
}

export default LeftContent
