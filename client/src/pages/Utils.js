import React from 'react'
import { createUseStyles } from 'react-jss';
import BackButton from '../components/BackButton';
import Table from '../components/Table';
import { FILES_HEADER, FILES_ROWS } from '../misc/utils';
import { IconCloudDownload, IconFileZip } from '@tabler/icons-react';
import IconText from '../components/IconText';
import Citation from '../components/Citation';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const useStyles = createUseStyles(theme => ({
  container: {
    padding: '50px 0'
  },
  fluidContainer: {
    maxWidth: 928,
    margin: '0 auto',
    padding: '0px 20px',
    height: 'calc(100vh - 100px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  downloadButton: {
    color: theme.color.primary['DEFAULT']
  },
  table: {
    marginTop: 20
  },
  infos: {
    display: 'flex',
    justifyContent: 'center',
    gap: 50,
    paddingTop: 20,
    borderTop: '0.5px solid #DFD6D6'
  },
  citationContainer: {
    color: theme.color.secondary['DEFAULT'],
  },
  infoLeft: {
    color: theme.color.secondary['DEFAULT'],
    textAlign: 'right'
  },
  infoRight: {
    color: theme.color.secondary['DEFAULT'],
  }
}))

const Utils = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const rowsData = FILES_ROWS.map((item, key) => {
    const name = <IconText icon={<IconFileZip/>} text={item?.name} />;
    const description = item?.description || '';
    const addedAt = item?.addedAt || '--/--/----';
    const taille = item?.taille || '- Ko';
    const download = <IconText icon={<IconCloudDownload/>} styles={{ iconTextContainer: classes.downloadButton }} text='Cliquer ici' />;
    return {id: item?.id, name, description, addedAt, taille, download};
  });

  return (
    <div className={classes.container}>
      <div className={classes.fluidContainer}>
        <div>
          <BackButton text='Pejy fandraisana'/>
          <Table title="Liste des fichiers" headerData={FILES_HEADER} rowsData={rowsData} filterBy={['description']} styles={{ tableContainer: classes.table }} />
        </div>
        <div className={classes.infos}>
          <div className={classes.infoLeft}>
            <div>Synodamparitany Ambatondrazaka Vaovao :</div>
            <Citation styles={{ citationContainer: classes.citationContainer }} author='Titosy 2 : 7'>Fianarana amin'ny asa tsara.</Citation>
          </div>
          <div className={classes.infoRight}>
            <div style={{ marginBottom: 10 }}>Te hifandray aminay ? Mandefasa hafatra</div>
            <Button variant='primaryOutline' onClick={() => navigate('/contact')}>Handefa hafatra</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Utils
