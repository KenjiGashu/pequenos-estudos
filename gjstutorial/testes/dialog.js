#!/usr/bin/gjs

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Lang = imports.lang;

const DialogExample = new Lang.Class({
    Name: 'Dialog Example',

    //create the application itself
    _init: function(){
	this.application = new Gtk.Application({
	    application_id: 'org.example.dialog',
	    flags: Gio.ApplicationFlags.FLAGS_NONE
	});

	//connect activate and startup
	this.application.connect('activate', Lang.bind(this, this._onActivate));
	this.application.connect('startup', Lang.bind(this, this._onStartup));
    },

    //callback function for activate
    _onActivate: function(){
	this._window.present();
    },

    //callback function for startup signal, builds UI
    _onStartup: function(){
	this._buildUI();
    },

    //build applications ui
    _buildUI: function(){
	//create the application window
	this._window = new Gtk.ApplicationWindow({
	    application: this.application,
	    window_position: Gtk.WindowPosition.CENTER,
	    title: 'Gtk.Dialog example',
	    default_height: 50,
	    default_width: 250});

	//create button
	this._button = new Gtk.Button({label: 'Click me'});
	this._window.add(this._button);

	//bind function
	this._button.connect('clicked', Lang.bind(this, this._createDialog));

	//show window
	this._window.show_all();
    },

    _createDialog: function(){
	this._dialog = new Gtk.Dialog({ transient_for: this._window,
					modal: true,
					title: 'a gtk dialog' });

	this._contentArea = this._dialog.get_content_area();
	this._message = new Gtk.Label({label: 'content area'});
	this._contentArea.add(this._message);

	this._actionArea = this._dialog.get_action_area();
	this._OKButton = new Gtk.Button({label: 'oi, eu sou um botao'});
	this._actionArea.add(this._OKButton);

	this._button.connect('clicked', Lang.bind(this, this._OKHandler));

	this._dialog.show_all();
    },

    _OKHandler: function(dialog, response_id){
	this._dialog.destroy();
    },
});


// Run the application
let app = new DialogExample ();
app.application.run (ARGV);
