import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import Text from '../../components/Text';
import Page from '../../components/Page';
import { COMMITTEE } from '../../misc/utils';
import Avatar from '../../components/Avatar';
import Preview from '../../components/Preview';

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: 50
  },
  title: {
    color: '#F4C247'
  },
  left: {
    maxWidth: 414
  },
  right: {
    maxWidth: 400,
  },
  committeeContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 40,
    width: 386,
    marginTop: 35
  },
}))

const Committee = ({activeItem, refs, setActiveItem}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(COMMITTEE[0]);

  return (
    <Page activeItem={activeItem} refs={refs} setActiveItem={setActiveItem}>
      <div className={classes.container}>
        <div className={classes.left}>
          <Text styles={{ textContainer: classes.title }} variant='h2' color='default'>Ireo birao</Text>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum amet aperiam neque mollitia tempore, nihil, sequi cupiditate laborum sed quaerat aliquam possimus cumque obcaecati pariatur quam a debitis voluptate.</div>
          <div className={classes.committeeContainer}>
            {COMMITTEE.map((committee, key) => <Avatar key={key} data={committee} isActive={selected === committee} setSelected={setSelected} />)}
          </div>
        </div>
        <div className={classes.right}>
          <Preview data={selected} />
        </div>
      </div>
    </Page>
  )
}

export default Committee
