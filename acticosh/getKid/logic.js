export default async (req) => {
    
    const isin = req.body.asset_details?.isin;

    console.log('🔍 API Request Debug - Endpoint: /getKid', {
      timestamp: new Date().toISOString(),
      parameters: req.body
    });

    // Validar que isin existe
    if (!isin) {
        console.log('❌ Error: ISIN not found in request body', {
          timestamp: new Date().toISOString(),
          requestBody: req.body
        });
        return {
            status: 400,
            body: {
                error: "ISIN is required in asset_details"
            }
        };
    }

    console.log('🔍 Processing ISIN:', isin, {
      timestamp: new Date().toISOString()
    });

    let response_body = {};

    if (isin === 'US0378331005') {
        console.log('🔍 ISIN: US0378331005 - No Product Document required', {
          timestamp: new Date().toISOString()
        });
        response_body = {
            "KID_response": {
                "case_id": "LU0048584097_8007237",
                "KID_list": [],
                "status_overall": "blue",
                "message": "No Product Document required.",
                "status_overall_id": 0
            },
            "cost_and_charges_response": {
                "cost_charges_to_send": false,
                "cost_charges_required": false,
                "cost_charges_to_archive": false,
                "cost_charges_message": "",
                "case_id": null
            },
            "_trace": {
                "version": "1.52",
                "modelPath": "Get_Kid",
                "modelName": "LGT_Get_Kid",
                "requestId": "3c6a895d-649e-46d8-a82d-e85e520e1ca7"
            }
        };
    } else if (isin === 'US0231351067') {
        console.log('🔍 ISIN: US0231351067 - No Product Document found', {
          timestamp: new Date().toISOString()
        });
        response_body = {
            "KID_response": {
                "case_id": isin + "_not_found",
                "KID_list": [],
                "status_overall": "red",
                "message": "No Product Document found.",
                "status_overall_id": 0
            }
        };
    } else if (isin === 'US02079K3059') {
        console.log('🔍 ISIN: US02079K3059 - Generic Product Document retrieved', {
          timestamp: new Date().toISOString()
        });
        response_body = {
            "KID_response": {
                "case_id": "ES0000012J07_0034434",
                "KID_list": [{
                    "link": "YY0157495052_mifid_pid_de_xx_20250129135018_9071.pdf",
                    "status": "yellow",
                    "message": "Only generic Product Document retrieved...",
                    "prod_docm_type": "mifid_pid",
                    "status_id": 5,
                    "to_archive": false,
                    "to_send": true
                }],
                "status_overall": "yellow",
                "message": "There is at least one submessage inside the kid_list",
                "status_overall_id": 100
            },
            "cost_and_charges_response": {
                "cost_charges_to_send": false,
                "cost_charges_required": true,
                "cost_charges_to_archive": false,
                "cost_charges_message": null,
                "case_id": null
            },
            "_trace": {
                "version": "1.52",
                "modelPath": "Get_Kid",
                "modelName": "LGT_Get_Kid",
                "requestId": "9d67d0c6-6c2f-41ea-ad8f-75266961dcd7"
            }
        };
    } else if (isin === 'CH0012032048') {
        console.log('🔍 ISIN: CH0012032048 - No Product Document retrieved', {
          timestamp: new Date().toISOString()
        });
        response_body = {
            "KID_response": {
                "case_id": "123",
                "KID_list": [{
                    "link": null,
                    "status": "red",
                    "message": "No Product Document (PRIIPs KID) retrieved - trade execution is not allowed...",
                    "prod_docm_type": null,
                    "status_id": 10,
                    "to_archive": true,
                    "to_send": false
                }],
                "status_overall": "red",
                "message": "There is at least one submessage inside the kid_list",
                "status_overall_id": 100
            },
            "cost_and_charges_response": {
                "cost_charges_to_send": false,
                "cost_charges_required": true,
                "cost_charges_to_archive": true,
                "cost_charges_message": null,
                "case_id": null
            },
            "_trace": {
                "version": "1.52",
                "modelPath": "Get_Kid",
                "modelName": "LGT_Get_Kid",
                "requestId": "217f06e2-f8e2-4ca1-9a84-97bb5508189c"
            }
        };
    } else {
        console.log('🔍 ISIN: ' + isin + ' - Default case: Correct Product Document retrieved', {
          timestamp: new Date().toISOString()
        });
        response_body = {
            "KID_response": {
                "case_id": "LU0048584097_8007237",
                "KID_list": [{
                    "link": "LU0048584097_ucits_en_gb_20250129132017_6048.pdf",
                    "status": "green",
                    "message": "Correct Product Document successfully retrieved.Right document received.",
                    "prod_docm_type": "ucits",
                    "status_id": 2,
                    "to_archive": false,
                    "to_send": true
                }],
                "status_overall": "green",
                "message": "There is at least one submessage inside the kid_list",
                "status_overall_id": 100
            },
            "cost_and_charges_response": {
                "cost_charges_to_send": false,
                "cost_charges_required": false,
                "cost_charges_to_archive": false,
                "cost_charges_message": null,
                "case_id": null
            },
            "_trace": {
                "version": "1.52",
                "modelPath": "Get_Kid",
                "modelName": "LGT_Get_Kid",
                "requestId": "2989a716-3c61-4572-8b29-85f9810986a2"
            }
        };
    }

    console.log('✅ Response generated for ISIN:', isin, {
      timestamp: new Date().toISOString(),
      status: response_body.KID_response?.status_overall
    });

    return {
        status: 200,
        body: response_body
    };
};