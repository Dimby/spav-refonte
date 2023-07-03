import React, { useRef, useState } from 'react'
import { createUseStyles } from 'react-jss';
import PageItem from '../components/PageItem';
import classNames from 'classnames';
import AreaContainer from '../components/AreaContainer';
import { DATA_AMBATONDRAZAKA, DATA_ANDILAMENA, DATA_ANDILANATOBY, DATA_ANDREBA, DATA_DIDY, DATA_IMERIMANDROSO } from '../misc/areas';

const useStyles = createUseStyles(theme => ({
  container: {
    position: 'relative'
  },
  pageContainer: {
    height: '100vh',
    overflowY: 'hidden',
    margin: '0 20px'
  },
  page: {
    height: '100vh',
  },
}))

const Areas = () => {
  const classes = useStyles();
  const itemRefs = useRef([]);
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className={classes.container}>
      <PageItem refs={itemRefs} activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className={classes.pageContainer}>
        <div className={classNames(classes.page)} ref={(el) => (itemRefs.current[0] = el)}>
          <AreaContainer data={DATA_AMBATONDRAZAKA} refs={itemRefs} setActiveItem={setActiveItem} activeItem={activeItem} />
        </div>
        <div className={classNames(classes.page)} ref={(el) => (itemRefs.current[1] = el)}>
          <AreaContainer data={DATA_ANDILAMENA} refs={itemRefs} setActiveItem={setActiveItem} activeItem={activeItem} />
        </div>
        <div className={classNames(classes.page)} ref={(el) => (itemRefs.current[2] = el)}>
          <AreaContainer data={DATA_ANDILANATOBY} refs={itemRefs} setActiveItem={setActiveItem} activeItem={activeItem} />
        </div>
        <div className={classNames(classes.page)} ref={(el) => (itemRefs.current[3] = el)}>
          <AreaContainer data={DATA_ANDREBA} refs={itemRefs} setActiveItem={setActiveItem} activeItem={activeItem} />
        </div>
        <div className={classNames(classes.page)} ref={(el) => (itemRefs.current[4] = el)}>
          <AreaContainer data={DATA_DIDY} refs={itemRefs} setActiveItem={setActiveItem} activeItem={activeItem} />
        </div>
        <div className={classNames(classes.page)} ref={(el) => (itemRefs.current[5] = el)}>
          <AreaContainer data={DATA_IMERIMANDROSO} refs={itemRefs} setActiveItem={setActiveItem} activeItem={activeItem} />
        </div>
      </div>
    </div>
  )
}

export default Areas
