import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { plan } from 'src/app/interfaces/plan';
import {MatDialog} from '@angular/material/dialog';
import { CrearEditarPlanComponent } from '../crear-editar-plan/crear-editar-plan.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: plan[] = [
  {id: 23, plan: 'plan-2022', estado: 'en curso', fechaI: new Date(), fechaF: new Date()},
  {id: 5221, plan: 'plan-2023', estado: 'en curso', fechaI: new Date(), fechaF: new Date()},
  {id: 312, plan: 'plan-2024', estado: 'en curso', fechaI: new Date(), fechaF: new Date()},
  {id: 4, plan: 'plan-2025', estado: 'en curso', fechaI: new Date(), fechaF: new Date()},
  {id: 5, plan: 'plan-2026', estado: 'en curso', fechaI: new Date(), fechaF: new Date()},
  {id: 6, plan: 'plan-2027', estado: 'en curso', fechaI: new Date(), fechaF: new Date()},
];

@Component({
  selector: 'app-listar-planes',
  templateUrl: './listar-planes.component.html',
  styleUrls: ['./listar-planes.component.css']
})
export class ListarPlanesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'plan', 'estado', 'fechaI', 'fechaF', 'acciones'];
  dataSource: MatTableDataSource<plan>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = 'Elementos por página';
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addEditPlan(): void {
    const dialogRef = this.dialog.open(CrearEditarPlanComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
