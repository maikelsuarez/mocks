export default async (req) => {
    
    const assetIsin = req.body.assetIsin;
    const quantity = req.body.quantity;
    const aixigoTradeId = req.body.aixigoTradeId;

    console.log('✔ Received request to /lgt-advice/stex-sim/sim-stex-ovr with: ');
    console.log('✔ assetIsin: ', assetIsin );
    console.log('✔ quantity: ', quantity );
    console.log('✔ aixigoTradeId: ', aixigoTradeId );

    if (assetIsin === "CH0244767585" && (quantity === "" || quantity === null || quantity === undefined)) {
        return {
            status: 200,
            body: {
              "validationResults": [
                {
                  "aixigoTradeId": "1232",
                  "avaloqOrderId": 501128272,
                  "businessUnit": "LI",
                  "ruleText": "No violation",
                  "violType": "green"
                }
              ]
            }
        };
    }

    if (assetIsin === "CH0244767585" && quantity === "10000000" ) {
      return {
          status: 200,
          body: {
            "validationResults": [
              {
                "aixigoTradeId": aixigoTradeId,
                "avaloqOrderId": 501128062,
                "businessUnit": "LI",
                "ruleText": "The order &1 did not pass the credit check. Please verify the financial situation of the client before you proceed with the transaction.\nDo you want to continue?",
                "violType": "yellow",
                "overrideId": "12240"
              }
            ]
          }
      };
    }

    if (assetIsin === "CH0244767586" && quantity === "20000000" ) {
      return {
          status: 200,
          body: {
            "validationResults": [
              {
                "aixigoTradeId": aixigoTradeId,
                "avaloqOrderId": 501128062,
                "businessUnit": "LI",
                "ruleText": "The order &1 did not pass the credit check... Please verify the financial situation of the client before you proceed with the transaction.\nDo you want to continue?",
                "violType": "red",
                "overrideId": "12240"
              }
            ]
          }
      };
    }

    if (assetIsin !== "CH0244767585") {
      return {
          status: 400,
          body: {
            error: "Invalid Request" 
          }
      };
  }

    /*
    if (orderType === "standard") {
        return {
            status: 200,
            body: { message: "Standard order placed successfully" }
        };
    }
    */
    
    
    

    

    
};
