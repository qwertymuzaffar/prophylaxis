import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  typeEducational: string;
  title: string;
  address: string;
  leader: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {typeEducational: 'ДОУ', title: 'МБДОУ "Детский сад № 8"', address: '618320 Пермский край, г.Александровск, ул. Советская, 95', leader: 'Заморина Светлана Юрьевна'},
  {typeEducational: 'ДОУ', title: 'МБДОУ "Детский сад № 8"', address: '618320 Пермский край, г.Александровск, ул. Советская, 95', leader: 'Заморина Светлана Юрьевна'},
  {typeEducational: 'ДОУ', title: 'МБДОУ "Детский сад № 8"', address: '618320 Пермский край, г.Александровск, ул. Советская, 95', leader: 'Заморина Светлана Юрьевна'},
  {typeEducational: 'ДОУ', title: 'МБДОУ "Детский сад № 8"', address: '618320 Пермский край, г.Александровск, ул. Советская, 95', leader: 'Заморина Светлана Юрьевна'},
  {typeEducational: 'ДОУ', title: 'МБДОУ "Детский сад № 8"', address: '618320 Пермский край, г.Александровск, ул. Советская, 95', leader: 'Заморина Светлана Юрьевна'},
  {typeEducational: 'ДОУ', title: 'МБДОУ "Детский сад № 8"', address: '618320 Пермский край, г.Александровск, ул. Советская, 95', leader: 'Заморина Светлана Юрьевна'},
  {typeEducational: 'ДОУ', title: 'МБДОУ "Детский сад № 8"', address: '618320 Пермский край, г.Александровск, ул. Советская, 95', leader: 'Заморина Светлана Юрьевна'},
];

@Component({
  selector: 'app-directory-institution',
  templateUrl: './directory-institution.component.html',
  styleUrls: ['./directory-institution.component.scss']
})
export class DirectoryInstitutionComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['typeEducational', 'title', 'address', 'leader'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
