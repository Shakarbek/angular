import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  currentNumber='0';
  firstNumber=null;
  secondNumber=null;
  operator=null;
  writeSecondNumber=false;
  constructor() { }

  ngOnInit(): void {
  }
  public enterNumber(n: string){
    if(this.writeSecondNumber){
      this.currentNumber=n;
      this.writeSecondNumber=false;
    }
    else if(this.currentNumber=='0'){
      this.currentNumber=n;
      this.firstNumber=n;
    }
    else{
      this.currentNumber+=n;
    }
  }

  public operate(op, secondNum){
    if(op=="+"){
      return this.firstNumber+=Number(secondNum);
    }
    else if (op=="-"){
      return this.firstNumber-=secondNum;
    }
    else if (op=="*"){
      return this.firstNumber*=secondNum;
    }
    else if (op=="/"){
      return this.firstNumber/=secondNum;
    }
    else if (op=="%"){
      this.firstNumber*=(secondNum/100);
      return this.firstNumber*100;
    }
    else if (op=="pow"){
      return this.firstNumber=Math.pow(this.firstNumber, secondNum);
    }
    else if(op=="="){
      return this.secondNumber;
    }

  }
  public operation(op: string){

    if(this.firstNumber === null){
      this.firstNumber = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.operate(this.operator , Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstNumber = result;
    }
    this.operator = op;
    this.writeSecondNumber = true;

 
  }
  public clearall(){
    this.currentNumber='0';
    this.firstNumber=null;
    this.operator=null;
    this.writeSecondNumber=false;
  }

  public clear(){
    if(this.operator!=null){
      this.operator=null;
    }
    else if(this.currentNumber!='0'){
      this.currentNumber='0';
    }
  }

  public sqrt(){
    this.firstNumber=Math.sqrt(this.firstNumber)
    return this.firstNumber;
  }


}


