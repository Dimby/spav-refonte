import React from 'react'
import { createUseStyles } from 'react-jss';
import Text from './Text';
import { displayDescriptionDate } from '../misc/utils';

const useStyles = createUseStyles(theme => ({
  container: {
    position: 'relative',
    overflow: 'hidden',
    minHeight: 510
  },
  imageContainer: {
    position: 'relative',
    zIndex: 2,
    margin: 'auto',
    width: 370,
    height: 370,
    backgroundColor: '#F9F9F9',
    overflow: 'hidden',
    borderRadius: 30,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 5
    }
  },
  description: {
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: '140px 30px 30px 30px',
    width: 338,
    position: 'relative',
    top: '-120px'
  },
  name: {
    position: 'absolute',
    bottom: 20,
    left: 20
  },
  label: {
    color: '#FFFFFF'
  },
  contacts: {
    color: '#F4C247',
    marginBottom: 10
  },
  infos: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: '#2E85BE',
    marginBottom: 5
  }
}))

const Preview = ({ data, descriptionTitle = 'Serasera', disableName = false }) => {
  const classes = useStyles();
  const { person, image } = data;
  
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={require(`../assets/${image.url}`)} alt={image.alt} />
        {!disableName && <div className={classes.name}>
          <div>{data?.label}</div>
          <Text variant='h3' styles={{ textContainer: classes.label }}>{person.name}</Text>
        </div>}
      </div>
      <div className={classes.description}>
        <Text variant='h3' styles={{ textContainer: classes.contacts }}>{descriptionTitle}</Text>
        {person.tel && <div className={classes.infos}>{person.tel.join(', ')}</div>}
        {person.email && <div className={classes.infos}>{person.email}</div>}
        {person.address && <div className={classes.infos}>{person.address}</div>}
        {data.date && <div className={classes.infos}>{displayDescriptionDate(data.date)}</div>}
        {person.description && <div className={classes.infos}>{person.description}</div>}
      </div>
    </div>
  )
}

export default Preview
