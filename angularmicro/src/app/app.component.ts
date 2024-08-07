import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  sales : Employee;//model class
 
  result : string;
  salesArr : Employee[];
  flag : boolean;
  

  constructor(private service : EmployeeService){
    this.sales = new Employee();
   
    this.result="";
    this.salesArr=[];
    this.flag= false;
  }

  insertsales(data: any){
   
    this.sales.ItemName = data.ItemName;
    this.sales.id = data.saleq;
    this.sales.Price = data.Price;
    alert(data.saleq+ " " +data.ItemName+ " " +data.Price);
   
    this.result = this.service.insertsales(this.sales);
  }
   updatesales(data : any){
    this.sales.id = data.saleq;
    this.sales.ItemName = data.ItemName;
    this.sales.Price = data.Price;
    alert(data.saleq+ " " +data.ItemName+ " " +data.Price);
    this.result = this.service.updatesales(this.sales);
   }
   deletesales(data: any){
    alert(data.saleq+ " " +data.ItemName+ " " +data.Price);
    this.result = this.service.deletesales(data.saleq);
   }
   findsales(data: any){
    
    this.sales= this.service.findsales(data.saleq);
    this.result=this.sales.id+ " " + this.sales.ItemName + " " + this.sales.Price;
   }
   findAllsales(){
    this.salesArr = this.service.findAllsales();
    this.flag=true;
   }
}
 