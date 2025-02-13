import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';
import Helper_class from './../../libs/helpers.js';
import Base_gui_class from './../../core/base-gui.js';

class Tools_settings_class {

	constructor() {
		this.Base_gui = new Base_gui_class();
		this.POP = new Dialog_class();
		this.Helper = new Helper_class();
	}

	settings() {
		var _this = this;
		var transparency_values = [ 'squares', 'green', 'grey' ];
		var default_units_all = [ 'pixels', 'inches', 'centimeters', 'millimetres' ];
		var resolutions_values = [ 72, 150, 300, 600 ];

		var transparency = this.get_setting( 'transparency' );
		var theme = this.get_setting( 'theme' );
		var snap = this.get_setting( 'snap' );
		var guides = this.get_setting( 'guides' );
		var safe_search = this.get_setting( 'safe_search' );
		var exit_confirm = this.get_setting( 'exit_confirm' );
		var default_units = this.get_setting( 'default_units' );
		var resolution = this.get_setting( 'resolution' );
		var thick_guides = this.get_setting( 'thick_guides' );

		var settings = {
			title: 'Settings',
			params: [ {
					name: "transparency",
					title: "Transparent:",
					value: transparency
				},
				{
					name: "transparency_type",
					title: "Transparency background:",
					type: "select",
					value: config.TRANSPARENCY_TYPE,
					values: transparency_values
				},
				{
					name: "theme",
					title: "Theme",
					values: config.themes,
					value: theme,
					type: "select"
				},
				{
					name: "default_units",
					title: "Units",
					values: default_units_all,
					value: default_units,
					type: "select"
				},
				{
					name: "resolution",
					title: "Resolution:",
					type: "select",
					value: resolution,
					values: resolutions_values
				},
				{
					name: "snap",
					title: "Enable snap:",
					value: snap
				},
				{
					name: "guides",
					title: "Enable guides:",
					value: guides
				},
				{
					name: "safe_search",
					title: "Safe search:",
					value: safe_search
				},
				{
					name: "exit_confirm",
					title: "Exit confirmation:",
					value: exit_confirm
				},
				{
					name: "thick_guides",
					title: "Thick guides:",
					value: thick_guides
				},
			],
			on_change: function ( params ) {
				this.Base_gui.change_theme( params.theme );
			},
			on_cancel: function ( params ) {
				this.Base_gui.change_theme( theme );
			},
			on_finish: function ( params ) {
				_this.save_values( params );
			},
		};
		this.POP.show( settings );
	}

	save_values( params ) {

		//save
		this.save_setting( 'theme', params.theme );
		this.save_setting( 'transparency', params.transparency );
		this.save_setting( 'transparency_type', params.transparency_type );
		this.save_setting( 'snap', params.snap );
		this.save_setting( 'guides', params.guides );
		this.save_setting( 'safe_search', params.safe_search );
		this.save_setting( 'exit_confirm', params.exit_confirm );
		this.save_setting( 'default_units', params.default_units );
		this.save_setting( 'resolution', params.resolution );
		this.save_setting( 'thick_guides', params.thick_guides );

		//update config
		config.TRANSPARENCY = this.get_setting( 'transparency' );
		config.TRANSPARENCY_TYPE = this.get_setting( 'transparency_type' );
		config.SNAP = this.get_setting( 'snap' );
		config.guides_enabled = this.get_setting( 'guides' );
		this.Base_gui.change_theme( this.get_setting( 'theme' ) );
		this.Base_gui.GUI_information.update_units();

		//finish
		this.Base_gui.prepare_canvas();
		config.need_render = true;
	}

	/**
	 * set global setting. Values can be string(1 or 0 will be converted to boolean) or boolean
	 *
	 * @param key
	 * @param value
	 */
	save_setting( key, value ) {
		//prepare
		if ( value === true ) {
			value = 1;
		}
		if ( value === false ) {
			value = 0;
		}

		this.Helper.setCookie( key, value );
	}

	/**
	 * get global setting. If settings does not exists, default valye will be used.
	 *
	 * @param key
	 * @returns {Object|string}
	 */
	get_setting( key ) {
		var default_values = {
			'theme': config.themes[ 0 ],
			'transparency': false,
			'snap': true,
			'guides': true,
			'safe_search': true,
			'exit_confirm': true,
			'default_units': 'pixels',
			'resolution': 72,
			'thick_guides': false,
		};

		var value = this.Helper.getCookie( key );
		if ( value == null && default_values[ key ] != undefined ) {
			//set default value
			value = default_values[ key ];
		}

		//finalize values
		if ( value === 1 ) {
			value = true;
		}
		if ( value === 0 ) {
			value = false;
		}

		return value;
	}

}

export default Tools_settings_class;
