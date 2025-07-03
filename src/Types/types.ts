 
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
export interface AuthState{
    user:null|string,
    loading:boolean,
    error:null|string
}

export interface MessageState{
    message:MessageTypeId[],
    loading:boolean,
    error:null|string
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export interface SearchState{
    search:string,
    loading:boolean,
    error:null|string
}

export interface ProfileState{
    name:string,
    lastname:string,
    tel:string,
    url:string,
    email:string,
    company:string,
    id:string
}
export interface StateProfile{
    profile:ProfileState[],
    loading:boolean,
    error:null|string
}