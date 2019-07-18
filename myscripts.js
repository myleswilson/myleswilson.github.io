/*
 * Sorry for a bunch of code being commented out.
 * I am just hoarding a bunch of experimental code for now.
 */

//Prints a message in the console showing that JavaScript is working.
console.log('JavaScript is working!')

//Code for the mouse tracking feature of the background.
const image = document.querySelector(".image");
/*const text = document.querySelector(".text");

const image = {...image, ...text };
*/

image.addEventListener("mousemove", (e) => {
        image.style.backgroundPositionX = -e.offsetX + "px";
        image.style.backgroundPositionY = -e.offsetY + "px";
/*
const text = document.querySelector(".text");

text.addEventListener("mousemove", (q) => {
        text.style.backgroundPositionX = -q.offsetX + "px";
        text.style.backgroundPositionY = -q.offsetY + "px";

const stay = document.querySelector(".text");

stay.style.position = 'absolute';
*/

});
