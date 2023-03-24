import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  

//function pour retourner au top de la page
$(window).scroll(function(){
  var scrollDistance:any = $(this).scrollTop();
  if (scrollDistance > 100) {
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
});

$('.back-to-top').click(function(){
  localStorage.setItem('LocalStorageTest', 'alreadyClicktoTop');
  $("html, body").animate({ 
    scrollTop: 0 
  }, 600);
});