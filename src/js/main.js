import def from './services/default'
import burger from './modules/burger'
import generator from './modules/gerator'

window.onload = function (){
    def();
    burger();
    generator();
}