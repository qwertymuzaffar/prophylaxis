import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  fullName: string;
  dateOfBirth: string;
  placeOfStudy: string;
  riskGroup: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fullName: 'Абдуев Зариф Шукридинович', dateOfBirth: '08.01.2005', placeOfStudy: 'Школа 32', riskGroup: 'Высокая'},
  {fullName: 'Братилов Захар Максимович', dateOfBirth: '11.02.2004', placeOfStudy: 'Школа 32', riskGroup: 'Высокая'},
  {fullName: 'Абдуев Зариф Шукридинович', dateOfBirth: '08.01.2005', placeOfStudy: 'Школа 32', riskGroup: 'Высокая'},
  {fullName: 'Братилов Захар Максимович', dateOfBirth: '11.02.2004', placeOfStudy: 'Школа 32', riskGroup: 'Высокая'},
  {fullName: 'Абдуев Зариф Шукридинович', dateOfBirth: '08.01.2005', placeOfStudy: 'Школа 32', riskGroup: 'Высокая'},
  {fullName: 'Братилов Захар Максимович', dateOfBirth: '11.02.2004', placeOfStudy: 'Школа 32', riskGroup: 'Высокая'},
  {fullName: 'Абдуев Зариф Шукридинович', dateOfBirth: '08.01.2005', placeOfStudy: 'Школа 32', riskGroup: 'Высокая'},
  {fullName: 'Братилов Захар Максимович', dateOfBirth: '11.02.2004', placeOfStudy: 'Школа 32', riskGroup: 'Высокая'},
];

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['fullName', 'dateOfBirth', 'placeOfStudy', 'riskGroup'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
