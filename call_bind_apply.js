
Function.prototype.fakeBind = function ( givenContext ) {
  givenContext.__proto__.givenFunction = this
  return function ( ...args ) {
    return givenContext.givenFunction( ...args )
  }

}

Function.prototype.fakeCall = function ( givenContext,...args ){
  givenContext.__proto__.givenFunction = this
  return givenContext.givenFunction( ...args )
}

Function.prototype.fakeApply = function ( givenContext,argsArray ){
  givenContext.__proto__.givenFunction = this
  return givenContext.givenFunction( ...argsArray )
}


//Testing  bind and fakeBind methods

let obj = { num: 2 };

function add ( a, b ) {
  return this.num + a + b;
}



let binded = add.bind( obj )
let fakeBinded = add.fakeBind( obj )

console.log( binded( 1, 2 ) );
console.log( fakeBinded( 1, 2 ) );

console.log( add.call( obj, 3 ,5) );
console.log( add.fakeCall( obj, 3 ,5) );

console.log( add.apply( obj, [4 ,8]) );
console.log( add.fakeApply( obj, [4 ,8]) );
