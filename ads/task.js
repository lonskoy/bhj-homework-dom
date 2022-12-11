let dataTime = null;
let counter = 0; 

const arrRotator = Array.from(document.getElementsByClassName('rotator__case'));

arrRotator.forEach(elem => {
    let dataColor = elem.getAttribute('data-color');
    elem.style.color = dataColor;
});

dataTime = arrRotator[counter].getAttribute('data-speed');

setInterval(() => {
    if(counter <= arrRotator.length -1) {
        dataTime = arrRotator[counter].getAttribute('data-speed');
        /*console.log(dataTime, arrRotator[counter].getAttribute('data-color')); // Помогалка*/
        if(arrRotator[counter].classList.contains('rotator__case_active')) {
            counter += 1;
        }
        else {
            arrRotator[counter].classList.add('rotator__case_active');
            if(counter === 0) {
                arrRotator[arrRotator.length - 1].classList.toggle('rotator__case_active');
            }
            else {
                arrRotator[counter -1].classList.toggle('rotator__case_active');
            }
            counter += 1; 
        }   
    }
    else {
        counter = 0;
        dataTime = arrRotator[counter].getAttribute('data-speed');
    }
}, dataTime);


