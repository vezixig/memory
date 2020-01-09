import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/components/playground/tile.class';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
    public tiles: Tile[][] = [[]];

    constructor() {}

    ngOnInit() {
        this.generatePlayfield(4, 4);
    }

    /**
     * Generate a new playfield
     * @param width field width in columns
     * @param height field height in rows
     */
    private generatePlayfield(width: number, height: number) {
        const line: Tile[] = this.generateCards(width, height);
        // split card-array in seperate rows
        this.tiles = Array.from({ length: height }, (_, ih) =>
            Array.from({ length: width }, (_, iw) => line[ih * width + iw])
        );
    }

    /**
     * Create cards, two per image
     * @param width field width in columns
     * @param height field height in rows
     */
    private generateCards(width: number, height: number): Tile[] {
        const line = Array.from(
            { length: Math.floor((width * height) / 2) },
            (_, i) => ({
                id: i,
                image: 'cat_' + (i + 1).toString().padStart(2, '0') + '.png'
            })
        ).reduce((a, c) => [...a, c, c], []);
        return this.shuffle(line);
    }

    /**
     * Uses the Fiser-Yates Algorithm to shuffle an array
     * @param arr Array to shuffle
     */
    private shuffle<T>(arr: Array<T>): Array<T> {
        // Fisher-Yates Shuffle
        for (let i = arr.length - 1; i > 0; i--) {
            const target = Math.floor(Math.random() * i);
            const tmp = arr[target];
            arr[target] = arr[i];
            arr[i] = tmp;
        }
        return arr;
    }
}
