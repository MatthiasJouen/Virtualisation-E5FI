import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Virtualisation';
  
  ngOnInit(): void {

    //Gestion d'une clé localStorage pour stocker les données de l'utilisateur
    const localStorageTest = 'LocalStorageTest';
    if(localStorage.getItem('LocalStorageTest') === null) {
      localStorage.setItem(localStorageTest, 'neverClicktoTop');
    }

  }
  
}



