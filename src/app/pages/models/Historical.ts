export class Historical {
    id! : number;
    userId : number;
    productId : number;
    date : Date;
    description: string;

    constructor( productId:number, userId:number, date : Date, description: string) {
        this.productId=productId;
        this.userId=userId;
        this.date = date;
        this.description = description;
    }
  }