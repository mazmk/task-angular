import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { PeriodicElement } from '../table-view/table-view-data';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss'],
})
export class EditTeacherComponent {
  editing: boolean = false;
  editinId: null | string = null;
  allSubjects: string[] = ['Math', 'Biology', 'Economics'];
  form: FormGroup = new FormGroup({
    lNameAr: new FormControl('', [Validators.required]),
    fNameEn: new FormControl('', [Validators.required]),
    fNameAr: new FormControl('', [Validators.required]),
    lNameEn: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    teacherId: new FormControl('', [Validators.required]),
    picture: new FormControl({value:'', disabled: true}),
    subjects: new FormControl('', [Validators.required]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
    private dialogRef: MatDialogRef<EditTeacherComponent>
  ) {
    if (data) {
      console.log(data);
      this.editing = true;
      const names = data.name.split(' ');
      this.form.patchValue({
        lNameAr: names[1],
        fNameEn: names[0],
        fNameAr: names[0],
        lNameEn: names[1],
        gender: data.gender,
        birthDate: data.birthDate,
        email: data.email,
        teacherId: data.teacherId,
        picture: '',
        subjects: data.subjects,
      });
    }
  }

  clearVal(event: any) {
    let input = [...event.target.parentNode.parentNode.children][1].children[0];
    input.value = '';
  }

  submit(event: any) {
    event.preventDefault();
    if (!this.form.valid) {
    } else {
      const data = this.form.value;
      data.class = data.subjects.join();
      data.name = data.fNameEn + ' ' + data.lNameEn;
      const today = data.birthDate;
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1;
      let dd = today.getDate();
      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      data.birthDate = dd + '/' + mm + '/' + yyyy;
      this.dialogRef.close({ ...data, editinId: this.editinId });
    }
    debugger;
  }
  closeModal(){
    this.dialogRef.close(false);
  }
}
