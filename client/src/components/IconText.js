import classNames from 'classnames';
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    fontSize: ({size}) => size && size,
    width: 'fit-content',
    cursor: 'pointer',
    '& svg': {
      marginRight: 10,
      width: ({size}) => size && size + 1
    }
  },
}))

const IconText = ({ icon, size = 15, text, styles = {}, ...res }) => {
  const classes = useStyles({size});
  
  return (
    <div className={classNames(classes.container, styles?.iconTextContainer)} onClick={() => {}} {...res}>
      {icon} {text}
    </div>
  )
}

export default IconText
