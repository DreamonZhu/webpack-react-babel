import {map} from 'lodash';
import template from "./numberTemplate.hbs"

let numbers = map([1,2,3,4,5],n => n*n);
document.getElementById("app-container").innerHTML = template({numbers});;