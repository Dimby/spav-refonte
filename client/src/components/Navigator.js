import { IconArrowNarrowDown, IconArrowNarrowUp } from '@tabler/icons-react';
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    cursor: 'pointer',
    fontFamily: 'Mullingar',
    fontSize: 26,
    display: 'flex',
    alignItems: 'center',
    color: theme.color.primary['DEFAULT'],
    margin: ({ isDownPosition }) => isDownPosition ? '25px 0 0 0' : '0 0 25px 0',
    justifyContent: ({isDownPosition}) => isDownPosition && 'end'
  },
  text: {
    margin: '0 20px',
    opacity: 0.5,
    '&:hover': {
      opacity: 1
    },
  },
  icon: {
    backgroundColor: theme.color.primary['DEFAULT'],
    display: 'inline-block',
    width: 40,
    height: 40,
    borderRadius: '50%',
    opacity: 0.6,
    position: 'relative',
    '& svg': {
      position: 'relative',
      left: 8,
      top: 8,
      color: '#FFFFFF'
    }
  }
}))

const Navigator = ({ isDownPosition = true, text, notDisplay, ...res }) => {
  const classes = useStyles({ isDownPosition });
  return (
    <div className={classes.container} {...res}>
      {!notDisplay ? '' : <>
        {isDownPosition && <span className={classes.icon}><IconArrowNarrowUp/></span>}
        <span className={classes.text}>{text}</span>
        {!isDownPosition && <span className={classes.icon}><IconArrowNarrowDown/></span>}
      </>}
    </div>
  )
}

export default Navigator
