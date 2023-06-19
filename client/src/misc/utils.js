import { IconCloudDownload, IconFileZip } from "@tabler/icons-react";

export const MENUS = [
  {name: 'Fandraisana', to: '', x: -50},
  {name: 'Mombamomba', to: 'aboutUs', x: -100},
  {name: 'Faritra', to: 'areas', x: -20},
  {name: 'Sary', to: 'gallery', x: -100},
  {name: 'Fifandraisana', to: '/', x: -30},
]

export const FILES_HEADER = [
  {text: 'Nom', width: '27%'},
  {text: 'Description', width: '27%'},
  {text: 'Ajouter le', width: '15%'},
  {text: 'Taille', width: '15%'},
  {text: 'Télécharger', width: '15%'}
];

export const AREAS = [
  {name: 'faritra01', label: 'Ambatondrazaka'},
  {name: 'faritra02', label: 'Andilamena'},
  {name: 'faritra03', label: 'Andilanatoby'},
  {name: 'faritra04', label: 'Andreba'},
  {name: 'faritra05', label: 'Didy'},
  {name: 'faritra06', label: 'Imerimandroso'},
]

export const getAreaByName = (name) => {
  return AREAS.find(area => area.name === name);
}

export const FILES_ROWS = [
  {name: 'Tetikandro2021.docx', description: "Tetikandron'ny PS - taona 2021", addedAt: '09/07/2021', taille: '351 Ko', download: <><IconCloudDownload/> Cliquer ici</>},
  {name: 'Tetikandro2021.docx', description: "Tetikandron'ny PS - taona 2022", addedAt: '09/07/2021', taille: '351 Ko', download: <><IconCloudDownload/> Cliquer ici</>},
  {name: 'Tetikandro2021.docx', description: "Fitsipi-pifehezana anatin'ny SP", addedAt: '09/07/2021', taille: '351 Ko', download: <><IconCloudDownload/> Cliquer ici</>},
  {name: 'Tetikandro2021.docx', description: "Vina sy Fanambin'ny SP", addedAt: '09/07/2021', taille: '351 Ko', download: <><IconCloudDownload/> Cliquer ici</>},
  {name: 'Tetikandro2021.docx', description: "Hira fanevan'ny SP", addedAt: '09/07/2021', taille: '351 Ko', download: <><IconCloudDownload/> Cliquer ici</>},
  {name: 'Tetikandro2021.docx', description: "Logo SPAV05 - jobily 25e", addedAt: '09/07/2021', taille: '351 Ko', download: <><IconCloudDownload/> Cliquer ici</>},
  {name: 'Tetikandro2021.docx', description: "Circulaire ho an'ny FItandremana", addedAt: '09/07/2021', taille: '351 Ko', download: <><IconCloudDownload/> Cliquer ici</>},
]

export const LEFT_CONTENTS = [
  {
    name: 'Mombamomba', 
    to: 'aboutUs', 
    pages: [
      {name: 'committee', label: 'Ireo birao', isActive: true}, 
      {name: 'ps', label: 'PS nifandimby', isActive: false}, 
      {name: 'stats', label: 'Antontan\'isa', isActive: false}, 
      {name: 'history', label: 'Tantaran\'ny SP', isActive: false}
    ], 
    cta: {text: 'Te hifandray ?', to: '/contact'}
  },
  {
    name: 'Faritra', 
    to: 'areas', 
    pages: [
      {name: 'faritra01', label: 'Ambatondrazaka', isActive: true}, 
      {name: 'faritra02', label: 'Andilamena', isActive: false}, 
      {name: 'faritra03', label: 'Andilanatoby', isActive: false}, 
      {name: 'faritra04', label: 'Andreba', isActive: false},
      {name: 'faritra05', label: 'Didy', isActive: false},
      {name: 'faritra06', label: 'Imerimandroso', isActive: false},
    ], 
    cta: {text: 'Te hifandray ?', to: '/contact'}
  },
  {
    name: 'Te hifandray aminay', 
    to: 'contact', 
    infos: 'Miantsoa na mandefasa hafatra amin\'ny laharana 032 xx xxx xx na fenoy ny fafana etsy ankavanana.', 
    cta: {text: 'Mety ilainao', to: '/utils', withIcon: <IconFileZip/>}
  },
]

