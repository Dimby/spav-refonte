import React from 'react'
import { createUseStyles } from 'react-jss';
import Page from '../../components/Page';
import Text from '../../components/Text';

const useStyles = createUseStyles(theme => ({
  container: {
    margin: 'auto',
    width: '90%',
  },
  title: {
    color: '#F4C247',
    lineHeight: '45px',
    marginBottom: 15,
  },
  body: {
    marginTop: 50
  },
  titleBody: {
    color: '#006AB0'
  }
}))

const History = ({ refs, activeItem, setActiveItem }) => {
  const classes = useStyles();
  return (
    <Page activeItem={activeItem} refs={refs} setActiveItem={setActiveItem}>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <Text styles={{ textContainer: classes.title }} variant="h2" color="default">
            Tantaran'ny Synodamparitany
          </Text>
          <div>
            Nalaina tao amin'ny Boky mirakitra ny Tantaran'ny SP - Nosoratan'i Ra ......... ny taona ......
          </div>
        </div>
        <div className={classes.body}>
          <Text styles={{ textContainer: classes.titleBody }} variant="h3" color="default">
            Teny fampidirana
          </Text>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure asperiores deserunt blanditiis nostrum illo, unde laborum dolorum nobis cupiditate, culpa doloremque consequatur vel incidunt. Repudiandae unde quasi at voluptatibus?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure asperiores deserunt blanditiis nostrum illo, unde laborum dolorum nobis cupiditate, culpa doloremque consequatur vel incidunt. Repudiandae unde quasi at voluptatibus?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure asperiores deserunt blanditiis nostrum illo, unde laborum dolorum nobis cupiditate, culpa doloremque consequatur vel incidunt. Repudiandae unde quasi at voluptatibus?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure asperiores deserunt blanditiis nostrum illo, unde laborum dolorum nobis cupiditate, culpa doloremque consequatur vel incidunt. Repudiandae unde quasi at voluptatibus?</p>
        </div>
      </div>
    </Page>
  )
}

export default History
