import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
acno=""
psw=""
amnt=""
accno=""
pasw=""
amont=""
user=""
constructor(private ds:DataService){
  //access username
  this.user=this.ds.currentuser
}


deposite(){
var acno=this.acno
var psw=this.psw
var amnt=this.amnt

const result=this.ds.deposite(acno,psw,amnt)

if(result){
  alert(`${amnt} credited to your ac and the balance is ${result}`)
}
else{
  alert('incurrect acno or password')
}

}

withdraw(){
  

  var accno=this.accno
  var pasw=this.pasw
  var amont=this.amont
  const result=this.ds.withdraw(accno,pasw,amont)
  if(result){
    alert(`${amont} debited to your ac and the balance is ${result}`)
  }
}
}


