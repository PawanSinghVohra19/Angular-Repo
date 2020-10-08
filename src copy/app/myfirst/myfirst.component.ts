import { Component } from '@angular/core';

@Component({
  selector: 'app-myfirst',
  templateUrl: './myfirst.component.html',
  styleUrls: ['./myfirst.component.css']
})
export class MyfirstComponent{

  empName:string="Pawan";
  empNumber:number=2234;
  isEmployee:boolean=true;
  hobbies:string[]=['coding','cricket','singing'];
  empObj
}
