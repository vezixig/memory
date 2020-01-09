import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/components/playground/tile.class';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  public tiles: Tile[][] = [[]];
  
  constructor() { }

  ngOnInit() {
    this.generatePlayfield(5, 5);
  }

  private generatePlayfield(width: number, height: number) {
    const line: Tile[] = [];
    line.push({image: 'cat_01.png'});
    line.push({image: 'cat_01.png'});
    line.push({image: 'cat_01.png'});
    line.push({image: 'cat_01.png'});

    this.tiles.push(line);
    this.tiles.push(line);
    this.tiles.push(line);
    this.tiles.push(line);
  }
}
