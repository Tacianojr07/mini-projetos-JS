'use strict';

const images = [
    {'id': '1', 'url': './img/foto-rj1.jpg'},
    {'id': '2', 'url': './img/foto-rj02.jpg'},
    {'id': '3', 'url': './img/foto-rj03.jpg'},
    {'id': '4', 'url': './img/foto-rj04.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach( image => {
        container.innerHTML += `
            <div class="item">
                <img src='${image.url}'
            </div>
        `
    });

}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const previous = () =>{
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem,items[0])
    items = document.querySelectorAll('.item');
}

document.querySelector('#next').addEventListener('click', next);
document.querySelector('#previous').addEventListener('click', previous);

