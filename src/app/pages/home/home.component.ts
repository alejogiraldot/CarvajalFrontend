import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { productService } from './../../services/user.service';
import { Product } from '../models/products';
import { DesiredList } from '../models/desiredList';
import { Historical } from '../models/Historical';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
 
  products!: Product[];
  addedProductIds = new Set<number>();
  
  constructor(private productService:productService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.productService.searchProduct().subscribe(
      (data:any)=>{
        console.log(data);
        this.products = data;
      },(error) => {
        console.log(error)
      })
  }
  
  saveHistorical(desiredList: DesiredList){
    let historical = new Historical(desiredList.productId,desiredList.userId,new Date(),"producto agregado a la lista de deseos");
    this.productService.saveHistorical(historical).subscribe(
      (data:any)=>{
        this.products = data;
      },(error) => {
        console.log(error)
      })
      this.findAll();
      
  }


  addDesiredList(id:any){
  // Verificar si el productId ya está en la lista de deseos
  if (this.isProductIdAdded(id)) {
    alert("El producto ya ha sido agregado anteriormente");
  } else {
    let desiredList = new DesiredList(id, 2);
    this.productService.saveDesiredList(desiredList).subscribe(
      (data: any) => {
        this.saveHistorical(desiredList);
        alert("Producto agregado");
        // Agregar el productId al conjunto
        this.addedProductIds.add(id);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
    
    isProductIdAdded(productId: number): boolean {
      return this.addedProductIds.has(productId);
    
    }
}
