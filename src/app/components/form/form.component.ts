import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formGroup = this._formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
