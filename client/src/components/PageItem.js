import { IconCircleFilled } from '@tabler/icons-react';
import classNames from 'classnames';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';
import { LEFT_CONTENTS } from '../misc/utils';

const useStyles = createUseStyles((theme) => ({
  container: {
    position: 'absolute',
    color: '#FFFFFF',
    transform: 'translateX(calc(-100% - 22px)) translateY(calc(-30%))',
    top: '50vh',
    zIndex: 8,
  },
  pageItem: {
    fontFamily: 'Mullingar',
    fontSize: 26,
    letterSpacing: '1px',
    cursor: 'pointer',
    margin: '10px 0',
    position: 'relative',
    textAlign: 'right',
  },
  icon: {
    position: 'absolute',
    top: 4,
    right: '-34px',
    color: theme.color.primary['DEFAULT'],
  },
  blur: {
    opacity: 0.8,
  },
}));

const PageItem = ({ refs, activeItem, setActiveItem }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { pages } = LEFT_CONTENTS.find((item) => pathname.includes(item.to));

  const handleClick = (index) => {
    setActiveItem(index);
    refs.current[index - 1]?.scrollIntoView({ behavior: 'smooth' });
  };

  const Item = ({ pageData, index }) => {
    const { label } = pageData;
    const isActive = activeItem === index;
    return (
      <div
        className={classNames(classes.pageItem, !isActive && classes.blur)}
        onClick={() => handleClick(index)}
      >
        {label} {isActive && <IconCircleFilled className={classes.icon} />}
      </div>
    );
  };

  return (
    <div className={classes.container}>
      {pages.map((page, index) => (
        <Item key={index} pageData={page} index={index + 1} />
      ))}
    </div>
  );
};

export default PageItem;
