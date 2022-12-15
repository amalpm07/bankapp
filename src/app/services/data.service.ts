import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails:any
  currentuser=""
  currentacno=""

  constructor() {
    this.getdetailes()
   }
  savedetailes(){
    if(this.userDetails){
      localStorage.setItem("database",JSON.stringify(this.userDetails))
    }
    if(this.userDetails){
      localStorage.setItem("currentuser",JSON.stringify(this.currentuser))
    }
    if(this.userDetails){
      localStorage.setItem("currentacno",JSON.stringify(this.currentacno))
    }
  }

  getdetailes(){
    if(localStorage.getItem('database')){
      this.userDetails=JSON.parse(localStorage.getItem('database') || '') 
    }
    if(localStorage.getItem('currentuser')){
      this.currentuser=JSON.parse(localStorage.getItem('currentuser') || '')
    }
    if(localStorage.getItem('currentacno')){
      this.currentacno=JSON.parse(localStorage.getItem('currentacno') || '')
    }
  }

  // userDetails:any={
  //   1000:{acno:1000,username:"anu",password:123,balance:0,transaction:[]},
  //   1001:{acno:1001,username:"amal",password:123,balance:0,transaction:[]},
  //   1002:{acno:1002,username:"arun",password:123,balance:0,transaction:[]},
  //   1003:{acno:1003,username:"mega",password:123,balance:0,transaction:[]},
  // }

  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if (acno in userDetails) {
      return false
    }
    else{
      userDetails[acno]={acno,username:uname,password:psw,balance:0,transaction:[]}
      this.savedetailes()
      return true
    }

  }
  login(acno:any,psw:any){
    var userDetails=this.userDetails
    if (acno in userDetails) {
      if (psw==userDetails[acno]["password"]) {
        //store acno
        this.currentacno=acno
        //store user name
        this.currentuser=userDetails[acno]["username"]
        this.savedetailes()
       return true
      }
      else{
       return false
      }
    }
    else{
      return false
    }
  
  }

  deposite(acno:any,password:any,amount:any){
    var userDetails=this.userDetails
    var amnt=parseInt(amount)
    if(acno in userDetails){
      if(password==userDetails[acno]["password"]){
        userDetails[acno]["balance"]+=amnt
        userDetails[acno]["transaction"].push({type:'CREDIT',amount:amnt})
        this.savedetailes()
        return userDetails[acno]["balance"]
      }
      else{
        return false
      }
      
    }
    else{
      return false
    }

  }

  withdraw(acno:any,password:any,amount:any){
     var userDetails=this.userDetails
     var amnt=parseInt(amount)
     if(acno in userDetails){
      if(password==userDetails[acno]["password"]){
        if(amnt<=userDetails[acno]["balance"]){
        userDetails[acno]["balance"]-=amnt
        userDetails[acno]["transaction"].push({type:'DEBIT',amount:amnt})
        this.savedetailes
        return userDetails[acno]["balance"]
        }
        else{
          alert('insufficient balance')
          return false
        }
      }
      else{
        alert('incurrect password')
        return false
      }
     }
     else{
      alert('incurrect ac no')
      return false
     }
  }

  gettransaction(acno:any){
    return this.userDetails[acno]["transaction"]
  }
}




