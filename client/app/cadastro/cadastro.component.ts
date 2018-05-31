import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
//import {Http} from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//importando oi serviço criado
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    service: FotoService;
    foto: FotoComponent = new FotoComponent();
    //http: Http;
    meuForm: FormGroup;
    constructor(/*http :Http,*/ fb: FormBuilder, service: FotoService) {
        this.service = service;
        // this.http = http;
        //formBuilder para auxiliar a criação de formularios.
        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event) {
        event.preventDefault();
        //USAR SERVICE
        this.service
            .cadastra(this.foto).subscribe(() => {
                console.log('Foto Cadastrada com sucesso');
                this.foto = new FotoComponent;
            })
        //METODO ANTIGO ANTES DE USAR SERVICE
        //criando o header para enviar para o servidor
        // let headers = new Headers();
        // //configurar o header da requisição, vamos enviar o tipo JSON
        // headers.append('Content-type', 'application/json');
        // this.http
        //     .post('v1/fotos', JSON.stringify(this.foto), {headers: headers})
        //     .subscribe(()=>{
        //         this.foto = new FotoComponent();
        //         console.log("Foto Salvar Com Sucesso");
        //     }, erro => console.log(erro));

    }
}