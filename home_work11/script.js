function start_game() {
   // console.log('start_game() works');
   object.classList.add('start');

}

function miss(event) {
    // event.target.id
    if (event.target.id == "area"){
        score--;
        document.title = `Score ${score}`;
    } 
}

function hit() {
    score++;
    document.title = `Score ${score}`;

    object.classList.remove('start');
    void object.offsetWidth; //магия
    object.classList.add('start');

    changeObjectBackground();
}

//изменение цвета фона объекта
function changeObjectBackground() {
    const colors = ['green', 'orange', 'blue', 'pink', 'gold'];
    const index = 0;
    object.style.background = colors[index];
}

let score = 0;
let object = document.querySelector('#object');
