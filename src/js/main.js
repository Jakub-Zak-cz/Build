var button = document.querySelector("#button");
var modal = document.querySelector("#modal");
var close = document.querySelector("#close");

button.addEventListener("click", function(){
    modal.classList.add("modal_active");
});

// při kliknutí na tlatčítko jsme tlačítku přidali classu modal active

close.addEventListener("click", function(){
    modal.classList.remove("modal_active");
});

/* dali jsme btn se znamením křížku id close které jsme
přidali event při kliknutí odebrání class active díky tomu se okno zavře  */