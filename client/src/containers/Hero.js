import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import { IconArrowRight, IconFileZip } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import quoteRight from '../assets/quote-right.png';
import bgCircle from '../assets/bgCircle.png';
import Text from '../components/Text';
import Grouped from '../components/Grouped';
import Button from '../components/Button';
import { STAND_OUT } from '../misc/utils';
import StandOut from '../components/StandOut';
import Navigator from '../components/Navigator';

const useStyles = createUseStyles(theme => ({
  container: {
    height: '100vh',
    overflow: 'hidden'
  },
  slideContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#FFFFFF',
    '& > div': {
      width: ({isMoved}) => isMoved && '100%',
      display: ({isMoved}) => !isMoved && 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: 'calc(100%)',
      padding: '60px 50px 50px 60px',
    }
  },
  bulles: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundImage: `url(${bgCircle})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    height: '45%',
    width: '100%',
    zIndex: 0
  },
  content: {
    height: '80%',
    width: 650,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 1
  },
  sloganContainer: {
    position: 'relative'
  },
  slogan: {
    lineHeight: '50px',
    textShadow: '-4px -4px 0px #FFFFFF',
    margin: '5px 0 0 30px',
    '& > div': {
      fontFamily: 'Lato-Bold',
      color: '#EEB529',
      fontSize: 25
    }
  },
  sloganItem1: {
    marginLeft: 220,
    fontFamily: 'Lato-Regular',
    color: '#534117',
    fontSize: 25
  },
  sloganItem2: {
    position: 'absolute',
    top: 20,
    marginLeft: 50
  },
  news: {
    color: '#FFFFFF'
  },
  videos: {
    marginBottom: 50,
  },
  standOut: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 17,
    marginTop: 15
  },
  detailStandOut: {
    height: 'calc(100vh - 12px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentStandOut: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    padding: '50px 0'
  },
  imageContent: {
    width: 350,
    height: 350,
    margin: 'auto',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 5
    }
  },
  paragraph: {
    '& p': {
      width: 350,
      textAlign: 'justify',
      margin: 'auto',
      marginBottom: 15,
      fontSize: 15,
    }
  },
  newsContent: {
    backgroundColor: '#FFFFFF',
    height: 'calc(100vh - 100px)',
    padding: 50,
    '& > div': {
      height: '100%'
    }
  }
}))

const Hero = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [newsContent, setNewsContent] = useState(false);
  const [standItem, setStandItem] = useState({});
  const classes = useStyles({isMoved});
  const navigate = useNavigate();

  const springConfig = {
    type: "spring",
    stiffness: 200,
    damping: 20,
    mass: 1
  };

  const handleStandItem = (stand) => {
    setStandItem(stand);
    setIsMoved(true);
    setNewsContent(false);
  }

  return (
    <div className={classes.container}>
      <AnimatePresence>
        <motion.div 
          key='content'
          initial={{ x: '0px', y: '0px' }}
          animate={isMoved ? { x: '-100%' } : (newsContent ? { x: '-100vh' } : { x: '0px', y: '0px' })}
          transition={{ ...springConfig, ease: "easeInOut", duration: 0.5 }}
          className={classes.slideContent}
        >
          <div>
            <div className={classes.bulles}></div>
            <div className={classes.content}>
              <div className={classes.sloganContainer}>
                <div className={classes.sloganItem1}>Synodamparitany <br />Ambatondrazaka Vaovao</div>
                <div className={classes.sloganItem2}>
                  <img src={quoteRight} alt="quote" />
                  <Text variant='h2' color='primary' styles={{ textContainer: classes.slogan }}>Fianarana <br /> amin'ny <br /> asa tsara <br /><div>Tit. 2 : 7</div></Text>
                </div>
              </div>
              <div>
                <div className={classes.videos}>
                  <Text variant='h3' color='primary'>Tsara ho fantatra</Text>
                  <div className={classes.standOut}>
                    {STAND_OUT.map(stand => <StandOut data={stand} onClick={() => handleStandItem(stand)} />)}
                  </div>
                </div>
                <Grouped>
                  <Button icon={<IconArrowRight/>} styles={{ buttonContainer: classes.news }} onClick={() => setNewsContent(true)}>Misongadina</Button>
                  <Button variant='primaryOutline' icon={<IconFileZip/>} onClick={() => navigate('utils')}>Mety ilainao</Button>
                </Grouped>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          key='slider-seconde'
          initial={{ y: '100vh' }}
          animate={isMoved ? { y: '-100vh' } : { y: '100vh' }}
          transition={{ ...springConfig, ease: "easeInOut", duration: 0.5 }}
          className={classes.slideContent}
        >
          <div>
            <div className={classes.detailStandOut}>
              <Navigator isDownPosition={true} notDisplay text='Hiverina' onClick={() => setIsMoved(false)} />
              {standItem &&
              <div className={classes.contentStandOut}>
                <div className={classes.imageContent}><img src={`${process.env.PUBLIC_URL}/gallery/standOut/${standItem?.url}`} alt={standItem?.name}/></div>
                <h5>{standItem?.name}</h5>
                <h3 style={{ color: '#006ab0' }}>{standItem?.title}</h3>
                <div className={classes.paragraph}>
                  <h5>{standItem?.date}</h5>
                  <p>{standItem?.text}</p>
                </div>
              </div>
              }
            </div>
          </div>
        </motion.div>
        <motion.div
          key='slider-third'
          initial={{ x: '100vh', y: '-200vh' }}
          animate={newsContent ? { x: '0vh', y: '-200vh' } : { x: '100vh' }}
          transition={{ ...springConfig, ease: "easeInOut", duration: 0.5 }}
          className={classes.newsContent}
        >
          <div onClick={() => setNewsContent(false)} >
            Prochainement
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Hero;
