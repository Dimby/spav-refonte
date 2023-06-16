import { IconSearch } from '@tabler/icons-react';
import classNames from 'classnames';
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    position: 'relative',
    '& svg': {
      position: 'absolute',
      width: 16,
      left: 12,
      top: 7
    },
    '& input': {
      border: '0.5px solid #E1E1E1',
      backgroundColor: '#F8F8F8',
      padding: '10px 10px 10px 35px',
      borderRadius: '50px',
      width: '100%',
      '&:focus': {
        outline: 'none',
        borderWidth: 0.5,
        borderStyle: 'solid'
      }
    }
  },
}))

const Input = ({ styles = {}, ...res }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.container, styles?.inputContainer)} {...res}>
      <IconSearch/> <input type="text" className={styles?.inputBase} />
    </div>
  )
}

export default Input
