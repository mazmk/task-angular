import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main.component";
import {RouterModule, Routes} from '@angular/router';
import {
  MatSidenavModule,
} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NavbarComponent} from './navbar/navbar.component';
import {MainRoutingModule} from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { TableViewComponent } from './table-view/table-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HeaderComponent,
    TableViewComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class MainModule {
}
