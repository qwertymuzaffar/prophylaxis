import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    {
      path: '/',
      label: 'Главная',
      icon: 'home'
    },
    {
      path: '/registry',
      label: 'Реестр',
      icon: 'reestr'
    },
    {
      path: '/bulk-input',
      label: 'Массовый ввод',
      icon: 'mass'
    },
    {
      path: '/directory',
      label: 'Справочник',
      icon: 'sprav'
    },
    {
      path: '',
      label: 'Отчеты',
      icon: 'otchet'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
