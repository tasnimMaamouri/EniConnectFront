import { AncienEtudiant } from "./AncienEtudiant";

export interface Article{
    id:number;
    title:string;
    content:string;
    videoUrl:string;
    ancienEtudiant:AncienEtudiant;

}