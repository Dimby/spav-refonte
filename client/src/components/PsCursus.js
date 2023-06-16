import React from 'react'
import { createUseStyles } from 'react-jss';
import Avatar from './Avatar';
import { IconCircle } from '@tabler/icons-react';
import classNames from 'classnames';

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'flex',
    width: 400,
    alignItems: 'center',
    '& > div': {
      flex: 1
    }
  },
  reverse: {
    flexDirection: 'row-reverse'
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    width: 199.5
  },
  borderRight: {
    borderRight: '1px solid #2E85BE'
  },
  borderLeft: {
    borderLeft: '1px solid #2E85BE'
  },
  left: {
    width: 200,
    textAlign: ({ isOdd }) => !isOdd && 'right',
    padding: ({ isOdd }) => !isOdd ? '0 30px 0 0' : '0 0 0 30px',
    fontFamily: ({ isActive }) => isActive ? 'Lato-Bold' : 'Lato-Regular',
    fontSize: 17,
    color: '#2E85BE',
  },
  iconCircle: {
    width: 15,
    color: '#2E85BE',
    position: 'relative',
    left: ({ isOdd }) => isOdd ? 8 : -8,
    fill: '#FFFFFF'
  },
  separation: {
    width: 100,
    borderBottom: '1px solid #2E85BE',
    flex: 1,
    position: 'relative',
    left: ({ isOdd }) => isOdd ? 5 : -5,
  }
}))

const PsCursus = ({ ps, index, isActive, setSelected }) => {
  const isOdd = index % 2 !== 0;
  const classes = useStyles({ isOdd, isActive });
  
  return (
    <div className={classNames(classes.container, isOdd && classes.reverse)}>
      <div className={classes.left}>
        {Object.values(ps.date).join(' - ')}
      </div>
      <div className={classNames(classes.right, isOdd && classes.reverse, isOdd ? classes.borderRight : classes.borderLeft)}>
        <IconCircle className={classes.iconCircle}/>
        <div className={classes.separation}></div>
        <Avatar data={ps} isActive={isActive} setSelected={setSelected} />
      </div>
    </div>
  )
}

export default PsCursus
