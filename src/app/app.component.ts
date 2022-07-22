import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName: string = "";
  members : string[] = [];
  addMember(){
    this.members.push(this.newMemberName);
  }
  addInput(member: string){
    this.newMemberName = member;
  }
}

