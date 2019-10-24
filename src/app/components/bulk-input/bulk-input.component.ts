import {Component, OnDestroy, OnInit} from '@angular/core';
import {PopupComponent} from '../popup/popup.component';
import {MatDialog} from '@angular/material';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export interface PeriodicElement {
  fullName: {
    name: string;
    id?: string;
  };
  column1: ColumnModel;
  column2: ColumnModel;
  column3: ColumnModel;
  column4: ColumnModel;
  column5: ColumnModel;
  column6: ColumnModel;
  column7: ColumnModel;
  column8: ColumnModel;
  column9: ColumnModel;
  column10: ColumnModel;
}

export interface ColumnModel {
  comment?: string;
  id?: string;
}

@Component({
  selector: 'app-bulk-input',
  templateUrl: './bulk-input.component.html',
  styleUrls: ['./bulk-input.component.scss']
})
export class BulkInputComponent implements OnInit, OnDestroy {

  editEnable = false;
  cellId;

  displayedColumns: string[] = [
    'fullName', 'column1', 'column2', 'column3', 'column4',
    'column5', 'column6', 'column7', 'column8', 'column9', 'column10'
  ];

  dataSource;
  tableData: PeriodicElement[] = [
    {fullName: {name: 'Блинов Тимур Всеволодович'}, column1: {comment: 'dawdw'}, column2: {comment: ''}, column3: {comment: ''}, column4: {comment: ''}, column5: {comment: ''}, column6: {comment: ''}, column7: {comment: ''}, column8: {comment: ''}, column9: {comment: ''}, column10: {comment: 'awdadawdawd'}},
    {fullName: {name: 'Блинов Тимур Всеволодович'}, column1: {comment: 'adwa'}, column2: {comment: ''}, column3: {comment: ''}, column4: {comment: ''}, column5: {comment: ''}, column6: {comment: ''}, column7: {comment: ''}, column8: {comment: ''}, column9: {comment: 'adadawdaw'}, column10: {comment: ''}},
    {fullName: {name: 'Блинов Тимур Всеволодович'}, column1: {comment: ''}, column2: {comment: ''}, column3: {comment: ''}, column4: {comment: ''}, column5: {comment: ''}, column6: {comment: ''}, column7: {comment: ''}, column8: {comment: ''}, column9: {comment: ''}, column10: {comment: ''}},
    {fullName: {name: 'Блинов Тимур Всеволодович'}, column1: {comment: ''}, column2: {comment: 'lorem ipsum dolor'}, column3: {comment: ''}, column4: {comment: ''}, column5: {comment: ''}, column6: {comment: ''}, column7: {comment: ''}, column8: {comment: ''}, column9: {comment: ''}, column10: {comment: ''}},
    {fullName: {name: 'Блинов Тимур Всеволодович'}, column1: {comment: ''}, column2: {comment: ''}, column3: {comment: ''}, column4: {comment: ''}, column5: {comment: ''}, column6: {comment: ''}, column7: {comment: ''}, column8: {comment: ''}, column9: {comment: 'awdawdawd'}, column10: {comment: ''}},
    {fullName: {name: 'Блинов Тимур Всеволодович'}, column1: {comment: 'awdawdadaddddd'}, column2: {comment: ''}, column3: {comment: ''}, column4: {comment: ''}, column5: {comment: ''}, column6: {comment: ''}, column7: {comment: ''}, column8: {comment: ''}, column9: {comment: ''}, column10: {comment: 'awdawdawdda'}},
  ];

  private $destroy = new Subject();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.tableData.forEach(item => {
      for (const prop in item) {
        item[prop]['id'] = this.randomId();
      }
    });
    this.dataSource = this.tableData;
  }

  editMode(mode: boolean) {
    if (mode) {
      this.displayedColumns.unshift('select');
    } else {
      this.displayedColumns.shift();
    }
    this.editEnable = mode;
  }

  onCellClick(event) {
    if (event.target.checked) {
      this.cellId = event.target.parentElement.id;
    } else {
      this.cellId = null;
    }
  }

  randomId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {width: '400px'});

    dialogRef.afterClosed()
      .pipe(takeUntil(this.$destroy))
      .subscribe(result => {
      this.addComment(result);
    });
  }

  addComment(comment) {
    this.tableData.forEach(item => {
      for (const prop in item) {
        if (item[prop]['id'] === this.cellId) {
          item[prop]['comment'] = comment;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }

}
