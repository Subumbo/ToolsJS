var RenderModel = new Interface('RenderModel', ['getRotation', 'getX', 'getY']);
var RenderView = new Interface('RenderView', ['setRotation', 'setX', 'setY']);

var Renderer = function() {
	this.items = [];
}

Renderer.prototype.addItem = function(model, view) {
	
	
	//Interface.check(model, RenderModel);
	//Interface.check(view, RenderView);
	this.items.push({model:model, view:view})
}

Renderer.prototype.removeItem = function(object) {
	var i = this.items.length;
}

Renderer.prototype.render = function() {
	
	var i = this.items.length;
	var item, v, m;
	while( --i > -1 ) {
		item = this.items[i];
		v = item.view;
		m = item.model;
		v.setRotation(m.getRotation());
		v.setX(m.getY());
		v.setY(m.getY()) 
	}
	
}
