import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeroesComponent } from "../../heroes/heroes.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private  router:Router,
              
    ) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string){
    this.router.navigate( [ '/buscador', termino ] );

  }
 

}

