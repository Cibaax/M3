let fs = require('fs')
let request = require('request')

module.exports = {
    echo: function(arg, print){
        print(arg.join(' '))
    },
    date: function(arg, print){
        print(Date())
    },
    ls: function(arg, print){
        fs.readdir('.',function(err, files){
            if(err) throw err;
            print(files.join('\n')) 
        })
    },
    pwd: function(arg, print){
        print(process.cwd())
    },
    cat: function(arg, print){
        fs.readFile(arg[0], 'utf-8', function(err, data){
            if(err)throw err;
            print(data);
        }) 
    },
    head: function(arg,print){
        fs.readFile(arg[0], 'utf-8', function(err, data){
            if(err)throw err;
            print(data.split('\n').splice(0,10).join('\n')) 
        }) 
    },
    tail: function(arg,print){
        fs.readFile(arg[0], 'utf-8', function(err, data){
            if(err) throw err;
            print(data.split('\n').splice(-10).join('\n')) 
        }) 
    },
    curl: function(arg, print){
        request(arg[0], function(err, data){
            if(err) throw err;
            print(data.body)
        }) 
    }
}