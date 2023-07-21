export class DesiredList {
    id! : number;
    userId : number;
    productId : number;

    constructor( productId:number, userId:number ) {
        this.productId=productId;
        this.userId=userId;
        
    }
  }