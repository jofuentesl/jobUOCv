import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../shared/models/user.model';


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
  return g.get('password').value === g.get('passwordRepeat').value ? null : {mismatch: true};
}

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})

export class StudentDetailComponent implements OnInit {

  currentUser: User;

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

    // tslint:disable-next-line: variable-name
    n_document  = new FormControl('', [Validators.required]);
    // tslint:disable-next-line: variable-name
    no_document = new FormControl('', [Validators.required]);
    street      = new FormControl('', [Validators.required]);
    province    = new FormControl('', [Validators.required]);
    city        = new FormControl('', [Validators.required]);
    about       = new FormControl('', [Validators.required]);
    other       = new FormControl('', [Validators.required]);
    license     = new FormControl('', [Validators.required]);

    userForm: FormGroup = this.formBuilder.group({
      name:         this.name,
      surename:     this.surename,
      dates:        this.dates,
      phone:        this.phone,
      phone2:       this.phone2,
      n_document:   this.n_document,
      no_document:  this.no_document,
      street:       this.street,
      province:     this.province,
      city:         this.city,
      about:        this.about,
      other:        this.other,
      license:      this.license
    });

    getUser() {
      const idUser = this.route.snapshot.paramMap.get('id');
      // tslint:disable-next-line: deprecation
      this.dataService.getUser(idUser).subscribe(data => {
        return console.log(this.currentUser = data);
    });
  }
    constructor(
      private dataService: DataService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router) {
    }
    updateUser() {
      const idUser = this.route.snapshot.paramMap.get('id');
      this.dataService.getUser(idUser).subscribe(data => {
        this.currentUser = data;
        this.currentUser.name = this.userForm.value.name;
        this.currentUser.surname = this.userForm.value.surename;
        this.currentUser.birthdate = this.userForm.value.dates;
        this.currentUser.phone = this.userForm.value.phone;
        this.currentUser.phone2 = this.userForm.value.phone2;
        this.currentUser.documentNumber = this.userForm.value.no_document;
        this.currentUser.documentType.name = this.userForm.value.n_document;
        this.currentUser.address.street = this.userForm.value.street;
        this.currentUser.address.province = this.userForm.value.province;
        this.currentUser.address.municipe = this.userForm.value.city;
        this.currentUser.aboutMe = this.userForm.value.about;
        this.currentUser.otherCompetences = this.userForm.value.other;
        this.currentUser.license = this.userForm.value.license;
        this.dataService.updateUser(this.currentUser).subscribe(data1 => {
          this.router.navigate(['/admin/profile']);
        });
      });
}

  ngOnInit(): void {
  const idUser = this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line: deprecation
  this.dataService.getUser(idUser).subscribe(data => {
      return this.currentUser = data;
    });
  }
}
