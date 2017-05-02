var App = (function () {
    function App() {
        this.name = 'fxxk zxm';
        this.version = 0.1;
    }
    return App;
}());
var app = new App();
console.log(JSON.stringify(app));
var HomeComponent = (function () {
    function HomeComponent() {
        this.name = 'fxxk yk';
        this.version = 0.2;
    }
    return HomeComponent;
}());
var homeComponent = new HomeComponent();
console.log(JSON.stringify(homeComponent));
var Animal = (function () {
    function Animal(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Animal;
}());
var zxm = new Animal('章', '向明');
console.log(JSON.stringify(zxm));
//Property 'firstName' is private and only accessible within class 'Animal'. (2341)
// console.log(zxm.firstName);
//相比于Animal在构造函数中手动进行赋值操作，Sb构造函数中的这种方式会自动赋值
var Sb = (function () {
    function Sb(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Sb;
}());
var yk = new Sb('yin', 'kang');
console.log(JSON.stringify(yk));
