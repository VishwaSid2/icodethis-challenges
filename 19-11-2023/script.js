const text = `
Mauris libero vestibulum ullamcorper phasellus cursus quisque, ut litora tempus.`;
setInterval(() => {
  console.log(text);
}, 5000);

const texts =document.querySelectorAll(".text");
 for (let txt of texts){
  txt.textContent=text
 }
