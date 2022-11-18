let screen = document.getElementById('screen');

function display(number) {
    screen.value += number;
}

function Calculate() {
    try{
        screen.value = eval 
        (screen.value);
    }
    catch(err) {
    alert('Invalid')
}
}

function Clear() {
    screen.value = "";
}

function Del() {
    screen.value = screen.value.slice(0, -1);
}