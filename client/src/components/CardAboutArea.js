import { IconBuildingChurch, IconChartDots2, IconMaximize, IconUsersGroup } from '@tabler/icons-react';
import React from 'react'
import { createUseStyles } from 'react-jss';
import { formattedNumber, getPurcentage } from '../misc/utils';

const useStyles = createUseStyles(theme => ({
  container: {
    '& svg': {
      width: 15,
      height: 15,
      borderRadius: '2px',
      marginRight: 18
    },
    backgroundColor: '#FFFFFF',
    width: 180,
    padding: 13,
    borderRadius: '5px'
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  iconContainer: {
    marginRight: 18
  },
  surface: {
    backgroundColor: '#F2FAFF',
    padding: 6,
    color: theme.color.secondary['DEFAULT']
  },
  church: {
    backgroundColor: '#FFF6E1',
    padding: 6,
    color: theme.color.primary['DEFAULT']
  },
  worshippers: {
    backgroundColor: '#F2FFF6',
    padding: 6,
    color: '#37A559'
  },
  eucharist: {
    backgroundColor: '#FAF2FF',
    padding: 6,
    color: '#9164AC'
  },
  label: {
    fontSize: 12,
    color: 'grey'
  },
  value: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  graph: {
    marginTop: 13
  }
}))

const CardAboutArea = ({ item, data }) => {
  const classes = useStyles();
  const { name, label, size, unity = '', color } = item;

  let icon;
  switch(name) {
    case 'surface':
      icon = <IconMaximize className={classes[name]}/>
      break;
    case 'church':
      icon = <IconBuildingChurch className={classes[name]}/>
      break;
    case 'worshippers':
      icon = <IconChartDots2 className={classes[name]}/>
      break;
    case 'eucharist':
      icon = <IconUsersGroup className={classes[name]}/>
      break;
    default:
      icon = '';
      break;
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {icon}
        <div>
          <div className={classes.label}>{label}</div>
          <div className={classes.value}>{`${data[name]} / ${formattedNumber(size)} ${unity && unity}`}</div>
        </div>
      </div>
      <div className={classes.graph}>
        <Graph size={data[name]} color={color} purcent={size} />
      </div>
    </div>
  )
}

export default CardAboutArea

export const Graph = ({size, purcent, color}) => {
  const converted = getPurcentage(size, purcent);
  return <div style={{ height: 5, backgroundColor: '#E6E6E6', borderRadius: 5 }}><div style={{ width: `${converted}%`, height: 5, backgroundColor: color, borderRadius: 5 }}></div></div>
}
