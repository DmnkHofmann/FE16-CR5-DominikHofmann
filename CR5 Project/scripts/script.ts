class animal{
    name: string;
    age: number;
    gender: string;
    size: string;
    vaccine: boolean;
    image: string;
    constructor (name: string, age: number, gender: string, size: string, vaccine: boolean, image: string,){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        this.image = image;
        animals.push(this)
    }
    display() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center">
            <div class="card" style="width: 18rem;">
                <img src="${this.image}" class="d-none d-md-flex" style="height:20rem; object-fit:cover">
                <div class="text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                  <p class="card-text">Gender: ${this.gender}</p>
                  <p class="card-text">Age: ${this.age}</p>
                  <p class="card-text">Size: ${this.size}</p> 
                  <button class="text-center btn d-flex btn-vaccine justify-content-center bg-${this.vaccine?"success":"danger"}">Vaccine &nbsp<i class="bi ${this.vaccine ? "bi-bookmark-check-fill" : "bi-bookmark-dash"}"></i></button>
                </div>
              </div>
        </div>`
    }
    
}
class cat extends animal {
    breed: string;
    furcolor: string;
    URLbreed: string;
    constructor(name: string, age: number, gender: string, size: string,  vaccine: boolean, image: string, breed: string, furcolor:string, URLbreed: string) {
    super(name, age,  gender, size, vaccine, image);
    this.breed = breed;
    this.furcolor = furcolor;
    this.URLbreed = URLbreed;
    }
    
    display() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center mb-2">
            <div class="card" style="width: 18rem;">
                <img src="${this.image}" class="d-none d-md-flex" style="height:20rem; object-fit:cover">
                <div class="text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                    <p class="card-text">Gender: ${this.gender}</p>
                    <p class="card-text">Age: ${this.age}</p>
                    <p class="card-text">Size: ${this.size}</p>
                    <button class="text-center btn d-flex btn-vaccine justify-content-center bg-${this.vaccine?"success":"danger"}">Vaccine &nbsp<i class="bi ${this.vaccine ? "bi-bookmark-check-fill" : "bi-bookmark-dash"}"></i></button>
                </div>
                <div class="container">
                <p class="card-text">Breed: ${this.breed}</p>
                <p class="card-text">Fur color: ${this.furcolor}</p>
                <p class="card-text">Breed info: 
                <a href="">${this.URLbreed}</a>
                </div> 
            </div>
        </div>`
    }
}
let animals: Array<animal> = [];


class dog extends animal {
    breed: string;
    training: boolean;
    constructor(name: string, age: number, gender: string, size: string,  vaccine: boolean, image: string, breed: string, training: boolean) {
    super(name, age, gender, size, vaccine, image);
    this.breed = breed;
    this.training = training;
    }

    display() {
        return `
            <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center mb-2">
                <div class="card" style="width: 18rem;">
                    <img src="${this.image}" class="d-none d-md-flex" style="height:20rem; object-fit:cover">
                    <div class="text-center bg-dark text-white p-1">${this.name}</div>
                    <div class="card-body">
                      <p class="card-text">Gender: ${this.gender}</p>
                      <p class="card-text">Age: ${this.age}</p>
                      <p class="card-text">Size: ${this.size}</p> 
                      <button class="text-center btn d-flex btn-vaccine justify-content-center bg-${this.vaccine?"success":"danger"}">Vaccine &nbsp<i class="bi ${this.vaccine ? "bi-bookmark-check-fill" : "bi-bookmark-dash"}"></i></button>
                    </div>
                    <div class="container">
                    <p class="card-text">Breed: ${this.breed}</p>
                    <p class="card-text">Training: ${this.training}</p>
                    </div>
                </div>
            </div>`
    }
}

new animal ("Sonic", 25, "male", "small", false, "images/sonic.jpg");
new animal ("Bacon", 5, "female", "small", true, "images/pig.jpg"); 
new cat ("Feline Dion", 5, "female", "medium", true, "images/feline.jpg", "Angora", "Gray", "https://www.veto-tierschutz.de/");
new cat ("Meowley Cyrus", 1,"female", "small",  false, "images/meowley.jpg", "Siemese", "Ginger", "https://www.veto-tierschutz.de/");
new dog ("Sushi", 2, "female", "large",  true, "images/sushidog.jpg", "Australian Shepherd", true);
new dog ("Platano", 5, "male", "small", false, "images/platano.jpg", "Poodle", false);
new dog ("Toto", 5, "male", "medium", false, "images/toto.jpg", "Pug", true);
new dog ("Jimmy Chew", 5, "male", "small",  true, "images/jimmychew.jpg", "German Sheeper", true);

(document.getElementById("agesort") as HTMLElement).addEventListener("click", agesort);

function agesort () {
    
    animals.sort(function(a, b) {
        return a.age - b.age});
    cards();
};

function cards() {
    const animalscontainer = (document.getElementById("animals") as HTMLElement);
    animalscontainer.innerHTML = "";
    animals.forEach((val) => {
        animalscontainer.innerHTML += val.display();
    });
    setuplisteners ();
}
cards();

function setuplisteners(){
    let btns = document.getElementsByClassName("btn-vaccine");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
        animals[i].vaccine=!animals[i].vaccine;
        cards();
  });
}
}