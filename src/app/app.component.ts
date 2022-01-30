import { Component } from '@angular/core';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password='';
  includeLetters=false;
  includeSymbols=false;
  includeNumbers=false;
  length=0;
  constructor(){
    this.password='';
    this.includeLetters=false;
    this.length=0;

  }
onChangeUseLetters(){
  this.includeLetters=!this.includeLetters;
}
onChangeUseNumbers(){
  this.includeNumbers=!this.includeNumbers;
}
onChangeUseSymbols(){
  this.includeSymbols=!this.includeSymbols;
}
onChangeLength(value:any){
  const parsedValue=parseInt(value.target.value);
  if(!isNaN(parsedValue)){
    this.length=parsedValue;
    console.log(this.length);
  }
}

  onButtonClick(){
const symbols='!#%^&@';
const alphabets='abcdefghijklmnopqrstuvwxyz';
const numbers='1234567890';

let validChars='';
if(this.includeLetters){
  validChars=validChars+alphabets;
}
if(this.includeNumbers){
  validChars=validChars+numbers;
}
if(this.includeSymbols){
  validChars=validChars+symbols;
}
let generatedPassword='';
for(let i=0;i<this.length;i++){
const index=Math.floor(Math.random()*validChars.length);
generatedPassword=generatedPassword+validChars[index];

}

this.password=generatedPassword;

  }
}
