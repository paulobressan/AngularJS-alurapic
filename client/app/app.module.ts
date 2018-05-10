//Criando o modulo principal para execução da aplicação
//importando modulo angular
import {NgModule} from '@angular/core';
//Importando o modulo do browser
import {BrowserModule} from '@angular/platform-browser'
//importando os componentes que vai ser utilizado na aplicação
import {AppComponent} from './app.component'
//importando o modulo de imagem
import {FotoModule} from './foto/foto.module'

//Todos o modulos que quermos importar dentro do modulo principal
@NgModule({
    imports: [BrowserModule,FotoModule], //Estou dizendo que a aplição tem dependencia de outros modulos, com isso podemos utilizar o que o fotoModule exporta que é o FotoComponent
    declarations: [AppComponent], 
    bootstrap: [AppComponent]
})
export class AppModule{

}