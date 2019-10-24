import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
}

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})

export class RegistryComponent implements OnInit {

  displayedColumns = ['position', 'name'];
  dataSource: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen'},
    {position: 2, name: 'Helium'},
    {position: 3, name: 'Lithium'},
    {position: 4, name: 'Beryllium'},
    {position: 5, name: 'Boron'},
    {position: 6, name: 'Carbon'},
    {position: 7, name: 'Nitrogen'},
    {position: 8, name: 'Oxygen'},
    {position: 9, name: 'Fluorine'},
    {position: 10, name: 'Neon'},
  ];

  educationalInstitutionsColumns = ['desc', 'school', 'date'];
  educationalInstitutions = [
    {desc: 'ДОУ', school: 'Детский сад “Ромашка”', date: '01.09.2009'},
    {desc: 'Школа', school: 'ГБОУ №14', date: '01.09.2011'},
    {desc: 'Школа', school: 'ГБОУ №23', date: '01.09.2014'},
    {desc: 'Школа', school: 'ГБОУ №23', date: '01.09.2014'}
  ];

  familyColumns = ['family', 'fullName', 'work'];
  family = [
    {family: 'Мать', fullName: 'Сидорова Анна Сергеевна', work: 'Не работает'},
    {family: 'Отец', fullName: 'Сидоров Владимир Владимирович', work: 'Водитель автобуса'},
    {family: 'Брат', fullName: 'Сидоров Сергей Владимирович', work: '2Б класс ГБОУ №23'},
    {family: 'Сестра', fullName: 'Сидорова Ольга Владимирвна', work: ''}
  ];

  socialSupportColumns = ['desc'];
  socialSupport = [
    {desc: 'Пособие малоимущим семьям'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
