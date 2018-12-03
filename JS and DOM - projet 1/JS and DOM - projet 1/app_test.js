//Déclaration des variables :
/*const toggleList = document.getElementById('toggleList');
const listDiv = document.getElementById('list');
const descriptionInput = document.getElementById('inputDescription');
const descriptionP = document.getElementById('descriptionP');
const descriptionButton = document.getElementById('buttonDescription');
const listUl = listDiv.getElementById('listUl');
const addItemInput = document.getElementById('inputAddItemInput');
const addItemButton = document.getElementById('buttonAddItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;*/


const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

//css du premier et dernier élément de la liste :
firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';

//création des boutons de gestion des éléments de la liste :
function attachListItemButtons(li) {
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);
    
    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);  
    
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
  }
  
  //boucle pour créer les boutons précédents sur chaque élément de la liste :
  for (let i = 0; i < lis.length; i += 1) {
    attachListItemButtons(lis[i]);
  }

  //Event au clic sur la liste :
  listUl.addEventListener('click', event => {
    //si event est un bouton :
    if (event.target.tagName == 'BUTTON') {
      //et qu'il s'agit de remove :
      if (event.target.className == 'remove') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      }
      //et qu'il s'agit de up :
      if (event.target.className == 'up') {
        let li = event.target.parentNode;
        let prevLi = li.previousElementSibling;
        let ul = li.parentNode;
        if (prevLi) {
          ul.insertBefore(li, prevLi);
        }
      }  
      //et qu'il s'agit de down :
      if (event.target.className == 'down') {
        let li = event.target.parentNode;
        let nextLi = li.nextElementSibling;
        let ul = li.parentNode;
        if (nextLi) {
          ul.insertBefore(nextLi, li);
        }
      } 
    }
  });
  
  //event sur le bouton principal toggleList :
  toggleList.addEventListener('click', () => {
    //la liste disparait :
    if (listDiv.style.display == 'none') {
      toggleList.textContent = 'Hide list';
      listDiv.style.display = 'block';
      
    } else {
      toggleList.textContent = 'Show list';                        
      listDiv.style.display = 'none';
    }                         
  });
  
  //event sur le bouton pour changer la description de la liste :
  descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
  });
  

  //event sur le bouton pour ajouter un élément à la liste :
  addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    addItemInput.value = '';
  });
