import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  indicator: string;
  short: string;
  comment: string;
  points: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    indicator: '1.1. Нарушение в эмоцинально-волевой сфере (тревожность депрессивность), агрессивность, замкнутость, низкая самооценка) в комплексе 3 и более показателей выше нормы (в том числе по причинам семейных, межличностных, учебных и др. проблем)',
    short: 'Депрессия',
    comment: 'Низкая самооценка',
    points: 10
  },
  {
    indicator: '1.1. Нарушение в эмоцинально-волевой сфере (тревожность депрессивность), агрессивность, замкнутость, низкая самооценка) в комплексе 3 и более показателей выше нормы (в том числе по причинам семейных, межличностных, учебных и др. проблем)',
    short: 'Смена ОУ',
    comment: 'Поступил в школу 10 октября, не общается с одноклассниками',
    points: 10
  },
  {
    indicator: '1.1. Нарушение в эмоцинально-волевой сфере (тревожность депрессивность), агрессивность, замкнутость, низкая самооценка) в комплексе 3 и более показателей выше нормы (в том числе по причинам семейных, межличностных, учебных и др. проблем)',
    short: 'Двойки',
    comment: 'Низкая самооценка',
    points: 30
  },
  {
    indicator: '1.1. Нарушение в эмоцинально-волевой сфере (тревожность депрессивность), агрессивность, замкнутость, низкая самооценка) в комплексе 3 и более показателей выше нормы (в том числе по причинам семейных, межличностных, учебных и др. проблем)',
    short: 'Отец на учете в диспансере',
    comment: 'Низкая самооценка',
    points: 20
  },
];

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {

  editEnable = false;
  displayedColumns: string[] = ['indicator', 'short', 'comment', 'points'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  editMode(mode: boolean) {
    if (mode) {
      this.displayedColumns.push('select');
    } else {
      this.displayedColumns.pop();
    }
    this.editEnable = mode;
  }

}
