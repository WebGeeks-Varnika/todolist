// add task function to add task to the list
function addTask() {
    // fetching the input value
    const task = document.querySelector('#task-input').value;
    // if input text empty : return
    if (task === '') {
        return;
    }
    // fetching ul list
    const ul_list = document.querySelector('.ul-list');
    // creating list and adding li class
    const newList = document.createElement('li');
    newList.classList.add('li');

    // creating list buttons
    const del_btn = document.createElement('button');
    const up_btn = document.createElement('button');
    const down_btn = document.createElement('button');
    const arr = [del_btn, up_btn, down_btn];

    // adding class to list buttons
    for (let element of arr) {
        element.classList.add('li-btn');
        newList.appendChild(element);
    }

    // adding delete functionality to button
    del_btn.classList.add('del-btn');
    del_btn.innerHTML = '&Cross;';
    del_btn.addEventListener('click', () => {
        // removes list on click
        newList.remove();
    })

    // adding shift up functionality to button
    up_btn.classList.add('up-btn');
    up_btn.innerHTML = '&uarr;';
    up_btn.addEventListener('click', () => {
        // shifts list up on click
        if (newList.previousElementSibling) {
            newList.parentNode.insertBefore(newList, newList.previousElementSibling);
        }
    })

    // adding shift down functionality to button
    down_btn.classList.add('down-btn');
    down_btn.innerHTML = '&darr;';
    down_btn.addEventListener('click', () => {
        // shifts list down on click
        if (newList.nextElementSibling) {
            newList.parentNode.insertBefore(newList.nextElementSibling, newList);
        }
    })

    // adding task value to list and list to ul-list
    newList.append(task);
    ul_list.appendChild(newList);

    // clearing input area
    document.querySelector('#task-input').value = '';
}