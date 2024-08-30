 # Covering CEXs and DEXs and how they differ. 
 * How can you build a dummy decentralised exchange with an automated market maker in Node.js
 # Concepts covered 
 * AMM (Automated Market Makers) // Liquidity pool // constant product formula is as follows
 x * y = k where the a varaible X represents the quantity of the assest in liquidity pools where as y represents the quantity of the other assest 
 # for Example
 * Lets say we have 20cr + 10 houses to sell and we combine it into our asset pool hence, making it a liquidity pool Acc to formula 10 * 200 = 200 
 # We will be learning the funds provided or withdrawn exchanges Using AUTOMATED MARKET MAKER (AMM)
 * If i have a liquidity pool fo 10 houses and 20cr and now someone buys one house i will havee 9 houses left i.e in accordance to the formula which is 9 * Y = 200
 y= 22.22222 now if the first person have to buy he will pay 2.222 cr for the house.
 * so the total liquidity = 20cr and 9 houses  
 * now if another new person comes and buys a house we will have left 8houses, 8 * Y = 200 hence Y = 2.5 then he will pay 2.5cr.
 * basically it runs on the formula price = total liquidity/no. of houses
 * and for the second time it becomes new price(y) = total liquidity(k)/no. of houses(x)

# Important discussions 
* Blockchain vs DAGs 
* Blockchain is very expensive whereas Directed acyclic graphs(DAGs) is faster and cheaper as well. Blockchain's Binance order is much realible when it comes to exchanging currency without any middleman i.e Banks

# NOTICE 
* In the market, there are many authorities i.e solana which uses a different approch to perform swaps. 
* its fine, people can have different algorithms to make swaps(exchange) BUT the one method which i'm implementing is real OG's of web3. 


# To RUN DEX
Step 1 : `npx tsc -init`
Step 2 : `tsc -b`
Step 3 : `node dist/src/index.cjs` // Rename your index.js file to `.cjs` and before running your commands make sure to add `"type":"module"` in `tsconfig.json`.
Step 4 : Hit the backend using postman api and your Decentralized Exchange will Work Accordingly!.
