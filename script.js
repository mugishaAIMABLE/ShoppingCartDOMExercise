const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener('click', function(){
        // button.classList.toggle('buy')
        // alertbutton.classList.contains('buy')
        // console.log(e.target)
        // const containers =  document.querySelectorAll('.prod')
        // containers.forEach(function changeBg(container){
        //     container.classList.toggle('bg-green')
        
        const cards = document.querySelector('.prod1');
        // containers.forEach(function(container) {
            console.log("I'm Here")
           cards.classList.toggle('bg-green')
        // });

    });
});



















// // function changeAllArticleColors(){
// //      const onSale = document.querySelectorAll('#products');
// //      for (product of onSale){
// //         product.classList.add('sale')
// //      }
// // }

// // changeAllArticleColors()
// // Get all elements with the class 'buy'

// // Get all elements with the class 'buy'

// const elements = Array.from(document.getElementsByClassName("buy"));
// function attachBuyEvents() {
//   // Loop through each element with the class 'buy'
//   for (let i = 0; i < elements.length; i++) {
//     console.log('loop okay')
//     // Add an event listener to each element for the 'click' event
//     elements[i].addEventListener("click", function () {
//       // Change the background color of the clicked element to green
//       elements[i].classList.toggle('buy')
//       alert('✔')
//     });
//   }
// }

// // Call the function to attach event listeners to the elements with the class 'buy'
// attachBuyEvents();
