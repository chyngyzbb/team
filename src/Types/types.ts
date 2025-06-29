 
 export interface MessageType{
   // id: string
     message: string,
    date: string,
    recipient: string,
    sender: string,
    settings:SettingsType
    // id: string
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