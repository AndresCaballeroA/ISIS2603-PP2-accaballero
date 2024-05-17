import { NaveModule } from '../nave.module';
import { Component, OnInit } from '@angular/core';
import { Nave } from '../nave';
import { NaveService } from '../nave.service';

@Component({
  selector: 'app-nave-list',
  templateUrl: './nave-list.component.html',
  styleUrls: ['./nave-list.component.css']
})
export class NaveListComponent implements OnInit {

  averageSeasons: number = 0;
  averageSeasons: number = 0;
  averageSeasons: number = 0;
  naves: Array<Nave> = []; 
  selectedNave!: Nave;
  selected = false;
  constructor(private naveService: NaveService) { }

  getNaves(): void{
    this.naveService.getNaves().subscribe((naves) => {
      this.naves = naves;
    });
  }

  getNavesList() {
    this.naveService.getNaves().subscribe(naves => {
      this.naves = naves;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons() {
    let totalSeasons = 0;
    for (let course of this.naves) {
      totalSeasons += course.bando;
    }
    this.averageSeasons = totalSeasons / this.naves.length;
  }

  onSelected(nave: Nave): void{
    this.selected = true;
    this.selectedNave = nave;
  }

  ngOnInit() {
    this.getNaves();
    this.getNavesList();
  }

}
