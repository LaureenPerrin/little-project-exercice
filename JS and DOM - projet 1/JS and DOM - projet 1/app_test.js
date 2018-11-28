//Déclaration des variables :
const toggleList = document.getElementById('toggleList');
const listDiv = document.getElementById('list');
const descriptionInput = document.getElementById('inputDescription');
const descriptionP = document.getElementById('descriptionP');
const descriptionButton = document.getElementById('buttonDescription');
const listUl = listDiv.getElementById('listUl');
const addItemInput = document.getElementById('inputAddItemInput');
const addItemButton = document.getElementById('buttonAddItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

//css du premier et dernier élément de la liste :
firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';

