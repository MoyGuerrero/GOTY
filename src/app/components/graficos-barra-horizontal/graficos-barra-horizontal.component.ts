import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficos-barra-horizontal',
  templateUrl: './graficos-barra-horizontal.component.html',
  styleUrls: ['./graficos-barra-horizontal.component.css']
})
export class GraficosBarraHorizontalComponent {

  result: any[] = [];

  view: any[number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights'

  constructor() { }

  onSelect(event: any) {
    console.log(event);
  }
}
