export default async (req) => {
    /*
    const { orderType } = req.body;

    if (orderType === "express") {
        return {
            status: 200,
            body: { message: "Express order processed successfully" }
        };
    }
    if (orderType === "standard") {
        return {
            status: 200,
            body: { message: "Standard order placed successfully" }
        };
    }
    */
    
    console.log('✔ Received request to /v1/comn-prefs');
    

    return {
        status: 200,
        body: [
              {
                "channel": "Direct print",
                "mailAction": "00a",
                "priority": "999",
                "addrId": "20636391",
                "addrContent": null,
                "isDomain": false,
                "isEmail": false,
                "isElectronic": false,
                "isDirectPrint": true
              },
              {
                "channel": "12E Dispatch to e-Mail (unencrypted)",
                "mailAction": "12e",
                "priority": "20",
                "addrId": "40751787",
                "addrContent": "xxx.xxxxx@xxxxxxxxxx.xx",
                "isDomain": false,
                "isEmail": true,
                "isElectronic": true,
                "isDirectPrint": false
              },
              {
                "channel": "00A Priority Mail (A-Post)",
                "mailAction": "00a",
                "priority": "99",
                "addrId": "20636391",
                "addrContent": "Addr 20636391 x  Xxxxxxxxxxx 99  99999 Xxxxxxxxxxxxxxxx  XXXXXXXXXXX",
                "isDomain": false,
                "isEmail": false,
                "isElectronic": false,
                "isDirectPrint": false
              },
            {
                "channel": "Direct print",
                "mailAction": "00a",
                "priority": "999",
                "addrId": "1496298",
                "addrContent": null,
                "isDomain": false,
                "isEmail": false,
                "isElectronic": false,
                "isDirectPrint": true
              },
              {
                "channel": "13E Feed to SmartBanking Mailbox (PDF)",
                "mailAction": "13e",
                "priority": "99",
                "addrId": "23120213",
                "addrContent": "Addr 23120213  XXXXXXXXXXXX XXXXX XXX.  Xxxxxxxxxxx 9  9999 Xxxxx",
                "isDomain": false,
                "isEmail": false,
                "isElectronic": true,
                "isDirectPrint": false
              },
            {
                "channel": "Direct print",
                "mailAction": "00a",
                "priority": "999",
                "addrId": "20700958",
                "addrContent": null,
                "isDomain": false,
                "isEmail": false,
                "isElectronic": false,
                "isDirectPrint": true
              },
              {
                "channel": "02S Mail (B-Post)",
                "mailAction": "02s",
                "priority": "99",
                "addrId": "20659729",
                "addrContent": "Addr 20659729 xxxxx  Xxxxxxxxxxxxxxx 99  9999 Xxxxx",
                "isDomain": false,
                "isEmail": false,
                "isElectronic": false,
                "isDirectPrint": false
              }
            ]
    };

    
};
