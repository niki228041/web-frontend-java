
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
