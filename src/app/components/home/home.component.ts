import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, NavigationEnd , ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  somePoperty = true;


  constructor(private router:Router, private route: ActivatedRoute) {
    
  }

  sendAllPackages(){ 

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data":"All"
      }
    }
    this.router.navigate(["package-list"],navigationExtras);
  }
  showNavBar(){
    $(".secondBar").toggleClass("pRotate");
        $(".thirdBar").toggleClass("nRotate");
        $(".firstBar").toggleClass("hide");
        $(".fourthBar").toggleClass("hide");
        $('.menuScreen').toggleClass('displayBlock');
        $('body').toggleClass('stopScroll');
  }

  ngOnInit() {
    
    console.log(this.router.url);
  }

}
