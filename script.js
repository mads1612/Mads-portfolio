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

function hideTemaContainers123() {
    console.log("hideTemaContainers123");
    //hide tema container 1, 2 og 3 når der klikkes på tema4 knap
    document.querySelector("#tema-container1").classList.add("hide");
    document.querySelector("#tema-container2").classList.add("hide");
    document.querySelector("#tema-container3").classList.add("hide");
}

function hideTemaContainers234() {
    console.log("hideTemaContainers234");
    //hide tema container 2, 3 og 4 når der klikkes på tema1 knap
    document.querySelector("#tema-container2").classList.add("hide");
    document.querySelector("#tema-container3").classList.add("hide");
    document.querySelector("#tema-container4").classList.add("hide");
}

function hideTemaContainers134() {
    console.log("hideTemaContainers134");
    //hide tema container 1, 3 og 4 når der klikkes på tema2 knap
    document.querySelector("#tema-container1").classList.add("hide");
    document.querySelector("#tema-container3").classList.add("hide");
    document.querySelector("#tema-container4").classList.add("hide");
}

function hideTemaContainers124() {
    console.log("hideTemaContainers124");
    //hide tema container 1, 2 og 4 når der klikkes på tema3 knap
    document.querySelector("#tema-container1").classList.add("hide");
    document.querySelector("#tema-container2").classList.add("hide");
    document.querySelector("#tema-container4").classList.add("hide");
}
