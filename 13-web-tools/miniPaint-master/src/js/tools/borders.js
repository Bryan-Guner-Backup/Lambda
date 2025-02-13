import config from './../config.js';
import Base_tools_class from './../core/base-tools.js';
import Base_layers_class from './../core/base-layers.js';

class Borders_class extends Base_tools_class {

	constructor( ctx ) {
		super();
		this.Base_layers = new Base_layers_class();
		this.ctx = ctx;
		this.name = 'borders';
		this.layer = {};
	}

	load() {
		//nothing
	}

	render( ctx, layer ) {
		var params = layer.params;
		var size = params.size;

		var x = layer.x;
		var y = layer.y;
		var width = parseInt( layer.width );
		var height = parseInt( layer.height );

		//legcy check
		if ( x == null ) x = 0;
		if ( y == null ) y = 0;
		if ( !width ) width = config.WIDTH;
		if ( !height ) height = config.HEIGHT;

		ctx.save();

		//set styles
		ctx.strokeStyle = layer.color;
		ctx.lineWidth = size;

		if ( params.shadow === true ) {
			//with shadow
			ctx.beginPath();
			ctx.shadowColor = layer.color;
			ctx.shadowBlur = size * config.ZOOM;
			ctx.rect( x - size / 2, y - size / 2, width + size, height + size );
			ctx.stroke();
			ctx.stroke();
			ctx.stroke();
		} else {
			ctx.beginPath();
			ctx.rect( x, y, width, height );
			ctx.stroke();
		}
		ctx.restore();
	}

};
export default Borders_class;
