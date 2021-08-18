let intro = document.querySelector('.intro')

let user = {
         firstname:'Oluwayemisi',
         lastname: 'Akinyemi',
         print : () => `My name is ${user.lastname} ${user.firstname}.`
}

intro.textContent = user.print();



