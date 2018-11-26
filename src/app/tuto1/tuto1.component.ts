import { Component } from '@angular/core';
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
  lugares: any = [
    {plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'esta1'},
    {plan: 'gratuito', cercania: 2, distancia: 5, active: false, nombre: 'esta2'},
    {plan: 'gratuito', cercania: 2, distancia: 6, active: true, nombre: 'esta3'},
    {plan: 'pagado', cercania: 1, distancia: 2, active: true, nombre: 'esta4'},
    {plan: 'pagado', cercania: 1, distancia: 3, active: false, nombre: 'esta5'},
    {plan: 'gratuito', cercania: 3, distancia: 10, active: true, nombre: 'esta6'},
    {plan: 'pagado', cercania: 1, distancia: 4, active: true, nombre: 'esta7'},
    {plan: 'gratuito', cercania: 3, distancia: 12, active: false, nombre: 'esta8'},
    {plan: 'pagado', cercania: 2, distancia: 18, active: true, nombre: 'esta9'},
  ];
  lat: number = 18.9409138;
  lng: number = -99.2480068;
  constructor(
    // private observableMedia: ObservableMedia
  ) { }

  // ngOnInit() {
  //   this.ngAfterContentInit();
  // }

  // ngAfterContentInit() {
  //   this.observableMedia.asObservable().subscribe((change: MediaChange) => {
  //     this.grid.cols = this.gridByBreakpoint[change.mqAlias];
  //   });
  // }
}
