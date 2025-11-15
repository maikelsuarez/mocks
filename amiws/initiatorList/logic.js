export default async (req) => {
    
    const bpId = req.query.bpId;

    console.log('✔ Received request to /v1/initiators with bpId:', bpId );

    if (bpId !== "1") {
        return {
            status: 200,
            body: {
              "response": {
                "status": "200",
                "code": "OK",
                "message": "OK",
                "messageDetail": "I said ok."
              },
              "initiators": [
                {
                  "avaloqId": 239573,
                  "aixigoId": "ACP-OBJ_PERSON-LGT_LI-239573",
                  "personName": "person239573",
                  "roleIntlId": "acc_owner",
                  "domicile": {
                    "iso": "CH",
                    "name": "Switzerland"
                  },
                  "hasCollSigntRght": false
                },
                {
                  "avaloqId": 239578,
                  "aixigoId": "ACP-OBJ_PERSON-LGT_LI-239578",
                  "personName": "person239578",
                  "roleIntlId": "acc_owner",
                  "domicile": {
                    "iso": "AT",
                    "name": "Austria"
                  },
                  "hasCollSigntRght": true
                },
                {
                  "avaloqId": 241129,
                  "aixigoId": "ACP-OBJ_PERSON-LGT_LI-241129",
                  "personName": "person241129",
                  "roleIntlId": "auth02",
                  "domicile": {
                    "iso": "LI",
                    "name": "Lichtenstein"
                  },
                  "hasCollSigntRght": false
                }
            ]
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
