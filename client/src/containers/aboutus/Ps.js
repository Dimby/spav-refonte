import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import Page from '../../components/Page';
import Text from '../../components/Text';
import PsCursus from '../../components/PsCursus';
import Preview from '../../components/Preview';
import { PS_ONE_AFTER_OTHER } from '../../misc/aboutus';

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50
  },
  left: {
    maxWidth: 500
  },
  right: {
    maxWidth: 400,
  },
  title: {
    color: theme.color.primary['DEFAULT'],
    lineHeight: '45px',
    marginBottom: 15
  },
  psContainer: {
    marginTop: 35
  }
}))

const Ps = ({activeItem, refs, setActiveItem}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(PS_ONE_AFTER_OTHER[PS_ONE_AFTER_OTHER.length - 1]);
  
  return (
    <Page activeItem={activeItem} refs={refs} setActiveItem={setActiveItem}>
      <div className={classes.container}>
        <div className={classes.left}>
          <Text styles={{ textContainer: classes.title }} variant='h2' color='default'>Ireo Président Synodal nifandimby</Text>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum amet aperiam neque mollitia tempore, nihil, sequi cupiditate laborum sed quaerat aliquam possimus cumque obcaecati pariatur quam a debitis voluptate.</div>
          <div className={classes.psContainer}>
            {PS_ONE_AFTER_OTHER.map((ps, key) => <PsCursus ps={ps} key={key} index={key} isActive={selected === ps} setSelected={setSelected} />)}
          </div>
        </div>
        <div className={classes.right}>
        <Preview data={selected} disableName={true} descriptionTitle={`${selected.person.name} - Mpitandrina`} />
        </div>
      </div>
    </Page>
  )
}

export default Ps
