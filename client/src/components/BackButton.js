import { IconArrowNarrowLeft } from '@tabler/icons-react';
import React from 'react'
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router';

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 18,
    color: '#0D507D',
    width: 'fit-content',
    cursor: 'pointer',
    '& svg': {
      marginRight: 10
    }
  },
}))

const BackButton = ({ text, ...res }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.container} onClick={() => navigate(-1)} {...res}>
      <IconArrowNarrowLeft/> {text}
    </div>
  )
}

export default BackButton
