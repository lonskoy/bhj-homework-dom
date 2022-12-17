const arrFont = Array.from(document.getElementsByClassName('font-size'));
const book = document.querySelector('.book__content');



arrFont.forEach(elem => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();    
        if(!elem.classList.contains('font-size_active')) {         //Элемент НЕ содержит класс font-size_active
            for(let i = 0; i < arrFont.length; i++) {             //Находим и удаляем класс font-size_active у другого элемента
                if (arrFont[i].classList.contains('font-size_active')) {
                    arrFont[i].classList.remove('font-size_active');
                }
            }
            elem.classList.add('font-size_active');               //Присваеваем класс font-size_active элементу на который кликнули 
            let temp = elem.getAttribute('data-size');          // Устанавливаем шрифт текста
            console.log(temp, book.className ='book__content font-size_' + temp);
        } 

    });
});

