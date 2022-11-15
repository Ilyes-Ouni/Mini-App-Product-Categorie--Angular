import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from "../app/produits/produits.component";
import { AddProduitComponent } from "../app/add-produit/add-produit.component";
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { LoginInterfaceComponent } from './loginComponents/login-interface/login-interface.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProduitGuard } from './produit.guard';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  {path: "login", component : LoginInterfaceComponent},
  {path : "add-produit", component : AddProduitComponent, canActivate:[ProduitGuard]},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "produits", component : ProduitsComponent},
  {path: "add-produit", component : AddProduitComponent},
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path: "", redirectTo: "produits", pathMatch: "full" }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
