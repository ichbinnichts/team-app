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
  numOfTeams: number | '' = '';
  teams: string[][] = [];
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
  teamInput(nuOfTeams: string){
    this.numOfTeams = Number(nuOfTeams);
  }
  generateTeams(){
    if(!this.numOfTeams || this.numOfTeams <= 0){
      return;
    }
    const allMembers = [...this.members]
    while(allMembers.length){
      for(let i = 0; i < this.numOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if(!member){
          break;
        }
        if(this.teams[i]){
          this.teams[i].push(member);
        }else{
          this.teams[i] = [member];
        }
      }
    }
  }
}

