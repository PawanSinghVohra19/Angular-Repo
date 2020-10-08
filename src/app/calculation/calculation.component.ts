import { Component } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent {

  number1:string;
  number2:string;
  result:number=0;
  temp:number=0;
  add()
  {
    
      this.temp=parseInt(this.number1)+parseInt(this.number2);
    }
    
    subtract()
    {
      this.temp=parseInt(this.number1)-parseInt(this.number2);
    }
    multiply()
    {
      this.temp=parseInt(this.number1)*parseInt(this.number2);
      
    }
    
    divide()
    {
      this.temp=parseInt(this.number1)/parseInt(this.number2);
    }
  equals()
  {
      this.result=this.temp;
  }

}
