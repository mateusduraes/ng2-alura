import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component'
import { ListagemComponent } from './listagem/listagem.component'

// Criação das rotas
const appRoutes : Routes = [

    { path: '', component: ListagemComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: '**', redirectTo: ''}

];

//  Aqui é exportado algo que o angular entende 
// como as rotas, para usar no módulo principal... isso é importado no modulo principal
export const routing = RouterModule.forRoot(appRoutes);