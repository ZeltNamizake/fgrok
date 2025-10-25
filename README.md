# Fgrok
Port Forwarding via Ngrok – Simple CLI Tool Built with Node.js

```javascript
 ████████████
 ██
 ██
 ████████████   █████████   ██    ████    ██████     ██    ███
 ██              ██       ██   ██  ██      ██      ██   ██  ███
 ██              ██       ██   ████        ██      ██   █████
 ██               █████████   ██          ██      ██   ██  ██
 ██                       ██   ██          ██      ██   ██   ██
 ██              ███     ██   ██          ██      ██   ██    ██
                    █████     ██            ██████     ██     ███

                  Fgrok - Port Forwarding with Ngrok

Usage: fgrok [Options] | <Port>

Options:
 http     Forward HTTP Server
 tcp      Forward TCP Server
 help     Print help
 version  Print Fgrok version

Examples:
 fgrok http 8080 | fgrok tcp 3000
```

Fgrok is a lightweight CLI for port forwarding using the Ngrok API. With Fgrok, you can quickly open public access to your local server with just a single command. 

## Features 🚀
- Easily forward HTTP and TCP servers
- Automatically store Ngrok authtokens locally
- Simple, interactive CLI
- No complicated configuration

## Instalation 📦
Make sure you have Node.js (>=16) and npm installed.

```bash
$ git clone https://github.com/ZeltNamizake/fgrok
$ cd fgrok && npm install @ngrok/ngrok@1.5.0
$ npm link
```

If this is your first time running fgrok, you'll be prompted to enter the Ngrok authtoken. The token will be automatically saved in the `.token.txt` file.

## Example Output 🧠
```less
[*] Enter your authtoken ngrok:
[+] Success, please restart ngrok
[+] Forwarding HTTP server on port 8080:
https://randomstring.ngrok-free.app
```

## Dependencies 🧩
- [__@ngrok/ngrok__](https://www.npmjs.com/package/@ngrok/ngrok)
- [__readline__](https://nodejs.org/api/readline.html)
- [__fs (filesystem)__](https://nodejs.org/api/fs.html)

###### `Created by Driyas (ZeltNamizake)`
