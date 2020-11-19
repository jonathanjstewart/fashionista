export class productModel 
{
    _id?: string;
    name: string;
    type: string;
    image: string;
    price: number;
    quantity: number;

    constructor(productmodel: { name:string; type:string; image:string; price:number; quantity:number; _id?:string; })
    {
      this._id = productmodel._id ? productmodel._id : null;
      this.name = productmodel.name;
      this.type = productmodel.type;
      this.image = productmodel.image;
      this.price = productmodel.price;
      this.quantity = productmodel.quantity;
    }
}
