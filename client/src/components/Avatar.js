import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    width: 94,
    height: 94,
    border: ({ isActive }) => isActive ? `4px solid ${theme.color.primary['DEFAULT']}` : '4px solid #FFFFFF',
    '&:hover': {
      borderColor: theme.color.primary['DEFAULT']
    },
    borderRadius: 10,
    cursor: 'pointer',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 5
    }
  },
}))

const Avatar = ({ data, isActive = false, setSelected }) => {
  const classes = useStyles({isActive});
  const { image } = data;
  
  return (
    <div className={classes.container} onClick={() => setSelected(data)}>
      <img src={require(`../assets/${image?.url}`)} alt={image?.alt} />
    </div>
  )
}

export default Avatar
