import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  items1: MenuItem[];

  items2: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
      this.items1 = [
          {label: 'proveedores', icon: 'fa fa-fw fa-bar-chart'},
          {label: 'empleados', icon: 'fa fa-fw fa-calendar'},
          {label: 'inventario', icon: 'fa fa-fw fa-book'}
      ];

      this.activeItem = this.items1[0];
  }

  closeItem(event, index) {
      this.items1 = this.items1.filter((item, i) => i !== index);
      event.preventDefault();
  }

}
