import React from 'react'
import { createUseStyles } from 'react-jss';
import leftBgImage from '../assets/bg-01.jpg'
import Greeting from '../containers/Greeting';
import Citation from '../components/Citation';
import Button from '../components/Button';
import Grouped from '../components/Grouped';
import Menu from '../containers/Menu';

const useStyles = createUseStyles(theme => ({
  root: {
    height: '100vh',
    overflow: 'hidden'
  },
  container: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    '& > div': {
      flex: 1
    }
  },
  leftSection: {
    backgroundImage: ({leftBgImage}) => leftBgImage && `url(${leftBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '100%',
    color: '#FFFFFF',
    '& > div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }
  },
  content: {
    width: 500,
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  citationContainer: {
    margin: '25px 0 30px 0'
  }
}))

const Dashboard = () => {
  const classes = useStyles({leftBgImage});
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.leftSection}>
          <div className={classes.overlay}>
            <div>
              <div className={classes.content}>
                <div>
                  <Menu/>
                </div>
                <div>
                  <Greeting />
                  <div>
                    Eto amin'ny tranonkalam-pifandraisan'ny <br />
                    Synodamparitany Ambatondrazaka Vaovao 05
                  </div>
                  <Citation styles={{ citationContainer: classes.citationContainer }} author='Vakio : And. 01 : 21'>Anorenana ny maha kristiana ny finoana.</Citation>
                  <Grouped>
                    <Button>Mombamomba</Button>
                    <Button variant='default'>Te hifandray ?</Button>
                  </Grouped>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rightSection}>
          Right Section
        </div>
      </div>
    </div>
  )
}

export default Dashboard
