export default async (req) => {
  const requestBody = req.body;
  const aixigoCaseId = requestBody.aixigoCaseId;
  
  console.log('✔ Received request to /v1/simulate-stex-orders with: ');
  console.log('✔ aixigoCaseId: ', aixigoCaseId);
  
  // Process each stexTrade
  const stexTradesResponse = requestBody.stexTrades.map(trade => {
      console.log('✔ Processing trade with aixigoTradeId: ', trade.aixigoTradeId);
      
      return {
          "aixigoTradeId": trade.aixigoTradeId,
          "validationResults": [
              {
                  "ruleTest": "Order Validation rule",
                  "violationType": "YELLOW",
                  "override": "lgt$stex_mkt_closed"
              }
          ]
      };
  });

  return {
      status: 200,
      body: {             
          "aixigoCaseId": aixigoCaseId,
          "response": {
              "message": "Stex orders successfully simulated and order validation performed"
          },
          "stexTrades": stexTradesResponse              
      }
  };
};