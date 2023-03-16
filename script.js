let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let title = document.getElementById("main-title")
  title.textContent = "The DOM Zone";

  // Part 2

  let body = document.querySelector("body")
  body.style.backgroundColor = "#006400";

  // Part 3

  let favoriteList = document.getElementById("favorite-things")
  let lastItem = favoriteList.lastElementChild
  lastItem.remove()

  // Part 4

  const specTitles = document.querySelectorAll(".special-title")
  specTitles.forEach((title) => {
    title.style.fontSize = "2rem"
  })

  // Part 5

  const pastRaces = document.getElementById("past-races")
  const locations = pastRaces.getElementsByTagName("li")
  const chicagoText = "Chicago";
  for(const li of locations){
    if (li.textContent === chicagoText){
      li.remove();
    }
  }


  // Part 6

  const dallas = document.createElement("li")
  dallas.textContent = "Dallas";
  pastRaces.append(dallas)

  // Part 7

  const main = document.querySelector(".main")
  const dallasPost = document.createElement("div")
  const dallasPostH = document.createElement("h1")
  const dallasPostT = document.createElement("p")
  main.append(dallasPost)
  dallasPost.append(dallasPostH, dallasPostT)
  dallasPost.className = "blog-post purple"
  dallasPostH.textContent = "Dallas"
  dallasPostT.textContent = "I TOTALLY GOT A PARKING TICKET!"
  


  // Part 8
  // Query select the #quote-titleID element and add a click 
  // event handler. That event handler should use the function 
  // randomQuotewhenever #quote-titleis clicked.

  const quoteTitle = document.getElementById("quote-title")
  quoteTitle.addEventListener("click", (e) => {
    randomQuote()
  })


  // Part 9
  /*
  Select all .blog-postclass elements. Iterate through the list of .blog-postclass 
  elements and apply two event handlers to each node. The first event handler should 
  be listening for mouseoutevents while the second handler should be listening for 
  mouseenterevents.

The mouseouthandler should toggle the class .purple
The mouseenterhandler should toggle the class .red
Test it out!

Hint:

Remember the document node property .classListand the document node method .toggle().
*/

  const blogPosts = document.querySelectorAll(".blog-post")
  for(const post of blogPosts) {
    post.addEventListener("mouseleave", (e) => {
      post.classList.toggle("purple")
      post.classList.toggle("red")
    })
    post.addEventListener("mouseenter", (e) => {
      post.classList.toggle("red")
      post.classList.toggle("purple")
  
    })  
  }  
});
