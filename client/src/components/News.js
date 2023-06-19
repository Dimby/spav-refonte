import React from 'react'
import { createUseStyles } from 'react-jss';
import { getDayToString, getFullDayToString } from '../misc/utils';
import { DEFAULT } from '../common/theme';

const useStyles = createUseStyles(theme => ({
  container: {
    padding: 15,
    border: '2px solid #f1f1f1',
    borderRadius: 6,
    width: 150,
    fontSize: 13,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10
  },
  date: {
    borderBottom: '1px solid #f1f1f1',
    paddingBottom: 5
  },
  title: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: ({ randomColor }) => randomColor && randomColor
  },
  location: {
    fontSize: 12
  }
}))

const News = ({ data }) => {
  const { dateStart, dateFin, title, location } = data;
  const colors = DEFAULT.color.random;
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  const classes = useStyles({ randomColor });

  return (
    <div className={classes.container}>
      <div className={classes.date}>
        <div>
        {!dateFin ? getDayToString(dateStart) : `${getDayToString(dateStart, true)} - ${getDayToString(dateFin, true)}`}
        </div>
        <div>
          {dateFin ? `${new Date(dateStart).getDate()} - ${getFullDayToString(dateFin, true)}` : getFullDayToString(dateStart)}
        </div>
      </div>
      <div>
        <div className={classes.title}>{title}</div>
        <div className={classes.location}>{location}</div>
      </div>
    </div>
  )
}

export default News
