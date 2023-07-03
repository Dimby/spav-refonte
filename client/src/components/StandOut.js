import { IconArrowRight } from '@tabler/icons-react';
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    width: 200,
    height: 115,
    border: '0.5px solid #E6E6E6',
    borderRadius: 10,
    display: 'flex',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F5FBFF',
      transform: 'scale(1.009)',
      transition: 'transform ease-in-out 100ms'
    }
  },
  imageContent: {
    flex: 'none',
    width: '75px',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '10px 0 0 10px'
    },
  },
  rightContent: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato-Bold',
    color: theme.color.secondary['DEFAULT']
  },
  description: {
    fontSize: 12,
    color: '#45494D'
  },
  cta: {
    display: 'flex',
    fontSize: 12,
    '& svg': {
      width: 15,
      height: 15,
      marginLeft: 8
    }
  }
}))

const StandOut = ({ data, onClick }) => {
  const { date, title } = data;
  const classes = useStyles();
  return (
      <div className={classes.container} onClick={onClick}>
        <div className={classes.imageContent}>
          <img src={`${process.env.PUBLIC_URL}/gallery/standOut/${data?.url}`} alt='Test' />
        </div>
        <div className={classes.rightContent}>
          <div className={classes.date}>{date}</div>
          <div className={classes.description}>{title}</div>
          <div className={classes.cta}>Hamaky <IconArrowRight/></div>
        </div>
      </div>
  )
}

export default StandOut
