import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'simple-int',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SimpleComponent {
  principal: number;
  interestRate: number;
  period: number;

  interestAmount: number;
  compoundinterest: number;
  totalAmount: number;
  n: number;

  updatePrincipal(event) {
    this.principal = event.target.value;
  }

  updateInterestRate(event) {
    this.interestRate = event.target.value;
  }

  updatePeriod(event) {
    this.period = event.target.value;
  }

  calcuateInterest() {
    this.interestAmount =
      ((this.principal * this.interestRate) / 100) * this.period;
    this.totalAmount =
      this.principal * Math.pow(1 + this.interestRate / 12, 12 * this.period);
    this.compoundinterest = this.totalAmount - this.principal;
  }
}
