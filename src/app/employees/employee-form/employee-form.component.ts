import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import creditCardType from 'credit-card-type';

const alloweableCards = ['visa', 'mastercard']

@Component({
  selector: 'pm-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee: any = {};
  formGroup: FormGroup;
  cardType: string;

  public get creditCardImageSource(): string {
    if (this.cardType) {
      return `./assets/images/icons/creditCards/${this.cardType}.gif`;
    } else {
      return './assets/images/icons/creditCards/none.png';
    }
  }


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formBuilder = new FormBuilder();

    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength]],
      cardNumber: ['', [Validators.required, this.creditCardNumberValidator]]
    });

    this.formGroup.get('cardNumber').valueChanges.subscribe(
      value => {
        var visaCards = creditCardType(value);
        if (visaCards.length === 1) {
          this.cardType = visaCards[0].type;
        } else {
          this.cardType = null;
        }
      }
    );
  }

  creditCardNumberValidator(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.value !== null) {
      var visaCards = creditCardType(c.value);
      // console.log(visaCards);
      if (visaCards.length === 1) {
        // this.cardType = visaCards[0].type;
      } else {
        // this.cardType = null;
        if (visaCards.length === 0) {
          return { 'creditCardNumber': true };
        }
      }
    }
    return null;
  }

  save() {

  }
}
