import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss';
import BackButton from '../components/BackButton';
import Input from '../components/Input';
import Filtre from '../components/Filtre';
import Image from '../components/Image';
import { GALLERIES } from '../misc/gallery';
import { useDebounce } from 'react-use';
import { AREAS } from '../misc/utils';

const useStyles = createUseStyles(theme => ({
  container: {
    padding: 30
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
    marginBottom: 15,
    borderBottom: '0.5px solid #DFD6D6'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: '#0D507D',
    marginTop: 15
  },
  inputSearch: {
    width: 300
  },
  input: {
    width: '256px !important'
  },
  filterContent: {
    display: 'flex',
    alignItems: 'center',
    gap: 10
  },
  albumContent: {
    height: 'calc(100vh - 156px)',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    alignContent: 'baseline',
    overflow: 'auto',
    gap: 10
  },
}))

const Gallery = () => {
  const classes = useStyles();
  const [galleries, setGalleries] = useState(GALLERIES);
  const [value, setValue] = useState('');
  const [areas, setAreas] = useState([]);

  useDebounce(() => {
    if(value !== '') {
      const rowsFiltered = GALLERIES.map(row => {
        return {
          ...row,
          images: row.images.filter(image => (image.description).toLowerCase().includes(value.toLowerCase()))
        }
      });
      setGalleries(rowsFiltered);
    } else {
      setAreas(areas.map(area => {
        return {
          ...area,
          checked: true
        }
      }));
      setGalleries(GALLERIES)
    };
  }, 500, [value]);

  useEffect(() => {
    if(AREAS) {
      const areasTemp = AREAS.map(item => {
        return {
          ...item,
          checked: true
        }
      })
      setAreas(areasTemp);
    }
  }, []);

  const _handleFiltreItem = (area) => {
    const updatedAreas = areas.map(item => {
      if (item === area) {
        // setGalleries(galleries.filter(gallery => gallery.name !== area.name))
        return {
          ...item,
          checked: !area?.checked
        };
      }
      return item;
    });
    const galleriesTemp = GALLERIES.filter(gallery => {
      const areaGallery = updatedAreas.find(area => area.name === gallery.name);
      return areaGallery.checked;
    })
    setGalleries(galleriesTemp);
    setAreas(updatedAreas);
  };

  return (
    <div className={classes.container}>
      <BackButton text='Hiverina'/>
      <div className={classes.titleContainer}>
        <div className={classes.title}>Rakitsary sy horonantsarin'ny Synodamparitany</div>
        <div className={classes.filterContent}>
          <div>
            <Filtre areas={areas} setAreas={setAreas} handleFiltreItem={_handleFiltreItem} />
          </div>
          <Input styles={{inputContainer: classes.inputSearch, inputBase: classes.input}} onChange={(e) => setValue(e.target.value)} />
        </div>
      </div>
      <div className={classes.albumContent}>
        {galleries.map(item => 
          item?.images && item?.images?.map((image, key) => <Image key={key} imageUrl={image.name} alt={image.description} description={image.description} name={item.name} styles={{ imageContainer: classes.imageContainer }} />)
        )}
      </div>
    </div>
  )
}

export default Gallery
