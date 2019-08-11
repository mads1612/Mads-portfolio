window.addEventListener("load", sideVises);

function sideVises() {
    console.log("sideVises");

    //click menu knap -> menuKnapDisplay
    document.querySelector("#menuknap").addEventListener("click", menuKnapDisplay);
    //hide tema container
    document.querySelector("#tema-container1").classList.add("hide");
    document.querySelector("#tema-container2").classList.add("hide");
    document.querySelector("#tema-container3").classList.add("hide");
    document.querySelector("#tema-container4").classList.add("hide");
    //click tema knap -> temaContainerToggle
    document.querySelector("#tema1-btn").addEventListener("click", temaContainerToggle);
    document.querySelector("#tema2-btn").addEventListener("click", temaContainerToggle);
    document.querySelector("#tema3-btn").addEventListener("click", temaContainerToggle);
    document.querySelector("#tema4-btn").addEventListener("click", temaContainerToggle);
    //click tema knap -> hideTemaContainer
    document.querySelector("#tema1-btn").addEventListener("click", hideTemaContainers234);
    document.querySelector("#tema2-btn").addEventListener("click", hideTemaContainers134);
    document.querySelector("#tema3-btn").addEventListener("click", hideTemaContainers124);
    document.querySelector("#tema4-btn").addEventListener("click", hideTemaContainers123);
}
