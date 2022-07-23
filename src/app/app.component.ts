import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName: string = '';
  members : string[] = [];
  errorMessage = ''; 
  addMember(){
    if(!this.newMemberName){
      this.errorMessage = 'Name cant be empty';
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }
  addInput(member: string){
    this.newMemberName = member;
  }
}

