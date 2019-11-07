import { Component, OnInit } from '@angular/core';
import { ShopDialogComponent } from '../shop-dialog/shop-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  itens: number;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    const local = JSON.parse(localStorage.getItem('productList'));
    this.itens = !!local ? local.length : 0;
  }

  openShopDialog() {
    this.dialog.open(ShopDialogComponent, {
      width: '800px',
      data: JSON.parse(localStorage.getItem('productList'))
    });
  }

}
