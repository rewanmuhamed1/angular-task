export interface User {
    id: number;
    first_name: string;
    last_name : string;
    email: string;
    avatar: string;
  
   
}
export interface Data {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    users:User[]
}
   