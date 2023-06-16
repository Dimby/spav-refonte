import React from 'react'
import { createUseStyles } from 'react-jss';
import quoteRight from '../assets/quote-right.png';
import bgCircle from '../assets/bgCircle.png';
import Text from '../components/Text';
import Grouped from '../components/Grouped';
import Button from '../components/Button';
import { IconArrowRight, IconFileZip } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  bulles: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundImage: `url(${bgCircle})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    height: '50%',
    width: '100%',
    zIndex: 0
  },
  content: {
    width: 500,
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 1
  },
  sloganContainer: {
    position: 'relative'
  },
  slogan: {
    lineHeight: '67px',
    textShadow: '-4px -4px 0px #FFFFFF',
    margin: '5px 0 0 30px',
    '& > div': {
      fontFamily: 'Lato-Bold',
      color: '#EEB529',
      fontSize: 25
    }
  },
  sloganItem1: {
    marginLeft: 170,
    fontFamily: 'Lato-Regular',
    color: '#534117',
    fontSize: 25
  },
  sloganItem2: {
    position: 'absolute',
    top: 0
  },
  news: {
    color: '#FFFFFF'
  }
}))

const Hero = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.bulles}></div>
          <div className={classes.content}>
            <div className={classes.sloganContainer}>
              <div className={classes.sloganItem1}>Synodamparitany <br />Ambatondrazaka Vaovao</div>
              <div className={classes.sloganItem2}>
                <img src={quoteRight} alt="quote" />
                <Text variant='h1' color='primary' styles={{ textContainer: classes.slogan }}>Fianarana <br /> amin'ny <br /> asa tsara <br /><div>Tit. 2 : 7</div></Text>
              </div>
            </div>
            <div className={classes.videos}>
              Videos ici
            </div>
            <Grouped>
              <Button icon={<IconArrowRight/>} styles={{ buttonContainer: classes.news }}>Misongadina</Button>
              <Button variant='primaryOutline' icon={<IconFileZip/>} onClick={() => navigate('utils')}>Mety ilainao</Button>
            </Grouped>
          </div>
    </div>
  )
}

export default Hero;
