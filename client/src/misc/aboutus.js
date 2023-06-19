// Committee
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
// Fin

// PS
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
// Fin

export const STATS_MENU = [
  {name: 'pastors', label: 'Mpitandrina'},
  {name: 'delegate', label: 'Katekista Delege'},
  {name: 'general', label: 'Ankapobeny'},
  {name: 'sefala', label: 'Fiainan\'ny Sefala'},
]

// Chiffres
export const STATS_PASTOR_AND_DELEGE_HEADER = [
  {text: 'Lah.', width: '10%'},
  {text: 'Anarana', width: '30%'},
  {text: 'Fitandremana', width: '30%'},
  {text: 'Fifandraisana', width: '30%'},
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

// ------------------
export const STATS_GENERAL_HEADER = [
  {text: 'Sokajy', width: '60%'},
  {text: 'Taona 2019', width: '20%'},
  {text: 'Taona 2020', width: '20%'},
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

// ------------------
export const STATS_SEFALA_HEADER = [
  {text: 'Sokajy', widht: '25%'},
  {text: 'Taona 2019', widht: '25%'},
  {text: 'Taona 2020', widht: '25%'},
  {text: 'Fitambarany', widht: '25%'},
]
export const SEFALA_DATA = [
  {distinct: 'Katekista', yearLast: 101, yearNow: 101},
  {distinct: 'Mpiandry', yearLast: 170, yearNow: 169},
  {distinct: 'Mpitoriteny', yearLast: 24, yearNow: 24},
]
// Fin