const body = document.body
const chekSearch = document.querySelector('.search__nav')
const searchBtn = document.querySelector('.search__btn')
const bookCard = document.querySelectorAll('.book')
const cdCard = document.querySelectorAll('.cd')

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
const counterBooks = document.querySelector('.counter__books')

filterBtnBook.addEventListener('click', () => {

   bookWrapper.classList.toggle('hidden')

})
filterBtnCds.addEventListener('click', () => {

   cdsWrapper.classList.toggle('hidden')

})




booksFilters.addEventListener('click',(e)=>{
   const checkData = booksGeneral.querySelectorAll(`.book-titel__name, [data-type=${e.target.id}]`)
   const checkDataCd = cdsGeneral.querySelectorAll(`.cd-titel__name, [data-type=${e.target.id}]`)
   checkData.forEach(el => {
      if(e.target.id !== el.dataset.type){

         el.closest('.book').classList.add('hidden')
       
         
      }
   
   })

   checkDataCd.forEach(el => {
      if(e.target.id !== el.dataset.type){

         el.closest('.cd').classList.add('hidden')

      }
   
   })

})
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
   searchBtn.addEventListener('click', () => {
      const checBookTiteil = booksGeneral.querySelectorAll(`.book-titel__name`)
      const checCdsTiteil = cdsGeneral.querySelectorAll(`.cd-titel__name`)
      checBookTiteil.forEach(el => {
         for(let i = 0; i < bookTitelArray.length;i ++){
            if(el.innerHTML !== bookTitelArray[i]) {
               if(chekSearch.value === bookTitelArray[i])
               {
                  el.closest('.book').classList.add('hidden')
               }
            }
         }
   })

   checCdsTiteil.forEach(el => {
      for(let i = 0; i < cdTitelArray.length;i ++){
         if(el.innerHTML !== cdTitelArray[i]) {
            if(chekSearch.value === cdTitelArray[i])
            {
               el.closest('.cd').classList.add('hidden')
            }
         }
      }
})
})
