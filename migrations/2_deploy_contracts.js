var ResearchToken = artifacts.require("./ResearchToken.sol");
var ResearchTokenSale = artifacts.require("./ResearchTokenSale.sol");

module.exports = function(deployer) {
  // Deploy contract with total token supply of 1,000,000 tokens
  deployer.deploy(ResearchToken, 1000000).then(function() {
    // Token price is .001 Ether, or $1 USD @ $1k USD/ether
    var tokenPrice = 1000000000000000; // in wei
    return deployer.deploy(ResearchTokenSale, ResearchToken.address, tokenPrice);
  });
};
