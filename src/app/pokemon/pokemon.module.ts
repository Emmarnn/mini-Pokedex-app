import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuard  } from '../auth.guard';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';


const pokemonRoutes: Routes = [
  {
    path: 'pokemons', 
    component: ListPokemonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pokemon/:id', 
    component: DetailPokemonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/pokemon/:id', 
    component: EditPokemonComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'add/pokemon', 
    component: AddPokemonComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    SearchPokemonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PokemonModule { }
