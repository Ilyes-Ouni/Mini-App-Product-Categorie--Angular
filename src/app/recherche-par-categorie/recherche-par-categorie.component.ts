import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../categorie';
import { Produit } from '../modèle';
import { AuthService } from '../services/auth.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css'],
})
export class RechercheParCategorieComponent implements OnInit {
  produits!: Produit[];
  IdCategorie!: number;
  categories!: Categorie[];

  constructor(
    private produitService: ProduitService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
    this.produits = this.produitService.listeProduit();
  }

  onChange() {
    this.produits = this.produitService.rechercherParCategorie(this.IdCategorie)

  }

  supprimerProduit(p: any) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.produitService.supprimerProduit(p.idProduit);
      this.produitService.produits.splice(p.idProduit - 1, 1);
    }
  }

  SuprimerProduitDuTableau(prod: Produit) {
    this.produits.forEach((cur: { idProduit?: number }, index: any) => {
      if (prod.idProduit === cur.idProduit) {
        this.produits.splice(index, 1);
      }
    });
  }
}
