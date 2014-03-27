/**
 * Generates an object that describes build paths etc
 */

 module.exports = (function() {
     "use strict";

    var fs      = require( 'fs' ),
        path    = require( 'path' ),
        each    = require( 'lodash-node/modern/collections/foreach' ),
        build   = require( './build.json' );


    // Prepend page paths
    build.pages = build.pages.map( function( page ) {
        return path.join( build.core.path.pages, page );
    });

    // Prepend component paths
    build.components = build.components.map( function( comp ) {
        return path.join( build.core.path.components, comp, '/' );
    });

    // Prepend script vendor paths
    build.core.scripts.vendor = build.core.scripts.vendor.map( function( script ) {
        return path.join( build.core.path.vendor, script );
    });

    // Prepend distribution paths
    build.core.dist = each( build.core.dist, function( value, key ) {
        build.core.dist[ key ] = key === 'base' ? value : path.join( build.core.dist.base, value );
    });

    // Prepend asset paths
    build.core.assets = build.core.assets.map( function( asset ) {
        return path.join( build.core.path.core, asset );
    });


    // Sort out styles includes
    // Adds `main.less` from each component
    // _ denotes a less partial, only include main (unprefixed) files in build,
    // partials should be accessed from those main files stylesheets
    build.styles = [];
    fs.readdirSync( build.core.path.styles ).forEach( function( file ) {
        if ( !/^\_/.test( file ) ) {
            build.styles.push( path.join( build.core.path.styles, file ) );
        }
    });
    build.styles.push( path.join( build.core.path.components, '**/main.less' ) );


    // Sort out script includes
    // build.core.scripts.app = build.components.map( function( comp ) {
    //     return path.join( comp, '*.js' );
    // });
    // build.core.scripts.app.push( path.join( build.core.path.scripts, '**/*.js' ) );

    build.core.scripts.app = build.core.scripts.app.map( function( script ) {
        return path.join( build.core.path.scripts, script );
    });
    build.components.forEach( function( comp ) {
        build.core.scripts.app.push( path.join( comp, '*.js' ) );
    });

    return build;
 })();
