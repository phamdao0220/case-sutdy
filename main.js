let manager = new ManagerIdol('Dao Manager');

function display(table) {
    document.getElementById('result').innerHTML = table;
}

function addIdol111() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let birthday= document.getElementById('birthday').value;
    let height = document.getElementById('height').value;
    let  weight= document.getElementById('weight').value;
    let add = document.getElementById('add').value;
    let img = document.getElementById('img').value;
    let idol = new Idol(name, age, add, img, weight, height, birthday);
    manager.addIdol(idol);
    display(manager.getHtml());
    document.getElementById('form-add');
}
function editIdol(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let birthday= document.getElementById('birthday').value;
    let height = document.getElementById('height').value;
    let  weight= document.getElementById('weight').value;
    let add = document.getElementById('add').value;
    let img = document.getElementById('img').value;
    let idol = new Idol(name, age, add, img, weight, height, birthday);
    manager.editIdol(idol);
    display(manager.getHtml());
    document.getElementById('form-add').reset();
}