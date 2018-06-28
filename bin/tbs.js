#!/usr/bin/env node

/*
* TBS
* Author: PerterPon<PerterPon@gmail.com>
* Create: Thu Jun 28 2018 11:47:45 GMT+0800 (CST)
*/

"use strict"

const commander = require( 'commander' );
const mkdirp = require( 'mkdirp' );
const fs = require( 'fs' );
const path = require( 'path' );
const packageJSON = require( '../package.json' );

commander
    .version( packageJSON.version )
    .option( 'init', 'init tbs template' );

commander.parse( process.argv );

const cwdFolder = process.cwd();

if ( true === commander.init ) {
    initScaffold();
}


function initScaffold() {

    const templateFolder = path.join( __dirname, '../template' );

    iterateFolder( templateFolder, '' );

}

function iterateFolder( folder, relativeFolder ) {
    const result = fs.readdirSync( folder );
    for( let i = 0; i < result.length; i ++ ) {
        const itemName = result[ i ];
        const target = path.join( folder, itemName );
        const stats = fs.statSync( target );
        if ( true === stats.isFile() ) {
            const fileName = itemName.replace( '.temp', '' );
            const content = fs.readFileSync( target );
            const newFilePath = path.join( cwdFolder, relativeFolder, fileName );
            console.log( `initing file: ${ newFilePath }` );
            fs.writeFileSync( newFilePath, content );
        } else if ( true === stats.isDirectory() ) {
            const folderName = path.join( cwdFolder, relativeFolder, itemName );
            console.log( `initing folder: ${ folderName }` );
            mkdirp( folderName );
            const nextRelativeFolder = path.join( relativeFolder, itemName );
            iterateFolder( target, nextRelativeFolder );
        }
    }
}

