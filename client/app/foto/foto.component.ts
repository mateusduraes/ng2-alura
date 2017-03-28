import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id, /*Este objeto é criado pelo loader System.js e entra em jogo quando o código é transcompilado.*/
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {
    
    @Input()url : string;
    @Input()titulo : string;

}