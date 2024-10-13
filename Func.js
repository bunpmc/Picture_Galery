let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', function() {
    let pictures = document.querySelectorAll('.picture');
    document.querySelector('.slide').appendChild(pictures[0]);
});

prev.addEventListener('click', function() {
    let pictures = document.querySelectorAll('.picture');
    document.querySelector('.slide').prepend(pictures[pictures.length - 1]);
});