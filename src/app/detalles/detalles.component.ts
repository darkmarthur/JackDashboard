import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../lugares.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  id: null;
  action: null;
  lugar: null;
  constructor(
    private route: ActivatedRoute,
    private lugaresService: LugaresService
  ) {
    this.id = this.route.snapshot.params['id'];
    // this.action = this.route.snapshot.queryParams['action'];
    this.lugar = this.lugaresService.buscarLugar(this.id);
    // console.log(this.route.snapshot.params['id']);
    // console.log(this.route.snapshot.queryParams['action']);
   }

  

  ngOnInit() {
  }

}
