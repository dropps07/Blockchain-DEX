import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json());
let ETH_BALANCE = 200; // as a liquidity provider always use usdc or usdt to avoid impermanent loss since eth is unstable,
let USDC_BALANCE = 700000;

// Buying ETH using USDC
app.post("/buy-liquidity", (req, res) => { 
    const quantity = req.body.quantity; //input by the users buying lets say eth
    const updatedEthQuantity = ETH_BALANCE - quantity;// telling the user abt amount he paid when swap happened
    const updatedUsdcBalance = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity; //constant product formula to calculate new price
    const paidAmount = updatedUsdcBalance - USDC_BALANCE;
    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;

    res.json({
        message:`YOU paid ${paidAmount} USDC for ${quantity} ETH`
    })
})

// Selling 
app.post("/sell-asset", (req, res) => {
    const quantity = req.body.quantity; //input by thnpme users selling lets say USDC
    const updatedUsdcBalance = USDC_BALANCE - quantity;// telling the user abt amount he paid when swap happened
    const updatedEthQuantity = ETH_BALANCE * USDC_BALANCE / updatedUsdcBalance; //constant product formula to calculate new price
    const paidAmount = updatedEthQuantity - ETH_BALANCE;
    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;

    res.json({
        message:`YOU got ${paidAmount} USDC for ${quantity} ETH`
    })
})
app.listen(3000);
// hitting the backend using postman api