import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  basic_form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.initForm(fb);
  }

  ngOnInit() {
  }


  initForm(fb: FormBuilder) {

    this.basic_form = this.fb.group({
      userName: ['', Validators.required],
      userBirth: ['', Validators.required],
      userPhone: ['', Validators.required],
      userEmail: ['', Validators.required],
      userAddress: ['', Validators.required]
    });
  }

  submit() {

  }
}
