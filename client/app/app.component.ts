//importando o decorator, ele vai transformar essa classe em um componente
import { Component, Input } from '@angular/core';
//Importando o serviço de HTTP, ele faz requisição AJAX
import {Http} from '@angular/http'

//para poder acessar o nosso componente app temos que definir os seletores
@Component({
    moduleId: module.id,
    //a maneira de como vamos acessar o componente atravez das view
    selector: 'app',
    //O arquivo html que representa o nosso componente app
    templateUrl: './app.component.html'
})
//todo componente que pode ser importado deve conter a sintaxe export na frente das classes
export class AppComponent{
    
}