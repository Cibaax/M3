const commands = require('./commands/index')


const print = function(output){
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  let arg = data.toString().trim().split(' ');
  let cmd = arg.shift();

  if(commands[cmd]){
    commands[cmd](arg, print);
  }
  else{
    print('cmd not found')
  }
});