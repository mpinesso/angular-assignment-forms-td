import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  subscriptionDefault = "advanced";
  formData = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  subscriptions = [{
      key: 'basic',
      value: 'Basic'
    },{
      key: 'advanced',
      value: 'Advanced'
    },{
      key: 'pro',
      value: 'Pro'
    }];

  onSubmit(){
    this.formData.email = this.form.value.emailControl;
    this.formData.subscription = this.form.value.subscriptionControl;
    this.formData.password = this.form.value.passwordControl;
    this.submitted = true;
  }

}
