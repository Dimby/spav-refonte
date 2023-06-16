import { IconChevronDown } from '@tabler/icons-react';
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles(theme => ({
  container: {
    cursor: 'pointer',
    position: 'relative'
  },
  filtreLabel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    padding: '8px 10px',
    '& svg': {
      width: 20
    }
  },
  filtreList: {
    position: 'absolute',
    padding: '20px 15px',
    backgroundColor: '#FFFFFF',
    zIndex: 99,
    border: '0.5px solid #E1E1E1',
    display: 'flex',
    flexDirection: 'column',
    gap: 15
  },
  formControl: {
    display: 'flex',
    gap: 10,
  },
  label: {
    cursor: 'pointer'
  }
}))

const Filtre = ({ areas, setArea, handleFiltreItem }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.filtreLabel} onClick={() => setOpen(!open)}>
        Filtre <IconChevronDown/>
      </div>
      {open && <div className={classes.filtreList}>
        {areas.map((area, key) => <div className={classes.formControl}>
          <input type="checkbox" name={area?.name} checked={area.checked} id={area?.name} onChange={() => handleFiltreItem(area)} />
          <label className={classes.label} htmlFor={area?.name}>{area?.label}</label>
        </div>)}
      </div>}
    </div>
  )
}

export default Filtre