export const VERSET = [
  {text: 'Mifalia mandrakariva amin\'ny Tompo, hoy izaho indray : Mifalia', author: 'Fil. 04: 04'},
  {text: "Je t’ai commandé d’être fort et courageux. Ne tremble pas, n’aie pas peur, car moi, le SEIGNEUR ton Dieu, je serai avec toi partout où tu iras.", author: 'Josué 01: 09'},
  {text: "C’est avec le Christ que vous avez été réveillés de la mort. Cherchez donc les choses d’en haut, là où le Christ se trouve, assis à la droite de Dieu.", author: 'Colossiens 03: 01'},
]

export const getRandomVerset = () => {
  const randomIndex = Math.floor(Math.random() * VERSET.length);
  return VERSET[randomIndex] || {};
}

export const displayDescriptionDate = ({ debut, fin }) => {
  if(debut === '' && fin !== '') {
    return `President Synodal niasa hatramin'ny ${fin}`;
  }
  if(debut !== '' && fin === 'Ankehitriny') {
    return `President Synodal niasa nanomboka tamin'ny ${debut} ka mandraka ankehitriny`
  }
  if(debut !== '' && fin !== '') {
    return `President Synodal niasa nanomboka tamin'ny ${debut} ka hatramin'ny ${fin}`
  }
}

export const formattedNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export const getPurcentage = (size, purcent) => {
  const number = (size/purcent)*100 + 's';
  return parseInt(number.replace(',', ''), 10);
}

export const padWithLeadingZeros = number => {
  return String(number).padStart(2, '0');
}

// DATES
export const DAY_MALAGASY = [
  {full: 'ALAHADY', minimize: 'ALH.'},
  {full: 'ALATSINAINY', minimize: 'ALT.'},
  {full: 'TALATA', minimize: 'TAL.'},
  {full: 'ALAROBIA', minimize: 'ALB.'},
  {full: 'ALAKAMISY', minimize: 'ALK.'},
  {full: 'ZOMA', minimize: 'ZOM.'},
  {full: 'SABOTSY', minimize: 'SAB.'},
];

export const MONTHS_MALAGASY = [
  { full: 'Janoary', minimize: 'Jan.' },
  { full: 'Febroary', minimize: 'Feb.' },
  { full: 'Martsa', minimize: 'Mar.' },
  { full: 'Aprily', minimize: 'Apr.' },
  { full: 'May', minimize: 'May' },
  { full: 'Jona', minimize: 'Jon.' },
  { full: 'Jolay', minimize: 'Jol.' },
  { full: 'Aogositra', minimize: 'Aog.' },
  { full: 'Septambra', minimize: 'Sept.' },
  { full: 'Oktobra', minimize: 'Oct.' },
  { full: 'Novambra', minimize: 'Nov.' },
  { full: 'Desambra', minimize: 'Des.' },
];

export const getDayToString  = (date, minimize = false) => {
  const d = new Date(date);
  if(minimize) {
    return DAY_MALAGASY[d.getDay()].minimize
  }
  return DAY_MALAGASY[d.getDay()].full;
}

export const getFullDayToString = (date, formatted = false) => {
  
  const dateParts = date.split(" ")[0].split("-");
  const day = dateParts[2];
  const monthIndex = parseInt(dateParts[1]) - 1;
  const year = dateParts[0];

  let formattedDate = `${day} ${MONTHS_MALAGASY[monthIndex].full} ${year}`;
  if(formatted) {
    formattedDate = `${day} ${MONTHS_MALAGASY[monthIndex].minimize} ${year}`;
  }
  return formattedDate
}

// FIN