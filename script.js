const accordionButton = document.querySelectorAll(".accordion__question");

accordionButton.forEach((button) => {
    button.addEventListener("click", event => {
        const accordionCollapse = button.nextElementSibling;
        if(!button.classList.contains("open")) {
            accordionCollapse.style.display = "block";
            let accordionHeight = accordionCollapse.clientHeight;
            
            setTimeout(() => {
                accordionCollapse.style.height = accordionHeight + "px";
                accordionCollapse.style.display = "";
            }, 10);
            
            accordionCollapse.classList = "accordion__collapse collapsing";

            setTimeout(() => {
                accordionCollapse.classList = "accordion__collapse collapse open";   
            }, 300);
        }
        else {
            accordionCollapse.classList = "accordion__collapse collapsing";

            setTimeout(() => {
                accordionCollapse.style.height = "0px"
            }, 10);

            setTimeout(() => {
                accordionCollapse.classList = "accordion__collapse collapse";    
                accordionCollapse.style.height = "";
            }, 300);
        }
        button.classList.toggle("open");
    });
});
