//form logic for the overlay




if( document.body.classList.contains('category-beer') || document.body.classList.contains('home') || document.body.classList.contains('guest') ) {

  const form = document.querySelector('form');
  const cks = document.querySelectorAll('input[type=radio]');
  const list = document.querySelector('ul');
  const button = document.querySelector('.button button');
  const reset = document.querySelector('.reset button');
  const span = document.querySelector('.button span');
  let listVals = [];




  form.addEventListener('submit',function(e){
    e.preventDefault();
    // get all checked items
    const cks = document.querySelectorAll('input[type=radio]:checked');
    // clear unordered list
    list.innerHTML = '';
    // print values
    cks.forEach(function(ck){
      // get the text label for the selected check box
      const t = document.querySelector(`label[for=${ck.id}]`).textContent;
      // wrap check values in a list item and push to array
      listVals.push(`<li>${t} Has Been Added To The Cart <br><span><a href="cart.html">VIEW CART</a></span></br> </li>`);
    });
    // inset new values into list
    list.innerHTML = listVals.join('');
    // clear array for next time
    listVals.length = 0;
    //removes class
    list.classList.remove('hide');
    list.classList.add('slideup');
    button.disabled = true;
  })



  form.addEventListener('reset',function(e){
    e.preventDefault();
    // clear check boxes after submission
    cks.forEach(ck => ck.checked = false);
    // clear unordered list
    list.innerHTML = '';
  })

  cks.forEach(enableButton);
  function enableButton(r){
    r.addEventListener('click', function(e){
      const curr = e.currentTarget;
      button.disabled = false;
    })
  }

  reset.addEventListener('click', function(e){
    const wrapper = document.querySelector('.overlay .wrapper');
    button.disabled = true;
    span.textContent = "";
    list.classList.add('hide');
    list.classList.remove('slideup');
    wrapper.style.backgroundImage = "none";
  })

  form.addEventListener('click',function(e){
    const cks = document.querySelectorAll('input[type=radio]');
    const wrapper = document.querySelector('.overlay .wrapper');
    if(cks[0].checked){
      span.textContent = "$6.00";
      wrapper.style.backgroundImage = "url('img/short.svg')";
    } else if (cks[1].checked){
      span.textContent = "$7.50";
      wrapper.style.backgroundImage = "url('img/tall.svg')";
    } else if (cks[2].checked){
      span.textContent = "$8.50";
      wrapper.style.backgroundImage = "url('img/brewski.svg')";
    }
    
  })


}

//showing the overlay


if(document.body.classList.contains('category-beer')){
const list = document.querySelector('ul');
const show = document.querySelector('.category-beer .overlay');
const tapCard = document.querySelectorAll('.category-beer .tap .tap-card');
const esc = document.querySelector('.category-beer .overlay .escape');
const overlayBeer = document.querySelector('.overlay .wrapper form .beer h1');
const overlayCategory = document.querySelector('.overlay .wrapper form .beer h6');
const bottlesCard = document.querySelectorAll('.category-beer .bottles .bottles-card');



//-----------------------------------------------------------------TAP SECTION
//setting a function for each of the cards on TAP
tapCard.forEach(handleClick);



//getting all of the values and info to display on the overlay

function handleClick(tapCard) {
  tapCard.addEventListener('click', function(e) {
    const curr = e.currentTarget;
    const header = curr.dataset.header;
    const categ = curr.dataset.category;
    //Set Values


    //toggles the overlay
    show.classList.add('show');
    overlayBeer.textContent = header;
    overlayCategory.textContent = categ;
    console.log(curr);

  })
}

//closing out the overlay


esc.addEventListener('click', function(e){
  show.classList.remove('show');
  list.classList.remove('slideup');
  list.classList.add('hide');
})

//--------------------------------------------------------------------------------



//----------------------------------------------------------------------bottles section

//setting a function for each of the cards on TAP
bottlesCard.forEach(handleClick);



//getting all of the values and info to display on the overlay

function handleClick(bottlesCard) {
  bottlesCard.addEventListener('click', function(e) {
    const curr = e.currentTarget;
    const header = curr.dataset.header;
    const categ = curr.dataset.category;
    //Set Values


    //toggles the overlay
    show.classList.add('show');
    overlayBeer.textContent = header;
    overlayCategory.textContent = categ;
    console.log(curr);

  })
}

}
//----------------------------------------------------------------

//----------------------------------------------------------------------popular section


