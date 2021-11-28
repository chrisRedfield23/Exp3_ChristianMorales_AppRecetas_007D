import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle("first");
    
    }

  option = {
    slidesPerView:1.00,
    centeredSlides: true,
    loop: true,
    spaceBetween: 5,
    autoplay: true,
  }

}
