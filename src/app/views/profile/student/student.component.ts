import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

/*Expresion regular para quitar espacios en blanco
function replaceAll( input: FormControl) {
  const expresion = new RegExp('/^[a-zA-Z]+$/', '');
  return (expresion.test(input.value)) ? null : {validateString: true} ;
}*/

/*pasaporte /^[a-z]{3}[0-9]{6}[a-z]?$/i
  DNI   

*/

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
    phone      = new FormControl('', [Validators.pattern('^[0-9]*$')]);
    phone2     = new FormControl('', [Validators.pattern('^[0-9]*$')]);

    n_document = new FormControl('', [Validators.required]);
    userForm: FormGroup = this.formBuilder.group({
      name:       this.name,
      surename:   this.surename,
      phone:      this.phone,
      phone2:     this.phone2,
      n_document: this.n_document
    });
  constructor(private formBuilder: FormBuilder) { }

    update() {
      console.log(' hola ');
    }

  ngOnInit(): void {
  }

}
