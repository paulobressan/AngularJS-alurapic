import {Component} from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import {Http, Headers} from '@angular/http';
import { Json } from '@angular/core/src/facade/lang';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl:'./cadastro.component.html'
})
export class CadastroComponent{
    foto: FotoComponent = new FotoComponent();
    http: Http;

    constructor(http :Http){
        this.http = http;
    }

    cadastrar(event){
        event.preventDefault();
        //criando o header para enviar para o servidor
        let headers = new Headers();
        //configurar o header da requisição, vamos enviar o tipo JSON
        headers.append('Content-type', 'application/json');
        this.http
            .post('v1/fotos', JSON.stringify(this.foto), {headers: headers})
            .subscribe(()=>{
                this.foto = new FotoComponent();
                console.log("Foto Salvar Com Sucesso");
            }, erro => console.log(erro));
            
    }
}