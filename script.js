// 1. first select the body and the exisitng div 
const body = document.querySelector("body");

const inputForm = document.createElement("form");
inputForm.innerHTML = `
        <label for="number"> Enter a number</label>
        <input type="number" id="number" name="number" min="1" max="100" required>
        <input type="submit" id="submit" name="submit">
`
// append the form to the body 
body.prepend(inputForm);


// 2. create the form element with input type number and next one with submit type 
const container = document.querySelector("#grid-container");
// style to the grid container
if (container) {
    container.setAttribute("style", `
    display: flex;
    flex-wrap:wrap;
    border: 1px solid black;
    box-sizing: border-box;
    width: 960px;
    height: 960px;
    align-content: stretch;
    border-radius: 5px;`);

}

// function to create a n x n grid inside the container
function squareGrid(n) {
    if (!container) return; // if container is not extist then return
    container.innerHTML = ""; //clear the container if the grid exist

    /*
        || operator returns the right side of value i.e truthy if the left
        side is falsy value and vice versa.
        here n is return and if the n is not a number or flasy then return 0 
        instead of NaN.

        Math.max(1, Number(n) || 0) will return the maximum value between
        1 and the value of n or 0.
        so if n is not a number or flasy then it will return 0 and the
        Math.max(1, 0) will return 1.
        if n is a number then it will return the maximum value between
        1 and the value of n.
        so the size of the grid will be at least 1 and at most 100.
    */ 
    const size = Math.max(1, Number(n) || 0); // get the size of grid
    for (let i = 0; i < size * size; i++){
        // create the grid cell and pass the style 
        const gridCell = document.createElement("div");
        gridCell.className = "item";
        gridCell.style.cssText = `
            box-sizing : border-box;
            border: 1px solid black; 
            flex: 0 0 calc(100% / ${size});
            height : calc(100% / ${size});
            `;

        
        /*
            flex: 0 0 calc(100% / ${size});
            for flex grow and shrink is set to 0 which means fixed size
            and the basis size is set to calc(100% / ${size}) which means
            the size of the cell will be 100% divided by the number 
            of cells in a row or column.

            height : calc (100% / ${size}); 
            the height of the cell will be 100% divided by the number
            of cells in a row or column.
        */ 
       container.appendChild(gridCell);
    }
}



// check condition
if (typeof inputForm !== "undefined") {
    // crate the event listener for the form
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault(); //prevent the default behaviour of the form

        /*
            ?. IS CALLED OPTIONAL CHAINING OPERATOR. It checks 
            if value  is exist befor ?. i.e document.getElementById("number") 
            then it will return or give the value if it won't exist 
            and it will return undefined. instead of throwing an error.
    
            so there if number then give value if not give undefined.
        */
        const value = Number(document.getElementById("number")?.value);

        // pass the value to the function squareGrid
        squareGrid(value);


    });

}

// event delegation
    container.addEventListener("mouseover", (e) => {
        if(e.target.classList.contains("item")){
            e.target.style.backgroundColor = "black";  
        }
    });