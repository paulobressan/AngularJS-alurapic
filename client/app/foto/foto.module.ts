import{NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import {FiltroPorTitulo} from './foto.pipes';
import {FotoService} from './foto.service';

@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo, FotoService],
    exports: [FotoComponent, FiltroPorTitulo, FotoService] //o que desse modulo quero exportar para outros modulos utilizar
})
export class FotoModule{}