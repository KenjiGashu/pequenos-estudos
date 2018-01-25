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
	this.window.present();
    },

    //callback function for startup signal, builds UI
    _onStartup: function(){
	this._buildUI();
    },

    //build applications ui
    _buildUI: function(){
	this.window = new Gtk.ApplicationWindow
    },
});
