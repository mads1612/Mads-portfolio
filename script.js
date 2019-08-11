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

function temaContainerToggle() {
    console.log("temaContainerToggle");
    // toggle mellem hide af tema container udfra statement true eller false
    document.querySelector("#tema-container1").classList.toggle("hide");
    document.querySelector("#tema-container2").classList.toggle("hide");
    document.querySelector("#tema-container3").classList.toggle("hide");
    document.querySelector("#tema-container4").classList.toggle("hide");
    //Hvis tema 1, 2, 3 og 4 har class hide skal den fjernes
    let VisTema1 = document.querySelector("#tema-container1").classList.remove("hide");
    let VisTema2 = document.querySelector("#tema-container2").classList.remove("hide");
    let VisTema3 = document.querySelector("#tema-container3").classList.remove("hide");
    let VisTema4 = document.querySelector("#tema-container4").classList.remove("hide");

    //Her tjekkes der om tema1 har class hide
    if (VisTema1 == true) {
        document.querySelector("#tema-container1").classList.add = "hide";
    } else window.scrollTo(0, 100); {
        document.querySelector("#tema-container1").classList.remove = "hide";
    }
    //Her tjekkes der om tema2 har class hide
    if (VisTema2 == true) {
        document.querySelector("#tema-container2").classList.add = "hide";
    } else window.scrollTo(0, 100); {
        document.querySelector("#tema-container2").classList.remove = "hide";
    }
    //Her tjekkes der om tema3 har class hide
    if (VisTema3 == true) {
        document.querySelector("#tema-container3").classList.add = "hide";
    } else window.scrollTo(0, 100); {
        document.querySelector("#tema-container3").classList.remove = "hide";
    }
    //Her tjekkes der om tema4 har class hide
    if (VisTema4 == true) {
        document.querySelector("#tema-container4").classList.add = "hide";
    } else window.scrollTo(0, 100); {
        document.querySelector("#tema-container4").classList.remove = "hide";
    }
}
