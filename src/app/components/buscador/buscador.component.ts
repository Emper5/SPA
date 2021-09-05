import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  busqueda: any = []
  nombre:string = "";

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService: HeroesService,
               private router:Router 
) { 

  this.activatedRoute.params.subscribe( params => {
        this.nombre = params["src"];
        this.busqueda = this._heroesService.buscarHeroes( params ['src'] );
        console.log(this.busqueda)
  } )
  
  
}

  ngOnInit(): void {
  }

  verHeroe(nombre: string){
    const indice = this._heroesService.getHeroeByName(nombre)
    this.router.navigate( [ '../heroe', indice ] );
    

  
}
}