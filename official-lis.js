class Idol{
    constructor(name,age,birthday,height,weight,img,add) {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
        this.height = height;
        this.weight = weight;
        this.add = add;
        this.img = img;
    }
    getName(){
        return this.name;
    }
    setName(value) {
        this.Name = value;
    }
    getAge(){
        return this.age;
    }
    setAge(value) {
        this.Age = value;
    }
    getBirthday(){
        return this.birthday;
    }
    setBirthday(value) {
        this.Birthday = value;
    }
    getHeight(){
        return this.height;
    }
    setHeight(value) {
        this.Height= value;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(value) {
        this.Weight= value;
    }
    getAdd(){
        return this.add;
    }
    setAdd(value) {
        this.Add= value;
    }
    getImg(){
        return this.img;
    }
    setImg(value) {
        this.Img= value;
    }
edit(name,age,birthday,height,weight,img,add){
    this.name = name;
    this.age = age;
    this.add= add;
    this.birthday = birthday;
    this.weight = weight;
    this.height = height;
    this.img = img;
}

        getHtml(){
        let str = `
            <td>${this.name}</td>
            <td>${this.age}</td>
             <td>${this.add}</td>
            <td>${this.birthday}</td>
            <td>${this.weight}</td>
            <td>${this.height}</td>
            <td><img src="${this.img}"></td>`

        return str;

        }
    }
