export interface BreadCrumbsType {
    text:string,
    href?:string;
    onclick?: ()=> void;
}

export interface UserType{
    uid:string;
    email: string;
    name:string;
    label?:string;
}

export interface UserOption {
    uid: string;
    name: string;
    // Add other properties if necessary
  }