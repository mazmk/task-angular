import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PeriodicElement } from '../table-view/table-view-data';
import { MatDialog } from '@angular/material/dialog';
import { EditTeacherComponent } from '../edit-teacher/edit-teacher.component';

interface FoodNode {
  name: string;
  icon: string;
  children?: FoodNode[];
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];
  @Output() elementAdded = new EventEmitter<PeriodicElement>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-file',
        items: [],
      },
      {
        label: 'Students',
        icon: 'pi pi-fw pi-pencil',
        items: [],
      },
      {
        label: 'Teachers',
        icon: 'pi pi-fw pi-user',
        expanded: true,
        items: [
          {
            label: 'All Teachers',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Add a Teacher',
            icon: 'pi pi-fw pi-user-minus',
            command: (event) => this.addTeacher(),
          },
        ],
      },
      {
        label: 'Class',
        icon: 'pi pi-fw pi-calendar',
        items: [],
      },
      {
        label: 'Schedule',
        icon: 'pi pi-fw pi-calendar',
        items: [],
      },
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-calendar',
        items: [],
      },
    ];
  }

  addTeacher(){
    const dialogRef = this.dialog.open(EditTeacherComponent,);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.elementAdded.emit(result);
    });
  }

}
