const homeLink= document.getElementById('home');
const submissionLink = document.getElementById('submission');

homeLink.addEventListener('click',(event)=>{
    homeLink.classList.add('active');
    submissionLink.classList.remove('active');
    submissionLink.classList.remove('rainbow-text');
    homeLink.classList.add('rainbow-text')


});

submissionLink.addEventListener('click',(event)=>{
    submissionLink.classList.add('active');
    homeLink.classList.remove('active');
    homeLink.classList.remove('rainbow-text')
    submissionLink.classList.add('rainbow-text')
});



const smartSlider = document.getElementById('smartSlider');
const smartDisplay = document.getElementById('smartDisplay');

smartSlider.addEventListener('input', function(){
    smartDisplay.textContent = smartSlider.value;
});


const empatheticSlider = document.getElementById('empatheticSlider');
const empatheticDisplay = document.getElementById('empatheticDisplay');

empatheticSlider.addEventListener('input', function(){
    empatheticDisplay.textContent = empatheticSlider.value;
});

const funnySlider = document.getElementById('funnySlider');
const funnyDisplay = document.getElementById('funnyDisplay');

funnySlider.addEventListener('input', function(){
    funnyDisplay.textContent = funnySlider.value;
});


const caringSlider = document.getElementById('caringSlider');
const caringDisplay = document.getElementById('caringDisplay');

caringSlider.addEventListener('input', function(){
    caringDisplay.textContent = caringSlider.value;
});


const manlySlider = document.getElementById('manlySlider');
const manlyDisplay = document.getElementById('manlyDisplay');

manlySlider.addEventListener('input', function(){
    manlyDisplay.textContent = manlySlider.value;
});


const patientSlider = document.getElementById('patientSlider');
const patientDisplay = document.getElementById('patientDisplay');

patientSlider.addEventListener('input', function(){
    patientDisplay.textContent = patientSlider.value;
});


const artistSlider = document.getElementById('artistSlider');
const artistsDisplay = document.getElementById('artistsDisplay');

artistSlider.addEventListener('input', function(){
    artistsDisplay.textContent = artistSlider.value;
});


