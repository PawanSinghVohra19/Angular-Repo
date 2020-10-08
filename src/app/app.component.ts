import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularProject  ';
  eName:string="Pawan";
  eSkill:String="Angular";
  eNumber:number=12345;
  alignment:string="center";
  // for property alignment use [proper]="varName"
  // one way binding: {{}}
  // two way binding: [()]
  // Event binding: (event) eg: (click)="MethodName()"

  changeEmpNameToUpperCase()
  {
    this.eName=this.eName.toUpperCase();
  }
}
