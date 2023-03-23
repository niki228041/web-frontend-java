
export interface FormValues{
  name:string,
  description:string,
  photo:File|null
}

export interface FormProductCreate{
  name:string,
  description:string,
  photos:Array<File>,
  price:number,
  category_id:number
}


export interface EditFormValues{
  id:number,
  name:string,
  description:string,
  photo:File|null
}


export type Category = {
  name: string;
  description: string;
  id: number;
  photo_name: string;
};

export type Product = {
  id:number,
  name:string,
  descriprion:string,
  price: number,
  category_id: number,
  imagesInBytes:[{}]
}

export type ProductItem = {
  id:number,
  name:string,
  descriprion:string,
  price: number,
  category_id: number,
  images:String[]
}

export type ProductCreate = {
  name:String,
  descriprion:String,
  price: Number,
  category_id: Number,
  images:Array<File>
}

export type ProductIdRequest = {
  id:String
}

// {
//   "name": "string",
//   "descriprion": "string",
//   "price": 0,
//   "category_id": 0,
//   "imagesInBytes": [
//     "string"
//   ]
// }