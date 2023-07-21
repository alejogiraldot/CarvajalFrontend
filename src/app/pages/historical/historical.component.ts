import { Component, OnInit } from '@angular/core';
import { Historical } from '../models/Historical';
import { productService } from 'src/app/services/user.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent {

  historical!: Historical[];
  constructor(private productService:productService) { }

  ngOnInit(): void {
    this.findHistoricalById();

}



findHistoricalById(){
  this.productService.searchHistorical(2).subscribe(
    (data:any)=>{
      console.log(data);
      this.historical = data;
    },(error) => {
      console.log(error)
    })
}


}

