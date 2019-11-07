import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  list = [];
  carShopList = [];

  constructor() {
  }

  ngOnInit() {
    this.list.push({
      id: 1, img: '../../assets/gins/gin01.jpg', name: 'Nicl`s Gin', detalhes: 'Dry Gin', value: 'R$560,00', cliked: false, qnt: 1
    });
    this.list.push({
      id: 2, img: '../../assets/gins/gin02.jpg', name: 'Silver Seagers', detalhes: 'Dry Gin', value: 'R$560,00', cliked: false, qnt: 1
    });
    this.list.push({
      id: 3, img: '../../assets/gins/gin03.jpg', name: 'Bullards', detalhes: 'Dry Gin', value: 'R$560,00', cliked: false
    });
    this.list.push({
      id: 4, img: '../../assets/gins/gin04.jpg', name: 'Manly Spirits', detalhes: 'Dry Gin', value: 'R$560,00', cliked: false, qnt: 1
    });
    this.list.push({
      id: 5, img: '../../assets/gins/gin05.jpg', name: 'Bottega', detalhes: 'Dry Gin', value: 'R$560,00', cliked: false, qnt: 1
    });
    this.list.push({
      id: 6, img: '../../assets/gins/gin06.jpg', name: 'Arapuru', detalhes: 'Dry Gin', value: 'R$560,00', cliked: false, qnt: 1
    });
    this.list.push({
      id: 7, img: '../../assets/gins/gin07.jpg', name: 'Sylvius', detalhes: 'Dry Gin', value: 'R$560,00', cliked: false, qnt: 1
    });
    this.list.push({
      id: 8, img: '../../assets/gins/gin08.jpg', name: 'Seagram´s', detalhes: 'Extra Dry Gin', value: 'R$560,00', cliked: false, qnt: 1
    });
  }

  addItemToShopCar(item) {
    item.cliked = !item.cliked;
    this.carShopList.push(item);
    localStorage.setItem('productList', JSON.stringify(this.carShopList));
  }

}
