import { Component} from '@angular/core';

@Component({
  selector: 'app-data-itration',
  templateUrl: './data-itration.component.html',
  styleUrls: ['./data-itration.component.css']
})
export class DataItrationComponent {
  empList=[
  {"empno":1231,"empname":"Thangaraj S","age":44,"salary":34567.7734,"hobbies":["Singing","Dancing","Swimming","Fishing"]},
  {"empno":1232,"empname":"Rahul Ghali","age":55,"salary":12345.6698,"hobbies":["Singing","Dancing","Swimming"]},
  {"empno":1233,"empname":"Sindhu Nambiar","age":66,"salary":34343.9967,"hobbies":["Singing","Dancing","Fishing"]},
  {"empno":1234,"empname":"Yadavi N Swamy","age":77,"salary":23232.4456,"hobbies":["Singing","Dancing","Swimming","Reading"]},
  {"empno":1235,"empname":"Varun Raghav","age":33,"salary":25356.8832,"hobbies":["Singing","Swimming","Fishing"]},
  {"empno":1236,"empname":"Virat Kohli","age":22,"salary":23311.5455,"hobbies":["Singing","Dancing","Swimming","Fishing","Reading"]},
  ];

  isHidden:boolean=false;
  showHideSalary()
  {
    this.isHidden=!this.isHidden;
  }

  applyClass1:boolean=false;
  applyClass2:boolean=true;

  backgroundColor:String="yellow";
  fontColor:String="green";
  fontSize:String="30px"
 
 
  changeColor:String;
 
  toggleClass()
  {
    this.applyClass1=!this.applyClass1;
    this.applyClass2=!this.applyClass2;
  }
}
