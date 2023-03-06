import { Component, Input, ViewChild } from '@angular/core';
import {
  ELEMENT_DATA,
  PeriodicElement,
  Representative,
} from './table-view-data';
import { Table } from 'primeng/table';
import { MenuItem } from 'primeng/api';

import { EditTeacherComponent } from '../edit-teacher/edit-teacher.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  selectedTeachers: PeriodicElement[];

  representatives: Representative[];
  contextMenu: MenuItem[];
  statuses: any[];
  contextItem: PeriodicElement;
  loading: boolean = false;
  editingTeacher: PeriodicElement;

  @Input() teachers: PeriodicElement[];

  @ViewChild('dt') table: Table;
  view: any;

  display: boolean = false;
  displayBasic: boolean = false;
  editTeacher: boolean = false;
  toggleDialogue() {
    this.display = !this.display;
  }

  constructor(public dialog: MatDialog) {
    this.contextMenu = [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-refresh',
        command: (event) => this.editRow(),
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
        command: (event) => (this.display = true),
      },
    ];
  }

  editRow() {
    const index = this.teachers.findIndex(
      (i) => i.teacherId === this.contextItem.teacherId
    );
    if (index !== -1) {
      this.editingTeacher = this.teachers[index];
    }
    const dialogRef = this.dialog.open(EditTeacherComponent, {
      data: this.editingTeacher,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.teachers[result.editingId] = result;
      this.editTeacher = true;
      this.displayBasic = true;

      console.log(`Dialog result: ${result}`);
    });
  }
  deleteRow() {
    const index = this.teachers.findIndex(
      (i) => i.teacherId === this.contextItem.teacherId
    );
    if (index !== -1) {
      this.teachers = this.teachers.filter(
        (teacher) => teacher.teacherId !== this.contextItem.teacherId
      );
    }
    this.display = false;
    this.displayBasic = true;
  }

  onClickHandler(item: PeriodicElement) {
    setTimeout(() => {
      this.view = item;
    }, 100);
  }
  handleCloseDetails(data: string | undefined) {
    if (data == 'clicked outside') {
      this.view = false;
    }
  }
  handleRowRightClick(data: PeriodicElement) {
    this.contextItem = data;
  }
}
