import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../../../shared/services/data.service';
import { Language } from '../../../../shared/models/language.model';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.scss']
})
export class LanguageDetailComponent implements OnInit {

  language: Language;

  idioma  = new FormControl ('', Validators.required);
  otro    = new FormControl ('', Validators.pattern('d{3,255}$'));
  nivel   = new FormControl ('', Validators.required);
  fecha   = new FormControl ('', Validators.required);

  languageForm: FormGroup = this.formBuilder.group({
    idioma: this.idioma,
    otro:   this.otro,
    nivel:  this.nivel,
    fecha:  this.fecha
  });

  constructor(  private dataService: DataService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router) { }
  createLanguage() {

    
  }
    ngOnInit(): void {
  }

}
