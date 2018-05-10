import{NgModule} from '@angular/core'
import {FotoComponent} from './foto.component'

@NgModule({
    declarations: [FotoComponent],
    exports: [FotoComponent] //o que desse modulo quero exportar para outros modulos utilizar
})
export class FotoModule{}