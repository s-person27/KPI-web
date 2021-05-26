'use strict';

const profiles = [
  {
    email: '1@gmail.com',
    name: 'Andriy',
    password: 'zvfrfc',
    gender: 'Male',
    birthday: '11-11-2001',
  },
  {
    email: '2@gmail.com',
    name: 'Sanya',
    password: 'zvfrfc',
    gender: 'Male',
    birthday: '11-11-2001',
  },
];

if (!localStorage.getItem('allUsers')) {
  localStorage.setItem('allUsers', JSON.stringify(profiles));
}

if (!localStorage.getItem('currentUserIndex')) {
  localStorage.setItem('currentUserIndex', -1);
}
