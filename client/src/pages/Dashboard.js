import { motion } from 'framer-motion';
import React from 'react';
import { createUseStyles } from 'react-jss';
import leftBgImage from '../assets/bg-01.jpg';

import classNames from 'classnames';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Citation from '../components/Citation';
import Grouped from '../components/Grouped';
import Greeting from '../containers/Greeting';
import LeftContent from '../containers/LeftContent';
import Menu from '../containers/Menu';
import { LEFT_CONTENTS } from '../misc/utils';

const useStyles = createUseStyles(theme => ({
  root: {
    height: '100vh',
  },
  container: {
    display: 'flex',
    height: '100vh',
    '& > div': {
      flex: 1
    }
  },
  notDashboard: {
    flex: '0 0 35% !important',
  },
  leftSection: {
    backgroundImage: ({leftBgImage}) => leftBgImage && `url(${leftBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 998
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '100%',
    color: '#FFFFFF',
    '& > div': {
      display: 'flex',
      justifyContent: ({pathname}) => pathname === '/' && 'center',
      alignItems: 'center',
      height: '100%'
    }
  },
  content: {
    width: ({pathname}) => pathname === '/' ? 500 : '100%',
    marginLeft: ({pathname}) => pathname !== '/' && 80,
    height: '80%',
    zIndex: 1
  },
  dispositionH: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  citationContainer: {
    margin: '25px 0 30px 0'
  },
  rightSection: {
    position: 'relative',
    zIndex: 999
  },
}))

const Dashboard = () => {
  const {pathname} = useLocation();
  const classes = useStyles({leftBgImage, pathname});
  const navigate = useNavigate();

  let content;
  let widthSection = classes.notDashboard;

  if(pathname === '/') {
    widthSection = '';
    content = <div>
                <Greeting />
                <div>
                  Eto amin'ny tranonkalam-pifandraisan'ny <br />
                  Synodamparitany Ambatondrazaka Vaovao 05
                </div>
                <Citation styles={{ citationContainer: classes.citationContainer }} author='Vakio : And. 01 : 21'>Anorenana ny maha kristiana ny finoana.</Citation>
                <Grouped>
                  <Button onClick={() => navigate('aboutUs')}>Mombamomba</Button>
                  <Button variant='default' onClick={() => navigate('contact')}>Te hifandray ?</Button>
                </Grouped>
              </div>
  } else if(pathname === '/gallery') {
    content = '';
  }else {
    content = <LeftContent data={LEFT_CONTENTS.find(item => pathname.includes(item.to))} />
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <motion.div className={classNames(classes.leftSection, widthSection)}>
          <div className={classes.overlay}>
            <div>
              <div className={classNames(classes.content, pathname === '/' && classes.dispositionH)}>
                <div>
                  <Menu/>
                </div>
                <div style={{ marginTop: 90, padding: '0px 12px' }}>
                  {content}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className={classes.rightSection}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
