import { Genero } from "./Genero";

export interface Catalogo{
  id:number;
  title:string;
  thumbnail:string;
  genre:Genero;
  release_date: string;
}
