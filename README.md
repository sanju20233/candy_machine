# Solana_Beginnner_Candymachine
### This repo contains a Candymachine UI with a NFT Minting through SPL Tokens functionality.
## What we have to do 
### Step1
Create an SPL token .
###Step2
Make the candy machine using the SPL token .
### Step3
Your challenge actually begins now. Create a UI for your candy machine .
# Getting started 
## Step1
clone this repo and cd  CreateSplToken  , yarn install and node index 
in the index.js file you have to import the wallet account from the private key which is print in the console
and inthe console you would also get the SPL TOken mint address and SPL TOKEN account copy it save it for the further use 
You can also change the name of your token from the wallet itself.
## Step2 
I made the candy machine using the sugar-cli , to do that make sure you install sugar
. cd candyMachine and we have downloaded the assest and to start run sugar launch it have create the config.json file , 
use the SPL Token mint address and SPL token Account Address in that config file . and rest do done . copy the candy machine ID for further use 
## Step3
cd candy-machine-ui and  you have to add the candymachine id  which we have save in the step2.
yarn install 
yarn start 

