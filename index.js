let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let audio = new Audio('click.mp3'); // Replace 'button-sound.mp3' with your sound file path

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        audio.play(); // Play the sound effect on button click

        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

