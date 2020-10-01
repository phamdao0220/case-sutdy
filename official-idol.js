class ManagerIdol {
    constructor(name) {
        this.name = name;
        this.official = [];
    }

    addIdol(idol) {
        this.official.push(idol);
    }

    removeIdol(index) {
        this.official.splice(index, 1);
    }

    getHtml() {
        let str = '<table id="official">';
        str += ` <tr>
                        <th>ORDER</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ADD</th>
                        <th>BIRTHDAY</th>
                        <th>WEIGHT</th>
                        <th>HEIGHT</th>
                        <th>IMG</th>
                     </tr>`;
        for (let i = 0; i < this.official.length; i++) {
            let official = this.official[i].getHtml();
            str += `<tr><td>${i+1}</td> ${official}`;
        }
        str+= "</table>";
        return str;
    }
}