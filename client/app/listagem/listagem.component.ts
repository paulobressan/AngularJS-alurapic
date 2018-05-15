import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: 'listagem.component.html'
})
export class ListagemComponent{
    //Typescript, array de object
    fotos: Object[] = [];
    //Injeção de dependencia por tipo
    constructor(http: Http){
        //recebendo o stream do servidor
        http
            .get('v1/fotos')
            //pegando a resposta do servidor e convertendo para json
            //para usar o map temos que habilitar um modulo dele, em appModule
            .map(res => res.json())
            .subscribe(fotos=>{             
                this.fotos = fotos;
                console.log(this.fotos);
                //se der errado log no console
            }, erro=> console.log(erro));
    }

}