if(document.body.classList.contains('home') ){
const list = document.querySelector('ul');
const show = document.querySelector('.home .overlay');
const popCard = document.querySelectorAll('.home .popular .pop-card');
const esc = document.querySelector('.home .overlay .escape');
const overlayBeer = document.querySelector('.overlay .wrapper form .beer h1');
const overlayCategory = document.querySelector('.overlay .wrapper form .beer h6');
const specialCard = document.querySelectorAll('.home .specials .special-card');




//-----------------------------------------------------------------TAP SECTION
//setting a function for each of the cards on TAP
popCard.forEach(handleClick);



//getting all of the values and info to display on the overlay

function handleClick(popCard) {
  popCard.addEventListener('click', function(e) {
    const curr = e.currentTarget;
    const header = curr.dataset.header;
    const categ = curr.dataset.category;
    //Set Values


    //toggles the overlay
    show.classList.add('show');
    
    overlayBeer.textContent = header;
    overlayCategory.textContent = categ;
    console.log(curr);

  })
}

//closing out the overlay


esc.addEventListener('click', function(e){
  show.classList.remove('show');
   list.classList.remove('slideup');
  list.classList.add('hide');
})

//--------------------------------------------------------------------------------



//----------------------------------------------------------------------bottles section

//setting a function for each of the cards on TAP
specialCard.forEach(handleClick);



//getting all of the values and info to display on the overlay

function handleClick(specialCard) {
  specialCard.addEventListener('click', function(e) {
    const curr = e.currentTarget;
    const header = curr.dataset.header;
    const categ = curr.dataset.category;
    
    //Set Values


    //toggles the overlay
    show.classList.add('show');
    overlayBeer.textContent = header;
    overlayCategory.textContent = categ;
    console.log(curr);    
  })
}

}




//content for the guest page begins here! ----------------------------------------------------

if(document.body.classList.contains('guest') ){

const list = document.querySelector('ul');
const show = document.querySelector('.guest .overlay');
const popCard = document.querySelectorAll('.guest .popular .pop-card');
const esc = document.querySelector('.guest .overlay .escape');
const overlayBeer = document.querySelector('.overlay .wrapper form .beer h1');
const overlayCategory = document.querySelector('.overlay .wrapper form .beer h6');
const specialCard = document.querySelectorAll('.guest .specials .special-card');




//-----------------------------------------------------------------TAP SECTION
//setting a function for each of the cards on TAP
popCard.forEach(handleClick);



//getting all of the values and info to display on the overlay

function handleClick(popCard) {
  popCard.addEventListener('click', function(e) {
    const curr = e.currentTarget;
    const header = curr.dataset.header;
    const categ = curr.dataset.category;
    //Set Values


    //toggles the overlay
    show.classList.add('show');
    
    overlayBeer.textContent = header;
    overlayCategory.textContent = categ;
    console.log(curr);

  })
}

//closing out the overlay


esc.addEventListener('click', function(e){
  show.classList.remove('show');
   list.classList.remove('slideup');
  list.classList.add('hide');
})

//--------------------------------------------------------------------------------



//----------------------------------------------------------------------bottles section

//setting a function for each of the cards on TAP
specialCard.forEach(handleClick);



//getting all of the values and info to display on the overlay

function handleClick(specialCard) {
  specialCard.addEventListener('click', function(e) {
    const curr = e.currentTarget;
    const header = curr.dataset.header;
    const categ = curr.dataset.category;
    
    //Set Values


    //toggles the overlay
    show.classList.add('show');
    overlayBeer.textContent = header;
    overlayCategory.textContent = categ;
    console.log(curr);    
  })
}








}




//Content for the cart-page starts here -------------------------------------------------------

if( document.body.classList.contains('cart-page') ) {

const container = document.querySelectorAll('.order-summary .container');
const limit = 5;

container.forEach(function(c){
  const bm = c.querySelector('.minus');
  const bp = c.querySelector('.plus');
  const d = c.querySelector('.display');
  let count = 0;
  bm.addEventListener('click',function(){
    if(count>0){
      count--;
      displayAndCheck();
    }
  })
  bp.addEventListener('click',function(){
    if(count<limit){
      count++;
      displayAndCheck();
    }
  })
  function displayAndCheck(){
    d.textContent = count;
    bm.disabled = count==0 ? true : false;
    bp.disabled = count<limit ? false : true;
    console.log(count);
  }
})

}