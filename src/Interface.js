/**
 * @author Patrick Wolleb
 */


/**
 * Class Interface
 * 
 * Emulates Interface that is known from classic languages such as Java, C++, C#
 * 
 * Usage:
 * 
 * var Foo = new Interface('Foo', ['method1' , 'method2']);
 * 
 * var objectImplementingFoo = new ObjectImplementingFoo();
 * Interface.check(objectImplementingFoo, Foo);   
 * 
 */
var Interface = function(name, methods) {
	if(arguments.length != 2)  throw new Error('Interface::constructor -- Incorrect number of arguments: Expected 2 received ' + arguments.length);
	
	this.name = name;
	this.methods = [];
	
	for(var i = 0, l = methods.length, m = null; i < l; ++i) {
		m = methods[i];
		if(typeof m !== 'string') throw new Error('Interface::constructor -- Methods expected to be passed as strings');
		this.methods.push(m);
	}	
}

Interface.check = function(object) {
	if(arguments.length < 2) throw new Error('Interface::check -- Incorrect number of arguments: Expected at least 2 received ' + arguments.length);
	
	var interFace, m;
	
	
	for(var i=1, l = arguments.length; i < l; ++i) {
		
	console.log(i , arguments[i]);
		interFace = arguments[i];
		if(interFace.constructor != Interface) throw new Error('Interface::check -- Arguments 2 and above expected to be of type Interface');
		
		for(var j=0, l=interFace.methods.length; j < l; ++j) {
			m = interFace.methods[j];
			if(!object[m] || typeof object[m] !== 'function')  throw new Error('Interface::check: object does not implement ' + interFace.name + 'Method ' + m + ' was not found.');
		}
	}
}
