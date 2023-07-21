import { Injectable } from '@angular/core';
import { Product } from '../pages/models/products';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlist: any[] = [];
  private total: number = 0;
  products!: Product[];

  constructor() {
    const wishlistData = localStorage.getItem('wishlist');
    if (wishlistData) {
      this.wishlist = JSON.parse(wishlistData);
    }
  }

  getWishlist(): any[] {
    return this.wishlist;
  }

  addToWishlist(product: any) {
    if (product.stock > 0) {
      const foundProduct = this.wishlist.find((p) => p.id === product.id);
      if (!foundProduct) {
        // Si el producto no está en la lista de deseos, agrégalo y actualiza el total
        this.wishlist.push({ ...product});
        this.saveToLocalStorage();
        alert("se ha agregado a tu lista de deseos!")
      } else {
        // Si el producto ya está en la lista de deseos, aumenta la cantidad y actualiza el total
        this.saveToLocalStorage();
        alert("Ya la tienes agregado a tu lista de deseos !")        
      }
    }else{
      const foundProduct = this.wishlist.find((p) => p.id === product.id);
      if (!foundProduct) {
        // Si el producto no está en la lista de deseos, agrégalo y actualiza el total
        this.wishlist.push({ ...product});
        alert("por lo pronto no hay stock disponible, pero se ha agregado a tu lista de");
        this.saveToLocalStorage();
    }

  }
  }
  removeFromWishlist(productId: number) {
    const foundProduct = this.wishlist.find((product) => product.id === productId);
    if (foundProduct) { // Reduce la cantidad si el producto está en la lista
      this.wishlist = this.wishlist.filter((product) => product.id !== productId);
      this.saveToLocalStorage();
    }
  }

 

  private saveToLocalStorage() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }


}