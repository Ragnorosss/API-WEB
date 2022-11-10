const searchWrapper = document.querySelector('.search__wrappe');
const chekSearch = document.querySelector('.search__nav')
const searchBtn = document.querySelector('.search__btn')
const bookCard = document.querySelectorAll('.book')
const cdCard = document.querySelectorAll('.cd')
const hidden = document.querySelector('.hidden')

const filterBtnBook = document.querySelector('#books__btn') 

const filterBtnCds = document.querySelector('#cds__btn') 

const bookWrapper = document.querySelector('.books__wrapper')
const cdsWrapper = document.querySelector('.cds')

const booksGeneral = document.querySelector('.books')
const cdsGeneral = document.querySelector('.cds')
const booksFilters = document.querySelector('.book__filter')
const finctionFilter = document.querySelector('.fiction__filter')
const getAllBtnFinction = document.querySelectorAll('.fiction__item')
const nonFinctionFilter = document.querySelector('.non-fiction__filter')
const cdsFilter = document.querySelector('.cd__filter')
const counterBooksParent = document.querySelector('.info__book')

counterBooksParent.insertAdjacentHTML('beforeend', `<div>Books:<span>${bookCard.length}</span></div>`)
counterBooksParent.insertAdjacentHTML('beforeend', `<div>Cds:<span>${cdCard.length}</span></div>`)

function emptyValid(e) {

   const checkData = booksGeneral.querySelectorAll(`.book-titel__name, [data-type=${e.target.id}]`)
   const checkDataCd = cdsGeneral.querySelectorAll(`.cd-titel__name, [data-type=${e.target.id}]`)
   
   checkData.forEach(el => {
      if(e.target.id !== el.dataset.type){

         el.closest('.book').classList.toggle('hidden')
      

      }

      else if (el.dataset.type === e.target.id) {

         el.closest('.book').classList.remove('hidden')

      } 

   })

   checkDataCd.forEach(el => {
      if(e.target.id !== el.dataset.type){

         el.closest('.cd').classList.toggle('hidden')

      }

      else if (el.dataset.type === e.target.id) {
         

         el.closest('.cd').classList.remove('hidden')
         
      } 
      
   
   })
}

function SearchValue() {
   const checkBookTiteil = booksGeneral.querySelectorAll(`.book-titel__name`)
   const checkBookAuthor = booksGeneral.querySelectorAll(`.book-text__author`)
   const checkCdAuthor = cdsGeneral.querySelectorAll(`.cd-text__author`)
   const checkCdsTitle = cdsGeneral.querySelectorAll(`.cd-titel__name`)
   if(chekSearch.value === '' || chekSearch.value === ' ') {

    alert('Placeholder is empty')

   }
   checkBookTiteil.forEach(el => {
      for(let i = 0; i < bookTitelArray.length;i ++){
         if(el.innerHTML !== bookTitelArray[i]) {
            if(chekSearch.value === bookTitelArray[i])
            {
               el.closest('.book').classList.add('hidden')
            }
         }
      }
   })

checkBookAuthor.forEach(el =>{
   for(let i = 0; i < bookAuthorArray.length;i ++){
      if(el.innerHTML !== bookAuthorArray[i]) {
         console.log(chekSearch.value)
         if(chekSearch.value === bookAuthorArray[i])
         {
            el.closest('.book').classList.add('hidden')
         }
        
         
      }
   }
})

checkCdsTitle.forEach(el => {
   for(let i = 0; i < cdTitelArray.length;i ++){
      if(el.innerHTML !== cdTitelArray[i]) {
         if(chekSearch.value === cdTitelArray[i])
         {
            el.closest('.cd').classList.add('hidden')
         }
      }
   }
})

checkCdAuthor.forEach(el =>{ 
   for(let i = 0; i < cdAuthorArray.length;i ++){
      if(el.innerHTML !== cdAuthorArray[i]) {
         if(chekSearch.value === cdAuthorArray[i])
         {
            el.closest('.cd').classList.add('hidden')
         }
      }
   }
})
}
const bookAuthorArray = [
   'Sarah Penner',
   'Subhara Moitra',
   'Janet Skes CHARLES',
   'Nitin Seth',
   'Adam Hamoy',
   'Eating in the age of -Dieting - Non-Fiction',
   'Rujuth Diwakar',
]

const cdAuthorArray = [
   'Jay shetty',
   'Cyrus',
   'Ramo',
   'Ashdin',
   'Ramesh',
   'Sundar',
   'Verious',
   'Judas Perist',
]

const bookTitelArray = [
   'The Lost Apothecary-Fiction',
   'Fitness Habits Non-Fiction',
   'Parts Library Fiction',
   'Winning Digital Age Fiction',
   'Black 13 Fiction',
   'Eating in the age of -Dieting - Non-Fiction',
   'The Reidential Years Non-Fiction',
]

const cdTitelArray = [
   'Cyrus Says Podcast',
   'The Musafir Stories Album',
   'The Habit Coach Podcast',
   'Paisa Vaisa Podcast Ramesh',
   'Akbar Birbal Story',
   'Rock Ballads Audio',
   'Rock Audio',
]



filterBtnBook.addEventListener('click', () => {

   bookWrapper.classList.toggle('hidden')

})

filterBtnCds.addEventListener('click', () => {

   cdsWrapper.classList.toggle('hidden')

})

booksFilters.addEventListener('click', emptyValid )
searchBtn.addEventListener('click', SearchValue ) 