import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss';
import { useDebounce } from 'react-use';
import Input from './Input';
import classNames from 'classnames';

const useStyles = createUseStyles(theme => ({
  container: {
    
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: '#0D507D'
  },
  table: {
    borderSpacing: 'inherit',
    borderCollapse: 'collapse',
    width: '100%',
    height: '100%',
    '& tbody tr': {
      backgroundColor: '#FFFFFF'
    },
    '& thead': {
      backgroundColor: 'rgba(243, 243, 243, .64)'
    },
    '& thead>tr, td': {
      height: 45
    },
    '& tr': {
      border: '0.5px solid #DFD6D6',
    },
    '& th, td': {
      padding: '0 15px'
    },
    '& th': {
      fontSize: 13,
      textAlign: 'left'
    },
    '& td': {
      fontSize: 15
    }
  },
  inputSearch: {
    width: 200
  }
}))

const Table = ({ title, headerData = [], rowsData = [], withSearch = false, filterBy = [], styles = {}, ...res }) => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if(rowsData) {
      setRows(rowsData);
    }
  }, [rowsData]);

  useDebounce(() => {
    if(value !== '') {
      const rowsFiltered = rowsData.filter(row => {
        return filterBy.some(field => row.hasOwnProperty(field) && row[field].toLowerCase().includes(value.toLowerCase()));
      });
      setRows(rowsFiltered);
    } else setRows(rowsData);
  }, 500, [value]);

  const allRows = rows.map((item, keyTr) => {
    const values = Object.entries(item).map(item => item[1]);
    return <tr key={keyTr}>
      {values.map((value, key) => <td key={key}>{value}</td>)}
    </tr>
  })

  return (
    <div className={classNames(classes.container, styles?.tableContainer)}>
      <div className={classes.titleContainer}>
        <div className={classNames(classes.title, styles?.title)}>{title}</div>
        <Input styles={{inputContainer: classes.inputSearch}} onChange={(e) => setValue(e.target.value)} />
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            {headerData.map((item, key) => <th key={key} width={item.width}>{item?.text}</th>)}
          </tr>
        </thead>
        <tbody>
          {allRows}
        </tbody>
      </table>
    </div>
  )
}

export default Table
