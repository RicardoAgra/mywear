( function(){
  "use strict";
  
  
  /* ---- STICKY NAVIGATION ---- */
  var navbar = $( '.js-navbar' );
  
  $( '.js-features' ).waypoint( function( direction ) {
    
    if( direction === "down" ){
      navbar.addClass( "sticky" );
    }
    
    else{
      navbar.removeClass( "sticky" );
    }

  },{ offset: '50px;' } );
  
  

  /* ---- NAVIGATION ---- */  
  var sections = {
    features: document.querySelector( ".js-features" ),
    app : document.querySelector( ".js-app" ),
    location : document.querySelector( ".js-location" ),
    plans : document.querySelector( ".js-plans" ),
  }
  
  var offset = 0;

  document.querySelector( "#js-nav-features" ).onclick = function() {
    window.scroll( { top: sections.features.offsetTop-offset, behavior: "smooth" } );
  };
  
  document.querySelector( "#js-nav-app" ).onclick = function() {
    window.scroll( { top: sections.app.offsetTop-offset, behavior: "smooth" } );
  };
  
  document.querySelector( "#js-nav-location" ).onclick = function() {
    window.scroll( { top: sections.location.offsetTop-offset, behavior: "smooth" } );
  };
  
  document.querySelector( "#js-nav-plans" ).onclick = function() {
    window.scroll( { top: sections.plans.offsetTop-offset, behavior: "smooth" } );
  };
  
  
  document.querySelector( "#js-btn-plans" ).onclick = function() {
    window.scroll( { top: sections.plans.offsetTop-offset, behavior: "smooth" } );
  };
  
  document.querySelector( "#js-btn-features" ).onclick = function() {
    window.scroll( { top: sections.features.offsetTop-offset, behavior: "smooth" } );
  };
  
})();