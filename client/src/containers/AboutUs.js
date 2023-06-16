import React, { useRef, useState } from 'react'
import { createUseStyles } from 'react-jss';
import PageItem from '../components/PageItem';
import classNames from 'classnames';
import Committee from './aboutus/Committee';
import Ps from './aboutus/Ps';
import Stats from './aboutus/Stats';
import History from './aboutus/History';

const useStyles = createUseStyles(theme => ({
  container: {
    position: 'relative'
  },
  pageContainer: {
    height: '100vh',
    overflowY: 'hidden'
  },
  page: {
    height: '100vh',
    padding: '0 20px'
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  const itemRefs = useRef([]);
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className={classes.container}>
      <PageItem refs={itemRefs} activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className={classes.pageContainer}>
        <div className={classNames(classes.page)} ref={(el) => (itemRefs.current[0] = el)}>
          <Committee refs={itemRefs} activeItem={activeItem} setActiveItem={setActiveItem}/>
        </div>
        <div className={classNames(classes.page)} ref={(el) => (itemRefs.current[1] = el)}>
          <Ps refs={itemRefs} activeItem={activeItem} setActiveItem={setActiveItem}/>
        </div>
        <div className={classNames(classes.page)} ref={(el) => (itemRefs.current[2] = el)}>
          <Stats refs={itemRefs} activeItem={activeItem} setActiveItem={setActiveItem}/>
        </div>
        <div className={classNames(classes.page)} ref={(el) => (itemRefs.current[3] = el)}>
          <History refs={itemRefs} activeItem={activeItem} setActiveItem={setActiveItem}/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
