import { Component } from '@angular/core';

@Component({
    selector: 'app-panel-camara',
    templateUrl: './panel-camara.component.html',
    styleUrls: ['./panel-camara.component.css']
})
export class PanelCamaraComponent {

    sectores: any = [0, 0, 0, 0]

    rows: any;

    selector: any = 0;

    color:Boolean = true

    constructor() {
        this.rows = this.generateMatrix(10, 10); // Reemplaza 5 por el número de cuadrados de ancho y 3 por el número de cuadrados de largo que desees
    }

    ngOnInit() {
        setTimeout(() => {
            this.selector = 0
            this.colorear()
        }, 1500)
    }

    generateMatrix(width: number, height: number) {
        const matrix = [];
        this.selector = 0

        for (let i = 0; i < height; i++) {
            const row = [];
            for (let j = 0; j < width; j++) {
                row.push({
                    color: false,
                    selector: this.selector
                });
                this.selector++
            }
            matrix.push(row);
        }

        return matrix;
    }

    colorear() {
        if(this.selector == 100){
            this.selector = 0
            this.color = !this.color
        }
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {

                if (this.rows[i][j]['selector'] == this.selector) {
                    this.rows[i][j]['color'] = this.color

                    setTimeout(() => {
                        this.selector++
                        this.colorear()
                    }, 500)
                }

            }
        }

    }

}
