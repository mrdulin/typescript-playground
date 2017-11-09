/**
 * 现有A,B,C三个接口，相互之间没有依赖关系，
 */

class Component {
    public label: string = 'ts';
    public m(x = this.label) {
        console.log(x);
    }

    public a = (x = this.label) => {
        console.log(x);
    }
}
const comp = new Component();
comp.m();
comp.a();


function main(x: any = (function(ctx: any) { console.log(ctx); })(global as any)) {
    console.log('main');
}

let a = null;
let b;
// main(a);
// main(b);

export { };
