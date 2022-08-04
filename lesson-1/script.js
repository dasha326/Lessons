'use strict';
let body = document.querySelector('body');
let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');
let adv = document.getElementsByClassName('adv');
books.insertBefore(book[1], book[0]);

books.insertBefore(book[2], null);

books.insertBefore(book[4], book[3]);

book = document.querySelectorAll('.book');

body.classList.add('other-bg');

book[2].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

body.removeChild(adv[0]);

var thisList;

var pullElments = function(book, childrenNumber, beforeChildrenNumber ) {
    thisList = book.querySelector('ul');
    thisList.insertBefore(thisList.children[childrenNumber], thisList.children[beforeChildrenNumber]);

};
pullElments(book[1], 2, 10);

pullElments(book[1], 5, 3);

pullElments(book[1], 7, 4);

pullElments(book[4], 9, 2);

pullElments(book[4], 3, 6);

pullElments(book[4], 6, 9);

let newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
book[5].querySelector('ul').append(newElem);

pullElments(book[5], 10, 9);

