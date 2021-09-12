/*  
Project Name: Daily Drink Water
Description: Set your Daily Drinking Water intake. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
*/

const smallGlasses = document.querySelectorAll('.small-glass')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigGlass ()

smallGlasses.forEach((glass, idx) => {
    glass.addEventListener('click', () => highlightGlasses(idx))
})

function highlightGlasses (idx) {
   if (smallGlasses[idx].classList.contains('full') && !smallGlasses[idx].nextElementSibling.classList.contains('full')) {
       idx--
   }

    smallGlasses.forEach((glass, idx2) => {
        if (idx2 <= idx) {
            glass.classList.add('full')
        }
        else {
            glass.classList.remove('full')
        }
    })

    updateBigGlass ()
}

function updateBigGlass () {
    const fullGlasses = document.querySelectorAll('.small-glass.full').length
    const totalGlasses = smallGlasses.length

    if (fullGlasses === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }
    else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullGlasses / totalGlasses * 365}px`
        percentage.innerText = `${fullGlasses / totalGlasses * 100}%`
    }

    if (fullGlasses === totalGlasses) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }
    else {
        remained.style.visibility = 'visible'
        remained.style.height = 'inherit'
        liters.innerText = `${2 - (250 * fullGlasses / 1000)}L`
    }
}