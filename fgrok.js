#!/usr/bin/env node
const ngrok = require("@ngrok/ngrok");
const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const args = process.argv.slice(2);
const proto = args[0];
const port = Number(args[1]);

const help = `
 ████████████
 ██
 ██
 ████████████   █████████    ██    ████    ██████     ██    ███
 ██            ██       ██   ██  ██      ██      ██   ██  ███
 ██            ██       ██   ████        ██      ██   █████
 ██              █████████   ██          ██      ██   ██  ██
 ██                     ██   ██          ██      ██   ██   ██
 ██             ███     ██   ██          ██      ██   ██    ██
                   █████     ██            ██████     ██     ███

                  Fgrok - Port Forwarding with Ngrok

Usage: fgrok [Options] | <Port>

Options:
 http     Forward HTTP Server
 tcp      Forward TCP Server
 help     Print help
 version  Print Fgrok version
 
Examples:
 fgrok http 8080 | fgrok tcp 3000`;

function logExit(text) {
	console.log(text)
	process.exit(0)
}

function forward(proto, port, token) {
  ngrok.forward({ addr: port, authtoken: token, proto: proto }).then((res) => {
    console.log(`[+] Forwarding ${proto.toUpperCase()} server on port ${port}:\n${res.url()}`);
  });
  process.stdin.resume();
}

function createFileAuthToken() {
  readline.question("[*] Enter your authtoken ngrok: ", (token) => {
    if (token.length > 0) {
      try {
        fs.writeFileSync(".token.txt", token);
        return logExit(`[+] Success, please restart ngrok`);
      } catch (e) {
        logExit(e);
      }
    }

    if (token.length < 1) {
      console.log("[!] Missing token, please enter your authtoken ngrok.");
      createFileAuthToken();
    }
  });
}

function checkAuthToken() {
  return new Promise((resolve) => {
    if (fs.existsSync(".token.txt")) {
      const token = fs.readFileSync(".token.txt", "utf8")
      resolve(token)
    } else {
      resolve(false);
      createFileAuthToken();
    }
  });
}


async function startNgrok() {
 const token = await checkAuthToken()
 if(args[0] === "help" && !args[1]) return logExit(`${help}`);
 if(args[0] === "version" && !args[1]) return logExit("v1.0.0");
 if(["http", "tcp"].includes(proto) && port && token){
 	forward(proto, port, token)
 }
 
 if(!["http", "tcp"].includes(proto) && !port){
   if(token) {	
  logExit("Fgrok: Invalid arguments\nTry 'fgrok help' for information.")
  }
 }

}
startNgrok();

