import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { Produit } from '../modèle';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  nomProduit:string='';
  produits! : Produit[];
  IdCategorie! : number;
  categories! : Categorie[];
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
    this.produits = this.produitService.listeProduit()
  }

  rechercherProds(){
    console.log(typeof(this.nomProduit))
    if(this.nomProduit == '' || !this.produits) 1
    else this.produits = this.produitService.rechercherParNom(this.nomProduit)
  }

}
