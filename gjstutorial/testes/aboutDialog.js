#!/usr/bin/gjs

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Lang = imports.lang;

const AboutDialogExample = new Lang.Class({
    Name: 'about dialog example' ,

    //create the application
    _init: function(){
	this.application = new Gtk.Application({
	    application_id: 'org.example.aboutDialog',
	    flags: Gio.ApplicationFlags.FLAGS_NONE});
	this.application.connect('startup', Lang.bind(this, this._onStartup));
	this.application.connect('activate', Lang.bind(this, this._onActivate));
	
    },

    _onActivate: function(){
	this._window.present();
    },

    _onStartup: function(){
	this._initMenus();
	this._buildUI();
    },

    _buildUI: function(){
	this._window = new Gtk.ApplicationWindow({
	    application: this.application,
	    window_position: Gtk.WindowPosition.CENTER,
	    title: 'aboutDialog',
	    default_height: 250,
	    default_width: 400
	});
	this._window.show_all();
    },

    _initMenus: function(){
        let menu = new Gio.Menu();
        menu.append("About", 'app.about');
        menu.append("Quit",'app.quit');
        this.application.set_app_menu(menu);

        // Create the "About" menu option and have it call the _showAbout() function
        let aboutAction = new Gio.SimpleAction({ name: 'about' });
        aboutAction.connect('activate', Lang.bind(this,
            function() {
                this._showAbout();
            }));
        this.application.add_action(aboutAction);

        // Create the "Quit" menu option and have it close the window
        let quitAction = new Gio.SimpleAction ({ name: 'quit' });
        quitAction.connect('activate', Lang.bind(this,
            function() {
                this._window.destroy();
            }));
        this.application.add_action(quitAction);
    },

    _showAbout: function(){
	// String arrays of the names of the people involved in the project
        var authors = ["GNOME Documentation Team"];
        var documenters = ["GNOME Documentation Team"];

        // Create the About dialog
        let aboutDialog = new Gtk.AboutDialog({ title: "AboutDialog Example",
                                                program_name: "GtkApplication Example",
                                                copyright: "Copyright \xa9 2012 GNOME Documentation Team",
                                                authors: authors,
                                                documenters: documenters,
                                                website: "http://developer.gnome.org",
                                                website_label: "GNOME Developer Website" });

        // Attach the About dialog to the window
        aboutDialog.modal = true;
        aboutDialog.transient_for = this._window;

        // Show the About dialog
        aboutDialog.show();

        // Connect the Close button to the destroy signal for the dialog
        aboutDialog.connect('response', function() {
            aboutDialog.destroy();
        });
    },

    
});

// Run the application
let app = new AboutDialogExample();
app.application.run(ARGV);
