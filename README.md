# Template repo for pure flask to react frontend migration

This repo shows minimal setup for compiling react frontend as includeable static file 
that can be served by flask backend while maintaining access to legacy flask-rendered pages

This allows to serve some views as flask templates and some as react app


Current limitation: react app is served on each request so bigger 
apps will decrease page load time in exchange of  


## Installation

```bash
cd templates/frontend
npm install
```
Running in 2 separate terminals:
```bash
npx webpack  # Start bundler
```
```bash
python app.py  # Launch flask app
```