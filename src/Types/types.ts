 
 export interface MessageType{
     message: string,
    date: string,
    recipient: string,
    sender: string,
    settings:SettingsType
 }

 export interface MessageTypeId extends MessageType{
    id:string
 }


 export interface SettingsType{
    visibility:boolean,
    copy:boolean,
    delete:boolean,
    edit:boolean,
    reading:boolean
 }

 export interface Product extends NewProduct {
  _id: string;
}

export interface NewProduct {
  name: string;
  price: string;
  image: string;
  user: string;
  client: string[];
}