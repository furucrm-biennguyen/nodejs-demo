# Nodejs demo

This project is a nodejs demo api.

## Installation

### Clone the project
```bash
git clone https://github.com/furucrm-biennguyen/nodejs-demo.git
cd nodejs-demo
```
### Setup your environment variables
If do not have .env file, run

```bash
cp .env.example .env
```

### Install dependencies
```bash
npm install
```

### [Optional] Create certificates for ssl connection
```bash
mkdir openssl && cd openssl

# For MacOS or Linux
openssl req -x509 \
            -sha256 -days 356 \
            -nodes \
            -newkey rsa:2048 \
            -subj "/CN=demo.furucrm.com/C=VN/L=HCMc" \
            -keyout rootCA.key -out rootCA.crt
# For Windows
openssl req -x509 \
            -sha256 -days 356 \
            -nodes \
            -newkey rsa:2048 \
            -subj "//CN=demo.furucrm.com\C=VN\L=HCMc" \
            -keyout rootCA.key -out rootCA.crt
```
<i>
Note: For MacOS, you need to open `rootCA.crt` file in your finder to add to keychain
</i>


## Run the project
```bash
nodemon nodejs_demo
``` 

The project will be started at <a target="_blank" href="http://localhost:3000">http://localhost:3000</a> or  <a target="_blank" href="https://localhost:3000">https://localhost:3000</a> with ssl.