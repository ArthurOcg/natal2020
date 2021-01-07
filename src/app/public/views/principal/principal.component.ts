import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { AntPath, antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, AfterViewInit {

  private map1: L.Map;

  /*coordenadas do centro de campina grande*/
  private initialState = {
    lng: -7.227385129413996,
    lat: -35.88455405935729,
    zoom: 13,
  };

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.map1 = this.criarMapa(
      this.mapContainer,
      this.initialState.lng,
      this.initialState.lat,
      this.initialState.zoom
    );
  }

  private criarMapa(
    container: ElementRef<HTMLElement>,
    lng: number,
    lat: number,
    zoom: number
  ): L.Map {
    let mapa = new L.Map(container.nativeElement).setView([lng, lat], zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapa);
    return mapa;
  }

  private adicionaContornoMapa(
    mapa: L.Map,
    coordenadas: Array<Array<number>>,
    options: Object
  ): void {
    antPath(coordenadas, options).addTo(mapa);
  }
}
