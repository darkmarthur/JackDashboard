import { Component } from '@angular/core';
import { LugaresService } from '../lugares.service';
// import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatGridList } from '@angular/material';
// import { ObservableMedia, MediaChange } from '@angular/flex-layout';


@Component({
  selector: 'app-tuto1',
  templateUrl: './tuto1.component.html',
  styleUrls: ['./tuto1.component.css']
})
export class Tuto1Component {
  // @ViewChild('grid') grid: MatGridList;
  // gridByBreakpoint = {
  //   xl: 8,
  //   lg: 6,
  //   md: 4,
  //   sm: 2,
  //   xs: 1
  // };
  title = 'JackDashboard';
  lat: number = 18.9409138;
  lng: number = -99.2480068;
  lugares = null;
  constructor(
    private lugaresService: LugaresService
    // private observableMedia: ObservableMedia
  ) { 
    this.lugares = lugaresService.getLugares();
  }

  // ngOnInit() {
  //   this.ngAfterContentInit();
  // }

  // ngAfterContentInit() {
  //   this.observableMedia.asObservable().subscribe((change: MediaChange) => {
  //     this.grid.cols = this.gridByBreakpoint[change.mqAlias];
  //   });
  // }
}
