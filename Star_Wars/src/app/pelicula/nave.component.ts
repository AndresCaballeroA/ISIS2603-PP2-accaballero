import { Component, OnInit } from '@angular/core';
import { Nave } from './nave';
import { NaveService } from './nave.service';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {

  naves: Array<Nave> = [];
  valorImperio: number = 0;
  valorRevelion: number = 0;
  valorNeutral: number = 0;
  selectedNave!: Nave;
  selected = false;

  constructor(private naveService: NaveService) { }

  getNaveList(){
    this.naveService.getNaves().subscribe(naves=> {
      this.naves = naves;
      this.calculateValorBando();
    });
  }

  calculateValorBando() {
    let totalBandoI = 0;
    let totalBandoR = 0;
    let totalBandoN = 0;
    for (let nave of this.naves) {
      if (nave.bando == "Imperio") {
        totalBandoI += 1;
      }
      if (nave.bando == "Netural") {
        totalBandoN += 1;
      }
      if (nave.bando == "Rebelión") {
        totalBandoR += 1;
      }
    }
    this.valorImperio = totalBandoI;
    this.valorNeutral = totalBandoN;
    this.valorRevelion = totalBandoR;
    
  }

  onSelected(nave: Nave): void{
    this.selected = true;
    this.selectedNave = nave;
  }

  ngOnInit() {
    this.getNaveList();
  }

}
