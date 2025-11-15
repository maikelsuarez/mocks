export default async (req) => {
    
    const solicitation = req.body.solicitation;

    console.log('🔍 API Request Debug - Endpoint: /getDocumentSegments', {
      timestamp: new Date().toISOString(),
      parameters: req.body
    });


    if (solicitation === true) {
        console.log('🔍 Solicitation: true -- Advised case.', {
          timestamp: new Date().toISOString()
        });
        return {
            status: 200,
            body: {
              "segments":[
                {
                  "name": "PRDOCM list",
                  "intlId": "prdocm_list",
                  "id": 2,
                  "category": "mandatory"
                },
                {
                  "name": "Detailed overview of transactions prior to execution",
                  "intlId": "transact",
                  "id": 6,
                  "category": "mandatory"
                },
                {
                  "name": "Cost & charges document",
                  "intlId": "cost_char",
                  "id": 7,
                  "category": "mandatory"
                },
                {
                  "name": "Disclaimer non-advised",
                  "intlId": "disclaimer_lgtadvice_nonadv",
                  "id": 34,
                  "category": "mandatory"
                },
                {
                  "name": "Front slide",
                  "intlId": "front_non_adv",
                  "id": 5,
                  "category": "suggested"
                },
                {
                  "name": "Table of contents",
                  "intlId": "document_register",
                  "id": 1,
                  "category": "optional"
                },
                {
                  "name": "Cost & charges document (detail)",
                  "intlId": "cost_char_det",
                  "id": 28,
                  "category": "optional"
                },
                {
                  "name": "Overview product allocation",
                  "intlId": "prod_alloc_incl_1",
                  "id": 9,
                  "category": "optional"
                },
                {
                  "name": "Overview asset and currency allocation",
                  "intlId": "asset_curr_ueber_1",
                  "id": 11,
                  "category": "optional"
                },
                {
                  "name": "Asset classes in detail",
                  "intlId": "chart_klass_det",
                  "id": 12,
                  "category": "optional"
                },
                {
                  "name": "Positioning in detail",
                  "intlId": "asset_pos_det",
                  "id": 26,
                  "category": "optional"
                },
                {
                  "name": "Overview single bonds (incl. regrouping)",
                  "intlId": "sing_bond_incl_1",
                  "id": 13,
                  "category": "optional"
                },
                {
                  "name": "Single bonds in detail",
                  "intlId": "sing_bond_det_1",
                  "id": 15,
                  "category": "optional"
                },
                {
                  "name": "Overview single equities (incl. regrouping)",
                  "intlId": "sing_eq_incl_1",
                  "id": 17,
                  "category": "optional"
                },
                {
                  "name": "Single equities in detail",
                  "intlId": "sing_eq_det_1",
                  "id": 20,
                  "category": "optional"
                },
                {
                  "name": "Risk and return analysis (incl. source)",
                  "intlId": "risk_rtn_an_incl",
                  "id": 22,
                  "category": "optional"
                },
                {
                  "name": "Risk coverage analysis",
                  "intlId": "risk_cover_target",
                  "id": 25,
                  "category": "optional"
                },
                {
                  "name": "Health Check",
                  "intlId": "risk_suity_health_chk",
                  "id": 27,
                  "category": "optional"
                },
                {
                  "name": "Analysis on portfolio level",
                  "intlId": "sust_ana_portf",
                  "id": 32,
                  "category": "optional"
                },
                {
                  "name": "Analysis on portfolio level",
                  "intlId": "sust_ana_sing_eq",
                  "id": 33,
                  "category": "optional"
                }
              ],
              "_trace":{
                "requestId":"59eb75e0-3d79-4c17-a335-e86981e579fa",
                "version":"1.34",
                "modelPath":"getDocumentSegments",
                "modelName":"AdvisorySituationOutput"
              }
            }
        };
    }

    if (solicitation === false) {
      console.log('🔍 Solicitation: false -- Non-advised case.', {
        timestamp: new Date().toISOString()
      });
      return {
          status: 200,
          body: {
            "segments":[
              {
                "name": "PRDOCM list",
                "intlId": "prdocm_list",
                "id": 2,
                "category": "mandatory"
              },
              {
                "name": "Detailed overview of transactions prior to execution",
                "intlId": "transact",
                "id": 6,
                "category": "mandatory"
              },
              {
                "name": "Cost & charges document",
                "intlId": "cost_char",
                "id": 7,
                "category": "mandatory"
              },
              {
                "name": "Disclaimer advised",
                "intlId": "disclaimer_lgtadvice_adv",
                "id": 34,
                "category": "mandatory"
              },
              {
                "name": "Front slide",
                "intlId": "front_adv",
                "id": 5,
                "category": "suggested"
              },
              {
                "name": "Table of contents",
                "intlId": "document_register",
                "id": 1,
                "category": "optional"
              },
              {
                "name": "Cost & charges document (detail)",
                "intlId": "cost_char_det",
                "id": 28,
                "category": "optional"
              },
              {
                "name": "Suitability Statement",
                "intlId": "suity_statem",
                "id": 36,
                "category": "mandatory"
              },
              {
                "name": "Overview product allocation",
                "intlId": "prod_alloc_incl_1",
                "id": 9,
                "category": "optional"
              },
              {
                "name": "Overview asset and currency allocation",
                "intlId": "asset_curr_ueber_1",
                "id": 11,
                "category": "optional"
              },
              {
                "name": "Asset classes in detail",
                "intlId": "chart_klass_det",
                "id": 12,
                "category": "optional"
              },
              {
                "name": "Positioning in detail",
                "intlId": "asset_pos_det",
                "id": 26,
                "category": "optional"
              },
              {
                "name": "Overview single bonds (incl. regrouping)",
                "intlId": "sing_bond_incl_1",
                "id": 13,
                "category": "optional"
              },
              {
                "name": "Single bonds in detail",
                "intlId": "sing_bond_det_1",
                "id": 15,
                "category": "optional"
              },
              {
                "name": "Overview single equities (incl. regrouping)",
                "intlId": "sing_eq_incl_1",
                "id": 17,
                "category": "optional"
              },
              {
                "name": "Single equities in detail",
                "intlId": "sing_eq_det_1",
                "id": 20,
                "category": "optional"
              },
              {
                "name": "Risk and return analysis (incl. source)",
                "intlId": "risk_rtn_an_incl",
                "id": 22,
                "category": "optional"
              },
              {
                "name": "Risk coverage analysis",
                "intlId": "risk_cover_target",
                "id": 25,
                "category": "optional"
              },
              {
                "name": "Health Check",
                "intlId": "risk_suity_health_chk",
                "id": 27,
                "category": "optional"
              },
              {
                "name": "Analysis on portfolio level",
                "intlId": "sust_ana_portf",
                "id": 32,
                "category": "optional"
              },
              {
                "name": "Analysis on portfolio level",
                "intlId": "sust_ana_sing_eq",
                "id": 33,
                "category": "optional"
              }
            ],
            "_trace": {
              "requestId": "59eb75e0-3d79-4c17-a335-e86981e579fa",
              "version": "1.34",
              "modelPath": "getDocumentSegments",
              "modelName": "AdvisorySituationOutput"
            }
          }
    };
  }

    if (solicitation !== "") {
      return {
          status: 400,
          body: {
            error: "Invalid Request" 
          }
    };
  }
    
};
