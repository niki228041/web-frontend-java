
export interface FormValues{
  name:string,
  description:string,
  photo:File|null
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
