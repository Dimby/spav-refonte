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

export const STATS_PASTOR_AND_DELEGE_HEADER = [
  {text: 'Lah.', width: '10%'},
  {text: 'Anarana', width: '30%'},
  {text: 'Fitandremana', width: '30%'},
  {text: 'Fifandraisana', width: '30%'},
]

export const STATS_GENERAL_HEADER = [
  {text: 'Sokajy', width: '60%'},
  {text: 'Taona 2019', width: '20%'},
  {text: 'Taona 2020', width: '20%'},
]

export const STATS_SEFALA_HEADER = [
  {text: 'Sokajy', widht: '25%'},
  {text: 'Taona 2019', widht: '25%'},
  {text: 'Taona 2020', widht: '25%'},
  {text: 'Fitambarany', widht: '25%'},
]

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

export const PASTORS_DATA = [
  {name: 'Mpitandrina 01', fg: 'Fitandremana 01', contact: 'Fifandraisana 01'},
  {name: 'Mpitandrina 02', fg: 'Fitandremana 01', contact: 'Fifandraisana 01'},
  {name: 'Mpitandrina 03', fg: 'Fitandremana 01', contact: 'Fifandraisana 01'},
  {name: 'Mpitandrina 04', fg: 'Fitandremana 01', contact: 'Fifandraisana 01'},
  {name: 'Mpitandrina 05', fg: 'Fitandremana 01', contact: 'Fifandraisana 01'},
  {name: 'Mpitandrina 06', fg: 'Fitandremana 01', contact: 'Fifandraisana 01'},
]

export const DELEGES_DATA = [
  {name: 'Katekista Delegué 01', fg: 'Fitandremana 01', contact: 'Fifandraisana 01'},
  {name: 'Katekista Delegué 02', fg: 'Fitandremana 01', contact: 'Fifandraisana 01'},
  {name: 'Katekista Delegué 03', fg: 'Fitandremana 01', contact: 'Fifandraisana 01'},
  {name: 'Katekista Delegué 04', fg: 'Fitandremana 01', contact: 'Fifandraisana 01'},
  {name: 'Katekista Delegué 05', fg: 'Fitandremana 01', contact: 'Fifandraisana 01'},
  {name: 'Katekista Delegué 06', fg: 'Fitandremana 01', contact: 'Fifandraisana 01'},
]

export const GENERAL_DATA = [
  {distinct: 'Fitandremana', yearLast: 101, yearNow: 101},
  {distinct: 'Fiangonana', yearLast: 170, yearNow: 169},
  {distinct: 'VOMM (Vondron\'olona miara-mivavaka)', yearLast: 24, yearNow: 24},
  {distinct: 'Mpitandrina', yearLast: 51, yearNow: 51},
  {distinct: 'Katekista Delege', yearLast: 28, yearNow: 28},
  {distinct: 'Kristiana', yearLast: 39200, yearNow: 39200},
  {distinct: 'Diakona sy Loholona', yearLast: 2206, yearNow: 2206},
  {distinct: 'Mpandray', yearLast: 10500, yearNow: 10500},
]

export const SEFALA_DATA = [
  {distinct: 'Katekista', yearLast: 101, yearNow: 101},
  {distinct: 'Mpiandry', yearLast: 170, yearNow: 169},
  {distinct: 'Mpitoriteny', yearLast: 24, yearNow: 24},
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

export const COMMITTEE = [
  {
    name: 'president',
    label: 'Filoha',
    person: { 
      name: 'Rasolonirina Robert', 
      tel: ['034 xx xxx xx', '032 xx xxx xx'], 
      email: 'robertrasolonirina@gmail.com', 
      address: 'Ambohimiangaly, Station FJKM', 
      links: { fb: 'linkFB' },
      status: 'PS'
    },
    image: { url: 'committees/avatar1.jpg', alt: 'Filoha'}
  },
  {
    name: 'treasurer',
    label: 'Mpitam-bola',
    person: { 
      name: 'Ratsimihety Jeanine', 
      tel: ['034 xx xxx xx', '032 xx xxx xx'], 
      email: 'robertrasolonirina@gmail.com', 
      address: 'Ambohimiangaly, Station FJKM', 
      links: { fb: 'linkFB' },
      status: 'PS'
    },
    image: { url: 'committees/avatar2.jpg', alt: 'Mpitam-bola'}
  },
  {
    name: 'secretary',
    label: 'Mpitan-tsoratry ny vola',
    person: { 
      name: 'Rakotondrasata Marc', 
      tel: ['034 xx xxx xx', '032 xx xxx xx'], 
      email: 'robertrasolonirina@gmail.com', 
      address: 'Ambohimiangaly, Station FJKM', 
      links: { fb: 'linkFB' },
      status: 'PS'
    },
    image: { url: 'committees/avatar3.jpg', alt: 'Mpitan-tsoratry ny vola'}
  },
  {
    name: 'advisor',
    label: 'Mpanolotsaina',
    person: { 
      name: 'Bakonirina Victoire', 
      tel: ['034 xx xxx xx', '032 xx xxx xx'], 
      email: 'robertrasolonirina@gmail.com', 
      address: 'Ambohimiangaly, Station FJKM', 
      links: { fb: 'linkFB' },
      status: 'PS'
    },
    image: { url: 'committees/avatar4.jpg', alt: 'Mpanolotsaina'}
  },
]

export const PS_ONE_AFTER_OTHER = [
  {
    person: {
      name: 'Rabenantoandro Josefa',
      age: 86,
      description: 'Mpitandrina nanorina ny fiangonana xxx tao, tamin\'ny taona 1993',
    },
    image: { url: 'ps/avatar4.jpg', alt: 'Ps 1'},
    date: { debut: '1992', fin: '1995' },
  },
  {
    person: {
      name: 'Rakotondrabe Justin',
      age: 80,
      description: 'Mpitandrina nanorina ny fiangonana xxx tao, tamin\'ny taona 1993',
    },
    image: { url: 'ps/avatar3.jpg', alt: 'Ps 2'},
    date: { debut: '1995', fin: '2001' },
  },
  {
    person: {
      name: 'Razanadrasolo Charles',
      age: 89,
      description: 'Mpitandrina nanorina ny fiangonana xxx tao, tamin\'ny taona 1993',
    },
    image: { url: 'ps/avatar6.jpg', alt: 'Ps 3'},
    date: { debut: '2001', fin: '2005' },
  },
  {
    person: {
      name: 'Rasolonirina Robert',
      age: 50,
      description: 'Mpitandrina nanorina ny fiangonana xxx tao, tamin\'ny taona 1993',
    },
    image: { url: 'ps/avatar1.jpg', alt: 'Ps 4'},
    date: { debut: '2005', fin: 'Ankehitriny' },
  },
]

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

export const STATS_MENU = [
  {name: 'pastors', label: 'Mpitandrina'},
  {name: 'delegate', label: 'Katekista Delege'},
  {name: 'general', label: 'Ankapobeny'},
  {name: 'sefala', label: 'Fiainan\'ny Sefala'},
]

