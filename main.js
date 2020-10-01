let manager = new ManagerIdol('Dao Manager');

function display(table) {
    document.getElementById('result').innerHTML = table;
}

function addIdol111() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let add = document.getElementById('add').value;
    let birthday = document.getElementById('birthday').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let img = document.getElementById('img').value;
    let idol = new Idol(name, age, add, birthday, weight, height, img);
    manager.addIdol(idol);
    display(manager.getHtml());
    document.getElementById('form-add').reset();
}

let current = 0;

function edit(index) {
    document.getElementById('form-edit').style.display = "inline-block";
    let idol = manager.getIdolByIndex(index);
    document.getElementById('edit-name').value = idol.name;
    document.getElementById('edit-age').value = idol.age;
    document.getElementById('edit-add').value = idol.add;
    document.getElementById('edit-birthday').value = idol.birthday;
    document.getElementById('edit-weight').value = idol.weight;
    document.getElementById('edit-height').value = idol.height;
    document.getElementById('edit-img').value = idol.img;
    current = index;
}

function editIdol() {
    let name = document.getElementById('edit-name').value;
    let age = document.getElementById('edit-age').value;
    let add = document.getElementById('edit-add').value;
    let birthday = document.getElementById('edit-birthday').value;
    let weight = document.getElementById('edit-weight').value;
    let height = document.getElementById('edit-height').value;
    let img = document.getElementById('edit-img').value;
    let idol = manager.getIdolByIndex(current);
    manager.editIdol(idol, name, age, add, birthday, weight, height, img);
    display(manager.getHtml());
    document.getElementById('form-edit').reset();
    document.getElementById('form-edit').style.display = "none";
}

function del(index) {
    manager.removeIdol(index);
    display(manager.getHtml());
}