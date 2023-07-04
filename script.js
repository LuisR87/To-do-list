// let list = document.querySelector('#items-list');
// let newElement = document.createElement('li');
// let item = document.getElementById('item').innerHTML;
// newElement.innerHTML = item;
// list.appendChild(newElement);


function addElement(){
    //CREATING DELETE BUTTON
    let newItem = document.querySelector('#item');
    let item = newItem.value;
    let newElement = document.createElement('li');

    //creating span for delete button
    let btnSpan = document.createElement('span');
    newElement.appendChild(btnSpan);
    let btn = document.createElement('button');
    btnSpan.appendChild(btn);
    btn.setAttribute("type","button");
    btn.setAttribute("onclick","delItem(this)");
    btn.innerHTML = 'Del';

    //creating span for text
    let itemSpan = document.createElement('span');
    newElement.appendChild(itemSpan);
    itemSpan.innerHTML = item

    //adding final element to the list
    let list = document.querySelector('#items-list');
    list.appendChild(newElement);
    newItem.value = '' 

    // WITHOUT CREATING DELETE BUTTON
    // let newItem = document.querySelector('#item');
    // let item = newItem.value;
    // let list = document.querySelector('#items-list');
    // let newElement = document.createElement('li');
    // newElement.innerHTML = (item)
    // list.appendChild(newElement);
    // newItem.value = ''   
}


function delItem(listItem){
    let crossText = listItem.parentElement.nextElementSibling;
    crossText.setAttribute("id","cross");
    let parent = listItem.parentElement.parentElement;
    setTimeout(function(){
        parent.remove();
    }, 5000);
}