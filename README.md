# **Project-Etch-a-Sketch**

## Description:

This is a simple sketch project made using JavaScript mainly and little bit of css and html.Simlar like of sketch pad where user can hover the mouse aound to draw or write. 


## Features:

- users can input the number to have the desired square box inside the pad 

- and user can hover around the square box to get the color, by default 
the color of the box is set to black 


## Input Control:

- users are allowed to enter a number.
- input must be greater then 1 and smaller than 100
- users are not allowed to enter the string charcters 
- users are not allowed to enter the blank input

## How it works:

 - created a form with the input type of number where min=1  refers to the number must be greater or equall to 1 and max=100 refers to the number must be lower or 
 equall to 100.

   <label for="number"> Enter a number</label>
    <input type="number" id="number" name="number" min="1" max="100" required>
    <input type="submit" id="submit" name="submit">
    
 

  - Another input type with the submit where input number can be submit.  

  - Access the  `grid-container` with the size of 
  960px with both height and width. Provide the style with using  *flexbox property*
  
  - now the input value can be found uisng 
   `const value = Number(document.getElementById("number")?.value);`

  - `[.....] ?. value ` is a optional chaining operator where it works as if the value is found then return that value else returned undfined instead of throwing error.

  - The returned value is then passed  as `n` to the  
  `function squareGrid(n) `

### *1.work flow of* `squareGrid(n)`

- clear out the `grid-container` if the child `div` is there already

- for ```N x N``` grid we first get the number or the input value 
- we use `const size = Math.max(1, Number(n) || 0);` , to check the number `||` is for checking the truthy value in js. like if the number is expected then return that vlaue and again return the max value from it and if the number is falsy then return 0 instead of ```NaN```.

- for loop with the increment of `n * n` 
- create the element `div` 

- acess child div and give the class name `item` and style 
 
- ***height and width adjustment:*** 
    - for height `cal(100% / n)` which divid the 100% hegith with the `n` which how many `row` or `column` we want for example  if we want `4 rows`  then total `100% / 4`  gives the `1/4` of the `height` of each box and for the width, since using the flexbox we use `flex: calc(0 0 100% / n) ` why in `width` but not in `height` ? because 
    flexbox wokrs in ***one direction*** so main axis would in x-axis not in y-axis if the `flex-direciton: row` 
    so, mainly for width we can also use `width: calc(100% / n)` but `flex: calc(0 0 100% / n) ` let the sqaure box with fixed grow and shrink i.e 0 (not allowed) so, it would be kinda robust. so, finally `height` would take exactly `1/n` and `width` would take `1/n` which make the perfect square exatcly fit in `row` and `column` as given in number `n`.

- finally append the child `div` inside the `grid-container` upto the `for loop` ends

### ***work flow of mouseover event listener:***

- create a arrow function `rgbRandom()` where i take `const r, const g, const b` and take the random value for each using 
`Math.floor(Math.random() * 255)` and finally return the all three random rgbs using 
`const rgb = rgb(${r}, ${g}, ${b});
return rgb;
`
- once `grid-container` filled with the `child div` as per given number of child div to be made, add the event listener of `mouseover` directly to the `grid-container` 

- passing condition to the event listener,
if the `e.target.classList.containes("item)` which means if the `child div` with the class name `item` then,
`e.target.styl.backgroundColor = "rgbRandom();` which means change the background of each `child div` to ***random color***.

- **NOTE**: for each loop hasn't used instead use of `event delegation.` instead of running every loop and attaching them a event listner, attached one listner to parent`container`.


# Need improvement:

- I haven't used the `opacity` please feel free to update if anyone got interested in it.

- the height and probaly the width of container is not being fit inside the window or page. 


---

Happy Coding! 😊

  

  