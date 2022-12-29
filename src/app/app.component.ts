import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// export interface Usermodel {
//   bandId : string,
//   businessUnit : string,
//   contact : number,
//   designation : string,
//   email : string,
//   employeeId : number, 
//   employeeName : string, 
//   password : string
// }


export class Usermodel {
  constructor(
    public bandId : string,
    public businessUnit : string,
    public contact : number,
    public designation : string,
    public email : string,
    public employeeId : number, 
    public employeeName : string, 
    public password : string
    ){}
}

export class Objectivemodel {
  constructor(
    public objId : number,
    public objName : string,
    public objDescription : number,
    public startDate : Date,
    public endDate : Date,
    public businessUnit : string, 
    public objOwnerId : number, 
    ){}
}

export class testinp {
  constructor(
    public i : number
    ){}
}
// export interface PeriodicElement {
//   empid: number;
//   empname: string;
//   empdesig: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'testdashboard';
  // ELEMENT_DATA: PeriodicElement[]=[];
  constructor(private st : TestService){}
  // public users : Usermodel[] = [];
  public objs : Objectivemodel[] = [];
  //public tinp !: testinp;
  public tinp = new testinp(8);
  
     //public users : Usermodel[] = [];
  // columns = [
  //   {
  //     columnDef: 'position',
  //     header: 'No.',
  //     cell: (element: PeriodicElement) => `${element.position}`,
  //   },
  //   {
  //     columnDef: 'name',
  //     header: 'Name',
  //     cell: (element: PeriodicElement) => `${element.name}`,
  //   },
  //   {
  //     columnDef: 'weight',
  //     header: 'Weight',
  //     cell: (element: PeriodicElement) => `${element.weight}`,
  //   },
  //   {
  //     columnDef: 'symbol',
  //     header: 'Symbol',
  //     cell: (element: PeriodicElement) => `${element.symbol}`,
  //   },
  // ];

  columns = [
    {
      columnDef: 'objId',
      header: 'Objective ID',
      cell: (element:Objectivemodel) => `${element. objId}`,
    },
    {
      columnDef: 'objName',
      header: 'Objective Name',
      cell: (element: Objectivemodel) => `${element.objName}`,
    },
    {
      columnDef: 'objDescription',
      header: 'Objective Description',
      cell: (element: Objectivemodel) => `${element.objDescription}`,
    }
  ];
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns = this.columns.map(c => c.columnDef);
  //dataSource = this.ELEMENT_DATA;
  //dataSource: Objectivemodel[]=[];
  dataSource : any;
  
  ngOnInit(){
    //   this.st.getDt().subscribe(data=>{
    //   console.log(data);
    //   this.dataSource = data;
    // })
    // this.st.getDt().subscribe(data=> this.users = data);
    // console.log(this.users);
   
    // for(let i : ThisParameterType.user)
     //this.tinp.i=1;
    // let resp=this.st.getObj(this.tinp);
    // resp.subscribe(data => {
    //   this.dataSource =data)
    //   ;

      // this.st.getObj(this.tinp).subscribe(data=>{
      //     console.log(data);
      //     this.dataSource = data;
      //   })
      this.st.getObj(this.tinp).subscribe(data=>{
      console.log(data);
      this.dataSource = data;
    })
  }
  onclick(){
    console.log(this.objs);
  }
}

