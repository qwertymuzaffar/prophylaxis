import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import {TableRowSelectDirective} from './directives/table-row-select.directive';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistryComponent } from './components/registry/registry.component';
import { BulkInputComponent } from './components/bulk-input/bulk-input.component';
import { PopupComponent } from './components/popup/popup.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { DirectoryInstitutionComponent } from './components/directory-institution/directory-institution.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'registry', pathMatch: 'full' },
  { path: 'registry', component: RegistryComponent },
  { path: 'bulk-input', component: BulkInputComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'directory-institution', component: DirectoryInstitutionComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistryComponent,
    BulkInputComponent,
    PopupComponent,
    IndicatorComponent,
    TimelineComponent,
    TableRowSelectDirective,
    DirectoryComponent,
    DirectoryInstitutionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupComponent
  ]
})
export class AppModule { }
