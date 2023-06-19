import React from 'react'
import { createUseStyles } from 'react-jss';
import Page from './Page';
import Text from './Text';
import CardAboutArea from './CardAboutArea';
import { ABOUT_AREA_MENU, AREA_HEADER } from '../misc/areas';
import Table from './Table';
import { padWithLeadingZeros } from '../misc/utils';
import { IconClockFilled } from '@tabler/icons-react';
import News from './News';

const useStyles = createUseStyles(theme => ({
  container: {
    color: theme.color.secondary['DEFAULT'],
    padding: '0 50px'
  },
  title: {
    color: theme.color.primary['DEFAULT']
  },
  descriptionContainer: {
    maxHeight: 'calc(100vh - 300px)',
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  about: {
    color: theme.color.secondary['DARK'],
    margin: '20px 0 20px 0'
  },
  aboutGraph: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  tableChurchs: {
    marginTop: 30,
    marginBottom: 30
  },
  tableTitle: {
    fontFamily: 'Mullingar',
    fontSize: 26,
    letterSpacing: '1px'
  },
  newsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: '30px 20px'
  },
  newsTitle: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.color.secondary['DARK'],
    '& svg': {
      width: 15,
      height: 15,
      marginRight: 5
    }
  },
  news: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 20,
    gap: 20,
    flexWrap: 'wrap'
  }
}))

const AreaContainer = ({ data, activeItem, refs, setActiveItem }) => {
  const classes = useStyles();
  const { name, description, about, churchs, news } = data;
  const currentDate = new Date();
  const pastNews = [];
  const upcomingNews = [];

  for (const item of news) {
    const newsDate = new Date(item.dateStart);
    if (newsDate < currentDate) {
      pastNews.push(item);
    } else {
      upcomingNews.push(item);
    }
  }
  
  pastNews.sort((a, b) => new Date(a.dateStart) - new Date(b.dateStart));
  upcomingNews.sort((a, b) => new Date(a.dateStart) - new Date(b.dateStart));

  const rowsData = churchs.map((church, index) => {
    return { item: padWithLeadingZeros(index + 1), ...church }
  })

  return (
    <Page activeItem={activeItem} refs={refs} setActiveItem={setActiveItem}>
      <div className={classes.container}>
        <Text styles={{ textContainer: classes.title }} variant='h2' color='default'>{name}</Text>
        <p>{description}</p>
        <div className={classes.descriptionContainer}>

          <div className={classes.aboutContainer}>
            <Text variant='h3' styles={{ textContainer: classes.about }} color='primary'>Mombamomba</Text>
            <div className={classes.aboutGraph}>
              {ABOUT_AREA_MENU.map(item => <CardAboutArea item={item} data={about} />)}
            </div>
          </div>

          <div className={classes.tableChurchs}>
            <Table title="Lisitry ny fitandremana" headerData={AREA_HEADER} rowsData={rowsData} filterBy={['name']} styles={{ title: classes.tableTitle }} />
          </div>

          <div>
            <Text variant='h3' styles={{ textContainer: classes.about }} color='primary'>Vaovao Samihafa</Text>
            <div className={classes.newsContainer}>
              <Text variant='h4' styles={{ textContainer: classes.newsTitle }}><IconClockFilled/> Ho avy</Text>
              <div className={classes.news}>{upcomingNews.map(item => <News data={item}/>)}</div>
              <Text variant='h4' styles={{ textContainer: classes.newsTitle }}><IconClockFilled/> Efa lasa</Text>
              <div className={classes.news}>{pastNews.map(item => <News data={item}/>)}</div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default AreaContainer
