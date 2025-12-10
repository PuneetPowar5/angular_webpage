# Angular Local Development Setup

This guide explains how to set up and run the Angular application locally so it can be accessed from your machine, emulators, or other devices on the same network.

---

## 1. Prerequisites

- **Node.js v22** (or higher)
- **Angular CLI** (latest version)

---

## 2. Install Node.js

Download and install Node.js v22 from:

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Verify installation:

```bash
node -v

This should output:

v22.x.x
```

---

## 3. Install Angular CLI

Run the following command in terminal:

npm install -g @angular/cli

Run this command to verify that the cli is downloaded:

ng version

NOTE:

If ng is not recognized by your machine do the following:

echo 'export PATH="$PATH:$(npm config get prefix)/bin"' >> ~/.bashrc
source ~/.bashrc

OR

echo 'export PATH="$PATH:$(npm config get prefix)/bin"' >> ~/.zshrc
source ~/.zshrc

Depending on if you are using zsh or bash

Now you will be able to run the following:

ng version

---

## 4. Run Angular Application Locally

Run the following command:

ng serve --host 0.0.0.0 --port 4200

These steps will allow you to run this internal dashboard locally on your machine
