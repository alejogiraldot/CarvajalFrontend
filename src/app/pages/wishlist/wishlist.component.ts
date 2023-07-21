import { Component, OnInit } from '@angular/core';
import { DesiredList } from '../models/desiredList';
import { Product } from '../models/products';
import { productService } from './../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Historical } from '../models/Historical';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit{
  wishlist!: DesiredList[];
  products: Product[] = [];

  
  constructor(private productService:productService,private snack:MatSnackBar) { 
  

  }

  ngOnInit(): void {
    this.findAll();
  }

  deleteProductDesiredList(productId: number) {
    this.productService.deleteDesiredList(productId).subscribe(
      (data:any)=>{
        this.findAll();
        this.saveHistorical(productId);
      },(error) => {
        console.log(error)
      })
      
  }

  saveHistorical(productId: any){
    let historical = new Historical(productId,2,new Date(),"producto eliminado de la lista de deseos");
    this.productService.saveHistorical(historical).subscribe(
      (data:any)=>{
      },(error) => {
        console.log(error);
      })
  }

  findAll(){
    this.wishlist = [];
    this.productService.desiredList(2).subscribe(
      (data:any)=>{
        this.wishlist = data;
        this.printWishList();
      },(error) => {
        console.log(error)
      })
  }

  printWishList(){
    this.products = [];
    for(let p of this.wishlist){
      this.productService.findProductById(p.productId).subscribe(
        (data:any)=>{
          this.products.push(data);
        },(error) => {
          console.log(error);
        })
    }

  }
} 
