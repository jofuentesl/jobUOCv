import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { User } from '../../../shared/models/user.model';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

/*Expresion regular para quitar espacios en blanco
function replaceAll( input: FormControl) {
  const expresion = new RegExp('/^[a-zA-Z]+$/', '');
  return (expresion.test(input.value)) ? null : {validateString: true} ;
}*/

/*pasaporte /^[a-z]{3}[0-9]{6}[a-z]?$/i
  DNI
*/
function isDate(c: FormControl) {
    const dateRegEx = new RegExp(/^(\d{2}|\d{1})\/(\d{2}|\d{1})\/\d{4}$/);
    return dateRegEx.test(c.value) ? null : {date: true };
  }

function idDocument(g: FormControl) {
    return g.get('password').value === g.get('passwordRepeat').value
       ? null : {'mismatch': true};
 }
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  /*Variables para validar el formulario del perfil*/
    name       = new FormControl('', [Validators.required,
                                      Validators.minLength(3),
                                      Validators.maxLength(55),
                                      Validators.pattern('^[a-zA-Z]+$')]);
    surename   = new FormControl('', [Validators.required,
                                      Validators.minLength(3),
                                      Validators.maxLength(55),
                                      Validators.pattern('^[a-zA-Z]+$')]);
    dates      = new FormControl('', [Validators.required, isDate]);
    phone      = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);
    phone2     = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);

    n_document = new FormControl('', [Validators.required]);
    address    = new FormControl('', [Validators.required]);
    province   = new FormControl('', [Validators.required]);
    city       = new FormControl('', [Validators.required]);

    userForm: FormGroup = this.formBuilder.group({
      name:       this.name,
      surename:   this.surename,
      dates:      this.dates,
      phone:      this.phone,
      phone2:     this.phone2,
      n_document: this.n_document,
      address:    this.address,
      province:   this.province,
      city:       this.city
    });
  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

    update() {
      console.log(' hola ');
    }

  ngOnInit(): void {
  }

}
