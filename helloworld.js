/**
 * hello world plugin.
 *
 */
( function( $ ) {

    $.fn.helloworld = function( options ) {
	var $this = this;
	var config = {
	    width : this.width(),
	    height : this.height(),
	    message : "hello world"
	};

	var initialize = function() {
	    if ( options ) {
		$.extend( config, options );
	    }
	    $this.addClass('jquery-helloworld').width(config.width).height(config.height);
	    var msg = $('<div class="jquery-helloworld-message">' + config.message + '</div>');
	    msg.bind( 'click', function() { alert( config.message ); } );
	    $this.add( msg );
	};

	initialize();
    };


} )( jQuery );

