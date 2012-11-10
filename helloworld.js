/**
 * hello world plugin.
 *
 */
( function( $ ) {

    $.fn.helloworld = function( options ) {
        var config = {
            width : this.width(),
            height : this.height(),
            message : "hello world"
        };

        return this.each( function() {
            if ( options ) {
        	    $.extend( config, options );
            }
            $this = $(this);
            $this.addClass("jquery-helloworld").width(config.width).height(config.height);
            var msg = $('<div class="jquery-helloworld-message">' + config.message + '</div>');
            msg.bind( 'click', function() { alert( config.message ); } );
            $this.after( msg );
        });
    };

} )( jQuery );

