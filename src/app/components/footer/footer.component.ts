import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, NavigationEnd } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  sendAllPackages(){ 

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data":"All"
      }
    }
    this.router.navigate(["package-list"],navigationExtras);
  }

  ngOnInit() {
    $('.input-group input').focus(function(){
      $(this).siblings().addClass('focused');
    })

  $('.input-group input').focusout(function(){
    var text_val = $(this).val();
    if(text_val === ""){
       $(this).siblings().removeClass('focused');
    }
    else{
      $(this).siblings().addClass('focused');
    }
      
  })

  }

}
