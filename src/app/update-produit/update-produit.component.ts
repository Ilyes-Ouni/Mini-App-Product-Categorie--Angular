import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../modèle';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  currentProduit:any;
  categories:any;
  updatedCatId! : number;

constructor(private activatedRoute: ActivatedRoute, private produitService: ProduitService, private router :Router) { }

  ngOnInit() {
    this.categories = this.produitService.listeCategories();
    console.log(this.categories)
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id'])

  }

  updateProduit() {
    this.currentProduit.categorie=this.produitService.consulterCategorie(this.updatedCatId);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
    // .subscribe((prod:any) => {
    //   this.router.navigate(['produits']);
    // },(error) => { alert("Problème lors de la modification !"); }
    // );
  }

}
