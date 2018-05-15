import { RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';

//uma cosntante que dentro dela temos nossas rotas
const appRoutes: Routes = [
    //O path é a url digitada
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    //** qualquer coisa que não cair nas rotas anteriores abre essa rota
    {path: '**', component: ListagemComponent}
];

//Essa função "compila" nossas rotas e atribuimos ele a uma constante para exporta-la prontinha para o angular usar
export const routing = RouterModule.forRoot(appRoutes);

