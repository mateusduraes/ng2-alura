import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    fotos: Object[] = [];
    constructor(http : Http){
        let stream = http.get('v1/fotos'); 


       stream.map(res => res.json()) // Para usar a função map é necessário add import 'rxjs/add/operator/map'; no module principal
        .subscribe(
            res => this.fotos = res,
            err => console.log(err)
        );

        // O http retorna um stream, que vc pode se 'inscrever' nele para quando os dados estiverem prontos
        // stream.subscribe(res => {
        //     this.fotos = res.json();
        //     console.log(this.fotos);
        // });
    }
}