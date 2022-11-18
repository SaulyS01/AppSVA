import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-crear-editar-plan',
  templateUrl: './crear-editar-plan.component.html',
  styleUrls: ['./crear-editar-plan.component.css']
})
export class CrearEditarPlanComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CrearEditarPlanComponent>
  ) {
    
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
