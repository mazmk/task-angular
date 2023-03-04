import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { MenuItem } from 'primeng/api';

interface FoodNode {
  name: string;
  icon: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    children: [],
  },
  {
    name: 'Students',
    icon: 'person',
    children: [],
  },
  {
    name: 'Teachers',
    icon: 'person',
    children: [
      {
        name: 'All Teachers',
        icon: '',
        children: [],
      },
      {
        name: 'Add a Teacher',
        icon: '',
        children: [],
      },
    ],
  },
  {
    name: 'Class',
    icon: 'class',
    children: [],
  },
  {
    name: 'Schedule',
    icon: 'schedule',
    children: [],
  },
  {
    name: 'Settings',
    icon: 'settings',
    children: [],
  },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];

  constructor() {
  }

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
          }
        ],
      },
      {
        label: 'Class',
        icon: 'pi pi-fw pi-calendar',
        items: [],
      },
    ];
  }
}
