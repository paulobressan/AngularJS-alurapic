//esse import vai carregar o modulo importado abaixo
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//modulo que vai ser carregado, quando ele for carregado vai ser carregado tambem todos imports dentro de module
import {AppModule} from './app.module'

//Carregando o appmodule, portanto a partir dele é carregado todos os outros modulos.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);