{
    /* < script >
        let menuicn = document.querySelector(".menuicn");
    let nav = document.querySelector(".navcontainer");

    menuicn.addEventListener("click", () = > {
            nav.classList.toggle("navclose");
        }) <
        /script> */
}

// Use const instead of let for variables that are not reassigned
const menuIcon = document.querySelector(".menuicn");
const nav = document.querySelector(".navcontainer");

// Use camelCase for variable names
// Add a space before and after the arrow function
// Add a semicolon at the end of the statement
menuIcon.addEventListener("click", () => {
    nav.classList.toggle("navclose");
});