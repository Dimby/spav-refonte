import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { DELEGES_DATA, GENERAL_DATA, PASTORS_DATA, SEFALA_DATA, STATS_GENERAL_HEADER, STATS_MENU, STATS_PASTOR_AND_DELEGE_HEADER, STATS_SEFALA_HEADER } from '../../misc/utils';
import Table from '../../components/Table';

const useStyles = createUseStyles(theme => ({
  container: {
    margin: 'auto',
    width: '80%',
  },
  titleContainer: {},
  title: {
    color: '#F4C247',
    lineHeight: '45px',
    marginBottom: 15,
  },
  tableContainer: {},
  tableMenu: {
    display: 'flex',
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    marginTop: 20,
    color: '#2E85BE',
    margin: '10px 0',
  },
  menuItem: {
    padding: '5px 10px',
    borderRadius: 5,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 6px -3px rgba(0, 0, 0, 0.5)',
    },
    transition: 'background-color 0.3s ease-in-out',
    backgroundColor: 'transparent',
    '&.active': {
      backgroundColor: '#FFFFFF',
    },
  },
  tableContent: {
    height: 450,
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  table: {
    marginTop: 20,
    '& input': {
      width: 188
    }
  }
}));

const Stats = ({ activeItem, refs, setActiveItem }) => {
  const classes = useStyles();
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const year = new Date().getFullYear();

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  const TableMenu = ({ menu, index }) => {
    const needYear = menu?.name === 'pastors' || menu?.name === 'delegate';
    return <div
    className={`${classes.menuItem} ${activeMenuItem === index ? 'active' : ''}`}
    onClick={() => handleMenuItemClick(index)}
  >
    {menu?.label} {needYear && year}
  </div>
  }

  let content, headerData, rowsData;
  switch (activeMenuItem) {
    case 0:
      headerData = STATS_PASTOR_AND_DELEGE_HEADER;
      rowsData = PASTORS_DATA.map((pastor, key) => {
        return {lah: key, ...pastor};
      });
      content = <Table title="Lisitry ny mpitandrina rehetra" headerData={headerData} rowsData={rowsData} filterBy={['name']} styles={{ tableContainer: classes.table }} />
      break;
    case 1:
      headerData = STATS_PASTOR_AND_DELEGE_HEADER;
      rowsData = DELEGES_DATA.map((delege, key) => {
        return {lah: key, ...delege};
      });
      content = <Table title="Lisitry ny KD rehetra" headerData={headerData} rowsData={rowsData} filterBy={['name']} styles={{ tableContainer: classes.table }} />
      break;
    case 2:
      headerData = STATS_GENERAL_HEADER;
      content = <Table title="Ankapobeny" headerData={headerData} rowsData={GENERAL_DATA} filterBy={['distinct']} styles={{ tableContainer: classes.table }} />
      break;
    case 3:
      headerData = STATS_SEFALA_HEADER;
      rowsData = SEFALA_DATA.map(sefala => {return {...sefala, total: sefala.yearLast + sefala.yearNow}});
      content = <Table title="Sefala" headerData={headerData} rowsData={rowsData} filterBy={['distinct']} styles={{ tableContainer: classes.table }} />
      break;
    default:
      content = '';
      break;
  }

  return (
    <Page activeItem={activeItem} refs={refs} setActiveItem={setActiveItem}>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <Text styles={{ textContainer: classes.title }} variant="h2" color="default">
            Antontan'isa voaray
          </Text>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum amet aperiam neque mollitia tempore,
            nihil, sequi cupiditate laborum sed quaerat aliquam possimus cumque obcaecati pariatur quam a debitis
            voluptate.
          </div>
        </div>
        <div className={classes.tableContainer}>
          <div className={classes.tableMenu}>
            {STATS_MENU.map((menu, key) => <TableMenu menu={menu} index={key} key={key} />)}
          </div>
          <div className={classes.tableContent}>
            {content}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Stats;
