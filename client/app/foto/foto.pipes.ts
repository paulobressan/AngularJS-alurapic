//Pipe para filtrar fotos
import {Pipe, PipeTransform} from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})
//interface
export class FiltroPorTitulo implements PipeTransform{
    
    transform(fotos: FotoComponent[], digitado: string){
        digitado = digitado.toLocaleLowerCase();
        //filtrando fotos e retornando as fotos filtradas
        return fotos.filter(foto => foto.titulo.toLocaleLowerCase().includes(digitado));
    }
}