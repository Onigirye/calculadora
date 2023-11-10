import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.page.html',
  styleUrls: ['./calc.page.scss'],
})
export class CalcPage implements OnInit {
  display: string = ''
  a: number = 0
  b: number = 0
  c: number = 0
  result: number = 0
  action: string = ''

  constructor(private router: Router,) {
  }

  ngOnInit() {
  }

  onClickZero() {
    this.display += '0';
  }

  onClickOne() {
    this.display += '1';
  }

  onClickTwo() {
    this.display += '2';
  }

  onClickThree() {
    this.display += '3';
  }

  onClickFour() {
    this.display += '4';
  }

  onClickFive() {
    this.display += '5';
  }

  onClickSix() {
    this.display += '6';
  }

  onClickSeven() {
    this.display += '7';
  }

  onClickEight() {
    this.display += '8';
  }

  onClickNine() {
    this.display += '9';
  }

  onClickPlus() {
    this.action = 'add'
    this.a += Number(this.display);
    this.result = this.a;
    // this.a = 1;
    this.display = '';

  }

  onClickMinus() {
    this.action = 'minus'
    this.c += Number(this.display);
    this.result = this.c;
    this.a = 2;
    this.display = '';
  }

  onClickTimes() {
    this.action = 'times'
    this.c += Number(this.display);
    this.result = this.c;
    this.a = 3;
    this.display = '';
  }

  onClickBy() {
    this.action = 'by'
    this.c += Number(this.display);
    this.result = this.c;
    this.a = 4;
    this.display = '';
  }

  onClickRoot() {
    this.c += Number(this.display);
    this.result = Math.sqrt(this.c);
    this.display = '';
    this.display += this.result;
  }

  onClickExp() {
    this.action = 'exp'
    this.c += Number(this.display);
    this.result = this.c;
    this.a = 5;
    this.display = '';
  }

  onClickFact() {
    this.c += Number(this.display);
    this.result = this.factorial(this.c);
    this.display = '';
    this.display += this.result;
  }

  onClickSin() {
    this.action = 'sin'
  }

  onClickCos() {
    this.action = 'cos'
  }

  onClickTan() {
    this.action = 'tan'
  }


  onClickEqual() {
    this.b = Number(this.display)
    switch (this.action) {

      case 'add':
        this.result += this.b;
        break;
      case 'minus':
        this.result -= this.b;
        break;
      case 'times':
        this.result *= this.b;
        break;
      case 'by':
        this.result /= this.b;
        break;
      case 'exp':
        this.result = Math.pow(this.result, this.b);
        break;
      case 'sin':
        this.b = Math.PI * this.b;
        this.result = Math.sin(this.b / 180);
        break;
      case 'cos':
        this.b = Math.PI * this.b;
        this.result = Math.cos(this.b / 180);
        break;
      case 'tan':
        this.b = Math.PI * this.b;
        this.result = Math.tan(this.b / 180);
        break;
      default:
        break;
    }

    this.action = ''
    this.display = '';
    this.display += this.result;
    this.a = 0;
    this.b = 0;
  }



  onClickC() {
    this.display = '';
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.result = 0;
  }

  private factorial(value: number) {
    if (value === 0 || value === 1)
      return 1;
    for (let i = value - 1; i >= 1; i--) {
      value *= i;
    }
    return value;
  }

  OnClickSair(){
    this.router.navigateByUrl("/home");
  }
}
