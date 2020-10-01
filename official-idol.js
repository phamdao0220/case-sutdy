class ManagerIdol {
    constructor(name) {
        this.name = name;
        this.official = [];
    }

    addIdol(idol) {
        this.official.push(idol);
    }

    removeIdol(index) {
        if (confirm('ban chac chan muon xoa?')) {
            this.official.splice(index, 1);
        }
    }

    editIdol(idol, name, age, add, birthday, height, weight, img) {
        idol.edit(name, age, add, birthday, height, weight, img);
    }

    getHtml() {
        let str = '<table id="official" class="table">';
        str += ` <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ADD</th>
                        <th>BIRTHDAY</th>
                        <th>WEIGHT</th>
                        <th>HEIGHT</th>
                        <th>IMG</th>
                        <th colspan="2">BUTTON</th>
                     </tr>`;
        for (let i = 0; i < this.official.length; i++) {
            let official = this.official[i].getHtml();
            str += "<tr>" + `${official}` + `${this.getAction(i)}` + "</tr>";
        }
        str += "</table>";
        return str;
    }

    getAction(index) {
        let action = `<td><button class="btn btn-warning" onclick="edit(${index})">Edit</button></td>
                        <td><button class="btn btn-danger" onclick="del(${index})">Delete</button></td>`;
        return action;
    }

    getIdolByIndex(index) {
        return this.official[index];
    }
}