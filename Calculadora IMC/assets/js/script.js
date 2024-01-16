const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value

    const bmi = (weight / (height * height)).toFixed(2);

const value = document.getElementById('value');
let descripton = ' ';


document.getElementById('infos').classList.remove('hidden');

if (bmi < 18.5) {
    descripton = 'Cuidado ! Você está abaixo do peso!';
}
else if (bmi >= 18.5 && bmi <= 25 ) {
    descripton = "Você está no peso ideal";
}
else if (bmi >= 25 && bmi <=30 ) {
    descripton = "Cuidado ! Você está com sobrepeso";
}
else if (bmi >= 30 && bmi <=35 ) {
    descripton = "Cuidado! Você está com obsidade moderada!";
}
else if (bmi >= 35 && bmi <=40 ) {
    descripton = "Cuidado! Você está com obsidade severa!";
}
else {
    descripton =" Cuidado! Você está com obsidade morbida!!!!!!!"
}
    
    value.textContent = bmi.replace('.', ',')
    document.getElementById('description').textContent = descripton;
});