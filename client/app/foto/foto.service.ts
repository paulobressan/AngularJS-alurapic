import { Http, Headers } from '@angular/http';
import { FotoComponent } from './foto.component';

export class FotoService {
    http: Http;
    headers: Headers;
    url :string = 'v1/fotos';

    constructor(http: Http) {
        this.http = http;
        //criando o header para enviar para o servidor
        let headers = new Headers();
        //configurar o header da requisição, vamos enviar o tipo JSON
        headers.append('Content-type', 'application/json');
    }

    cadastra(foto: FotoComponent){
        return this.http
            .post(this.url, JSON.stringify(foto), {headers: this.headers});
    }

    lista(){
        //recebendo o stream do servidor
        this.http
            .get(this.url)
            //pegando a resposta do servidor e convertendo para json
            //para usar o map temos que habilitar um modulo dele, em appModule
            .map(res => res.json());
    }
}