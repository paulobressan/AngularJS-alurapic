import {Component, Input} from '@angular/core'; //O Input permite que as propriedade recebem valores externos

@Component({
    moduleId: module.id, //com ele não precisamos colocar todo o path dos template
    selector: 'foto',
    template: './foto.component.html'
})
export class FotoComponent{
    //propriedade com o input podemos entrar com valores nessas propriedade
    @Input() titulo;
    @Input() url;

    
}