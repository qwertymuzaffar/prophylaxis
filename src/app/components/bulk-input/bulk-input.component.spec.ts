import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkInputComponent } from './bulk-input.component';

describe('BulkInputComponent', () => {
  let component: BulkInputComponent;
  let fixture: ComponentFixture<BulkInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
