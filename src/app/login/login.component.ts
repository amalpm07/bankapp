import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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

constructor(private router:Router ,private ds:DataService){}
login(){
      var acno=this.acno
      var psw=this.psw
      const result=this.ds.login(acno,psw)
      if(result){
        alert('login success')
        this.router.navigateByUrl('dashbord')
      }
      else{
        alert('incurrect username or password')
      }
     
}
}
// login(a:any,b:any){
//   this.acno=a.value
//   this.psw=b.value
//     var acno=this.acno
//     var psw=this.psw
//     var userDetails=this.userDetails
//     if (acno in userDetails) {
//       if (psw==userDetails[acno]["password"]) {
//         alert("login success")
//       }
//       else{
//         alert('incurrect passsword')
//       }
//     }
//     else{
//       alert('incurrect username')
//     }
  
//   }
// }
