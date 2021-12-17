const fs = require("fs");

var data = fs.readFileSync( "adidas-result-merkle-urgent.json" );
var json = JSON.parse( data );
for( var p in json.claims )
{
        fs.writeFileSync( p, JSON.stringify(json.claims[p]) );
}
