// var button = document.querySelector("#button");
// var modal = document.querySelector("#modal");
// var close = document.querySelector("#close");

// button.addEventListener("click", function(){
//     modal.classList.add("modal_active");
// });

// při kliknutí na tlatčítko jsme tlačítku přidali classu modal active

// close.addEventListener("click", function(){
//     modal.classList.remove("modal_active");
// });

/* dali jsme btn se znamením křížku id close které jsme
přidali event při kliknutí odebrání class active díky tomu se okno zavře  */

$(document).ready(function(){
  // Napojeni knihovny wow JS
  new WOW().init();

    var button = $("#button");
    var modal = $("#modal");
    var close = $("#close");

    button.on("click", function(){
        modal.addClass("modal_active");
    });

    close.on("click", function(){
        modal.removeClass("modal_active");
    });

    $(".slider").slick({
        slidesToShow: 3,
        prevArrow: $(".arrows__left"),
        nextArrow: $(".arrows__right"),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });      
});