import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
// acno=""
// psw=""
// amnt=""
// accno=""
// pasw=""
// amont=""
user=""
acno:any
dateandtime:any
constructor(private ds:DataService,private fb:FormBuilder,private router:Router){
  //access username
  this.user=this.ds.currentuser
  this.dateandtime=new Date()
}
depositeForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]]
,psw:['',[Validators.required,Validators.pattern('[0-9]+')]]
,amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]
})

ngOnInit():void{
  if(!localStorage.getItem('currentacno')){
    alert('please login first')
    this.router.navigateByUrl('')
  }
}

deposite(){
var acno=this.depositeForm.value.acno
var psw=this.depositeForm.value.psw
var amnt=this.depositeForm.value.amnt

const result=this.ds.deposite(acno,psw,amnt)

if(result){
  alert(`${amnt} credited to your ac and the balance is ${result}`)
}
else{
  alert('incurrect acno or password')
}

}

withdrawForm=this.fb.group({
  accno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pasw:['',[Validators.required,Validators.pattern('[0-9]+')]],
  amont:['',[Validators.required,Validators.pattern('[0-9]+')]]
})

withdraw(){
  

  var accno=this.withdrawForm.value.accno
  var pasw=this.withdrawForm.value.pasw
  var amont=this.withdrawForm.value.amont
  const result=this.ds.withdraw(accno,pasw,amont)
  if(result){
    alert(`${amont} debited to your ac and the balance is ${result}`)
  }
}

logout(){
  localStorage.removeItem('currentuser')
  localStorage.removeItem('currentacno')
  this.router.navigateByUrl('')
}

deleteconfirm(){
this.acno=JSON.parse(localStorage.getItem('currentacno') || "")
}
}


