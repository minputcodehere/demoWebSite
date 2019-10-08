import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  basic_form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) {

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

  /**
   * 送出
   */
  submit(): void {

    let userName = this.basic_form.get('userName').value;
    let userBirth = this.basic_form.get('userBirth').value;
    let userPhone = this.basic_form.get('userPhone').value;
    let userEmail = this.basic_form.get('userEmail').value;
    let userAddress = this.basic_form.get('userAddress').value;

    console.log('userName >> ' + userName);
    console.log('userBirth >> ' + userBirth);
    console.log('userPhone >> ' + userPhone);
    console.log('userEmail >> ' + userEmail);
    console.log('userName >> ' + userName);
    console.log('userAddress >> ' + userAddress);
  }

  /**
   * 清除
   */
  clear(): void {

    this.basic_form.reset();
  }
}
