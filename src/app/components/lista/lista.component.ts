import { Component, OnInit } from '@angular/core';
import { STUDENT_FAKE } from 'src/app/modules/fake-data';

let genderIcon = true;

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  studentList = STUDENT_FAKE;
  constructor() { }

  ngOnInit(): void {
    this.studentList = this.studentList.sort((a, b) => a.surname.localeCompare(b.surname));
  }

  iconSelection() {
    for (let index = 0; index < this.studentList.length; index++) {
      const element = this.studentList[index];
      if (element.gender === 'male') {
        genderIcon = true;
      } else {
        genderIcon = false;
      }
    }
    return genderIcon;
  }
}
