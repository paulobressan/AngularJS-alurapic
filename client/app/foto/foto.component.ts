import {Component, Input} from '@angular/core'; //O Input permite que as propriedade recebem valores externos

@Component({
    moduleId: module.id, //com ele não precisamos colocar todo o path dos template
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls:['./foto.component.css']
})
export class FotoComponent{
    //propriedade com o input podemos entrar com valores nessas propriedade
    @Input() titulo: string;
    @Input() url: string; 
    descricao :string;   
}