import classNames from 'classnames';
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import { IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';

import { getAreaByName } from '../misc/utils';

const useStyles = createUseStyles(theme => ({
  container: {
    flexBasis: '19%',
    maxWidth: '100%',
    height: 250,
    cursor: 'pointer',
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    '&:hover': {
      opacity: 0.8
    }
  },
  description: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    padding: '2px 8px',
    fontSize: 13,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    maxWidth: 145,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'break-spaces',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
  },
  preview: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: 99,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  previewImageContent: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    height: '80%',
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    '& svg': {
      position: 'absolute',
      top: 10,
      right: 10,
      cursor: 'pointer',
      width: 20,
      height: 20,
      padding: 10,
      borderRadius: 50,
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }
    }
  },
  previewDescription: {
    padding: '5px 10px',
    backgroundColor: '#FFFFFF'
  }
}))

const Image = ({ imageUrl, name, description, alt = 'draft', styles, ...res }) => {
  const classes = useStyles();
  const [openPreview, setOpenPreview] = useState(false);
  const area = getAreaByName(name);

  const _handlePreview = () => {
    setOpenPreview(true);
  }

  return (
    <>
      <div className={classNames(classes.container, styles?.imageContainer)} onClick={_handlePreview}>
        <img src={`${process.env.PUBLIC_URL}/gallery/${name}/${imageUrl}`} alt={alt} />
        <div className={classes.description}>{description}</div>
      </div>
      {openPreview && <motion.div className={classes.preview} initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
        <div className={classes.previewImageContent}>
          <IconX onClick={() => setOpenPreview(false)} />
          <img src={`${process.env.PUBLIC_URL}/gallery/${name}/${imageUrl}`} alt={alt} />
          <div className={classes.previewDescription}>
            <span>Faritra : {area?.label}</span>
            <span style={{ float: 'right' }}>{description}</span>
          </div>
        </div>
      </motion.div>}
    </>
  )
}

export default Image
