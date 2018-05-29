//Criando o modulo principal para execução da aplicação
//importando modulo angular
import {NgModule} from '@angular/core';
//Importando o modulo do browser
import {BrowserModule} from '@angular/platform-browser';
//importando os componentes que vai ser utilizado na aplicação
import {AppComponent} from './app.component';
//importando o modulo de imagem
import {FotoModule} from './foto/foto.module';
//Importando o provedor de http
import {HttpModule} from '@angular/http';
//Importando painel
import {PainelModule} from './painel/painel.modulo';
//Importando o cadastro component
import {CadastroComponent} from './cadastro/cadastro.component';
//importando a tela de listagem de imagens
import {ListagemComponent} from './listagem/listagem.component';
//Importando nossas rotas
import {routing} from './app.routes';
//usando o modulo de forms apra que o angular reconheça ngModel
//Importando o reactiveFormModule, ele permite fazer validação ao lado do modelo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Importando modulo rxjs
import 'rxjs/add/operator/map'

//Todos o modulos que quermos importar dentro do modulo principal
@NgModule({
    imports: [
        //Estou dizendo que a aplição tem dependencia de outros modulos, com isso podemos utilizar o que o fotoModule exporta que é o FotoComponent
        BrowserModule,
        FotoModule, 
        HttpModule, 
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule
    ], 
    declarations: [
        AppComponent, 
        CadastroComponent, 
        ListagemComponent
    ], 
    bootstrap: [AppComponent]
})
export class AppModule{

}