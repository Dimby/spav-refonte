import React from 'react'
import { createUseStyles } from 'react-jss';
import Text from '../components/Text';
import Button from '../components/Button';
import { IconArrowRight } from '@tabler/icons-react';

const useStyles = createUseStyles(theme => ({
  container: {
    padding: '50px 100px',
    color: theme.color.secondary['DARK'],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'calc(100vh - 100px)',
    overflow: 'auto'
  },
  title: {
    color: theme.color.secondary['DARK']
  },
  form: {
    display: 'flex',
    gap: 25,
    flexWrap: 'wrap',
    marginTop: 50
  },
  formControl: {
    '& input, textarea': {
      padding: '15px 18px',
      width: 300,
      fontSize: 17,
      color: theme.color.secondary['DARK'],
      backgroundColor: 'transparent',
      border: `1px solid ${theme.color.secondary['DARK']}`,
      '&:focus': {
        outline: 'none',
        borderWidth: 1,
        borderStyle: 'solid'
      }
    },
    '& textarea': {
      fontFamily: 'Lato-Regular',
      marginTop: 25
    }
  },
  info: {
    marginBottom: 50
  }
}))

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Text styles={{ textContainer: classes.title }} variant='h3'>Fifandraisana</Text>
      <p>
        Raha mila fanazavana fanampiny, fiarahamiasa, fanamarihana manokana, ... tiana ampitaina dia manorata aminay
        amin'ny alalan'ny adiresy mailaka eo ambany na afaka miantso amin'ny laharana etsy ankavia. <br />
        Azonao atao koa ny manatona eny amin'ny Biraon'ny Mpandraharaha eny amin'ny Station FJKM Ambohimiangaly Ambatondrazaka 503.
      </p>
      <div className={classes.form}>
        <div className={classes.formControl}>
          <input type='text' placeholder='Anarana' />
        </div>
        <div className={classes.formControl}>
          <input type='text' placeholder='Fanampiny' />
        </div>
        <div className={classes.formControl}>
          <input type='text' placeholder='Synodamparitany *' />
        </div>
        <div className={classes.formControl}>
          <input type='text' placeholder='Fitandremana *' />
        </div>
        <div className={classes.formControl}>
          <input type='text' placeholder='Laharana' />
        </div>
        <div className={classes.formControl}>
          <input type='text' placeholder='Adiresy mailaka *' />
        </div>
        <div>
          <div className={classes.formControl}>
            <input type='text' placeholder='Adiresy handefasana' />
          </div>
          <div className={classes.formControl}>
            <textarea rows={3} placeholder='Soraty eto ny hafatra *'></textarea>
          </div>
        </div>
      </div>
      <div className={classes.info}>* Tsy maintsy fenoina</div>
      <Button icon={<IconArrowRight/>}>Alefa</Button>
    </div>
  )
}

export default Contact
