import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryInstitutionComponent } from './directory-institution.component';

describe('DirectoryInstitutionComponent', () => {
  let component: DirectoryInstitutionComponent;
  let fixture: ComponentFixture<DirectoryInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
