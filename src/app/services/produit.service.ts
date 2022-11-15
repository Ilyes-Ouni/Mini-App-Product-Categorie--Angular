import { Injectable } from '@angular/core';
import { Produit } from '../modèle';
import { elementAt, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categorie } from '../categorie';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
providedIn: 'root'
})
export class ProduitService {
  produit!: Produit;
  produits!: Produit[]; //un tableau de Produit
  apiURL:string = environment.apiURL;
  categories!: Categorie[];

 constructor(private http: HttpClient) {
    this.categories = [
      {idCat : 1, nomCat : "PC"},
      {idCat : 2, nomCat : "Imprimante"}
    ];

    this.produits = [
      { idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011"), categorie : {idCat : 1, nomCat : "PC"}},
      { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010"), categorie : {idCat : 2, nomCat : "Imprimante"}},
      { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020"),categorie : {idCat : 1, nomCat : "PC"}}
    ];
 }

  listeProduit(){
    return this.produits
  }

  ajouterProduit( prod: Produit){
    console.log(prod)
    this.produits.push(prod)
  }

  supprimerProduit(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }

    consulterProduit(id: number){
      return this.produits.find((element:any) => element.idProduit == id);
    }

    updateProduit(prod :Produit){
      this.produits.forEach((part)=>{
        console.log(part)
      })
        // element.idProduit == prod.idProduit);
      // return this.http.put<Produit>(this.apiURL, prod, httpOptions);
    }


  trierProduits(){
    this.produits = this.produits.sort((n1:any,n2:any) => {
      if (n1.idProduit > n2.idProduit) {
        return 1;
      } if (n1.idProduit < n2.idProduit) {
        return -1;
      }
        return 0;
    });
  }

  listeCategories():Categorie[] {
    return this.categories;
  }

  consulterCategorie(id:number): Categorie{
    return this.categories.find(cat => cat.idCat == id)!;
  }

  rechercherParCategorie(idCat: number){
    return this.produits.filter(prod => prod.categorie.idCat == idCat)!;
  }

  rechercherParNom(nom: string){
    return this.produits.filter(prod => prod.nomProduit.toLowerCase() == nom.toLowerCase())!;
  }
}
