const arrFont = Array.from(document.getElementsByClassName('font-size'));
const book = document.getElementsByClassName('book__content');


arrFont.forEach(elem => {
    elem.addEventListener('click', () => {
        if(!elem.classList.contains('font-size_active')) {         //Элемент НЕ содержит класс font-size_active
            console.log('не содержит');
            for(let i = 0; i < arrFont.length; i++) {             //Находим и удаляем класс font-size_active у другого элемента
                if (arrFont[i].classList.contains('font-size_active')) {
                    arrFont[i].classList.remove('font-size_active');
                }
            }
            elem.classList.add('font-size_active');               //Присваеваем класс font-size_active элементу на который кликнули
            return false;                                         //Запрещаем переход по ссылке ???НЕ РАБОТАЕТ???
        } 
        else {
            console.log('содержит');
            return false;                                         //Запрещаем переход по ссылке ???НЕ РАБОТАЕТ???
        }

    });
});