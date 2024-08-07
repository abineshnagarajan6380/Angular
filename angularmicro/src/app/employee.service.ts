import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string;
  employeeArr : Employee[];
  employee : Employee;

  constructor(private http: HttpClient) {//for to get services
    this.url="http://localhost:3004/employees";
    this.employee= new Employee();
    this.employeeArr = [];
   }
  insertsales(employee : Employee){
    this.http.post<Employee>(this.url,employee).subscribe();
    return "Product Details Added";
  }
  updatesales(employee : Employee){
    this.http.put<Employee>(this.url+"/"+employee.id,employee).subscribe();
    return "Product Details Updated";
  }
  deletesales(saleq:number){
    this.http.delete<Employee>(this.url+"/"+saleq).subscribe();
    return "Product Details Deleted";
  }
  findsales(saleq:number){
    this.http.get<Employee>(this.url+"/"+saleq).subscribe(data => this.employee = data );
    return this.employee;
    
  }
  findAllsales(){
    this.http.get<Employee[]>(this.url).subscribe(data => this.employeeArr = data );
    return this.employeeArr;
  }
}
