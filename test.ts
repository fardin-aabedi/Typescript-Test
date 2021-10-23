export{}
class person{
firstname:string;
    lastname:string;
    constructor( f:string,
    l:string) {
this.firstname=f;
this.lastname=l;
    }
greet(){
    console.log('Hi')
}
 }
 class teacher extends person{

 }
 class student extends person{

 }
let teacher=new teacher('a','b')
let student =new teacher('c','d')
function test<T> (person:T):T{
    return person
}
let t1=test(teacher)

