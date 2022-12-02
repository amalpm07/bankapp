import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim="your perfect banking partner"
  data="Enter Account number"
  acno=''
  psw=''
userDetails:any={
  1000:{accno:1000,username:"anu",password:123,balance:0},
  1001:{accno:1001,username:"amal",password:123,balance:0},
  1002:{accno:1002,username:"arun",password:123,balance:0},
  1003:{accno:1003,username:"mega",password:123,balance:0},
}
// login(){
//   var acno=this.acno
//   var psw=this.psw
//   var userDetails=this.userDetails
//   if (acno in userDetails) {
//     if (psw==userDetails[acno]["password"]) {
      
//     }
//   }
//   else{
//     alert('incurrect username')
//   }

// }
// acnoChange(event:any){
// this.acno=event.target.value



// }
// pswChange(event:any){
  
//   this.psw=event.target.value
// }
// }

login(a:any,b:any){
  this.acno=a.value
  this.psw=b.value
    var acno=this.acno
    var psw=this.psw
    var userDetails=this.userDetails
    if (acno in userDetails) {
      if (psw==userDetails[acno]["password"]) {
        alert("login success")
      }
      else{
        alert('incurrect passsword')
      }
    }
    else{
      alert('incurrect username')
    }
  
  }
}
