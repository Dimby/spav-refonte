import React from 'react'
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';
import { LEFT_CONTENTS } from '../misc/utils';
import classNames from 'classnames';
import Navigator from './Navigator';

const useStyles = createUseStyles(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
}))

const Page = ({ activeItem, refs, setActiveItem, children, styles }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { pages } = LEFT_CONTENTS.find((item) => pathname.includes(item.to));

  let stipper = {up: '', down: ''};
  if(activeItem === 1) {
    stipper = {up: '', down: pages[activeItem].label}
  } else if(activeItem === pages.length) {
    stipper = {up: pages[activeItem - 2].label, down: ''}
  } else {
    stipper = {up: pages[activeItem - 2]?.label, down: pages[activeItem]?.label}
  }

  const handleClick = (index) => {
    setActiveItem(index);
    refs.current[index - 1]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={classNames(classes.container, styles?.pageContainer)}>
      <Navigator isDownPosition={true} notDisplay={stipper?.up !== ''} text={stipper?.up} onClick={() => stipper?.up !== '' && (handleClick(activeItem - 1))} />
      {children}
      <Navigator isDownPosition={false} notDisplay={stipper?.down !== ''} text={stipper?.down} onClick={() => stipper?.down !== '' && (handleClick(activeItem + 1))} />
    </div>
  )
}

export default Page
