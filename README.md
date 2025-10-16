# hardhat-create

This is a version of the `Deploy a Contract with Ethers.js + Hardhat` exercise from Alchemy University Ethereum Bootcamp.
The example given looks like it was based on a previous version of Hardhat or Ethers.js, I got a few errors trying to get
it going. I saw some suggestions related to forcing the project to older versions, but instead I wanted to try getting it
working with the updated tooling.

These are the versions I've been working with:

```
$ npm list
hardhat-create@1.0.0 /home/miker/repos/hardhat-create
├── @nomicfoundation/hardhat-ignition@3.0.3
├── @nomicfoundation/hardhat-toolbox-mocha-ethers@3.0.0
├── @types/chai-as-promised@8.0.2
├── @types/chai@4.3.20
├── @types/mocha@10.0.10
├── @types/node@22.18.10
├── chai@5.3.3
├── dotenv@17.2.3
├── ethers@6.15.0
├── forge-std@1.9.4 (git+ssh://git@github.com/foundry-rs/forge-std.git#1eea5bae12ae557d589f9f0f0edae2faa47cb262)
├── hardhat@3.0.7
├── mocha@11.7.4
└── typescript@5.8.3
```

I tried to keep this updated version as close to the code from the original sample as I could. Here's the process I
went through to get it up and going:

* mkdir hardhat-create
* cd hardhat-create
* npm init -y
* npm install --save-dev hardhat
* npm install dotenv # NOTE: I did't install the other packages like ethers or chai manually here, just dotenv
* npx hardhat --init # I created the project with Hardhat V3, converted to typescript, and with mocha/ethers
* add `import "dotenv/config.js";` to the start of the hardhat.config.ts
* remove the existing contents of the contracts directory and put in Faucet.sol exactly as it was
* removed the existing script and put the deploy.ts in place, there were some changes there, noted in comments in the scripts/deploy.ts file
* copy the env.sample to .env and fill in the url and key
* npx hardhat compile
* npx hardhat run scripts/deploy.ts --network sepolia

I was able to get the contract showing up on Sepolia etherscan. Before the changes I was getting lots of immediate
and obvious errors like modules not loading and undefined symbols.
