import { generateContact2Id } from '../../util/utils.js';

let responseFlag = true; // Inicializa el flag

export default async (req) => {
    const aixigoCaseId = req.body.aixigoCaseId;
    const newContact2Id = generateContact2Id();

    console.log('✔ Received request to /v1/store-ctact2 with: ');
    console.log('✔ aixigoCaseId: ', aixigoCaseId);
    console.log('✔ Contact2Id: ', newContact2Id);

    if (aixigoCaseId !== null) {
        return {
            status: 200,
            body: {
                "ctact2": {
                    "aixigoCaseId": aixigoCaseId,  
                    "ctact2Id": newContact2Id
                },
                "response": {
                    "code": "200",
                    "message": "Store ctact2 successful",
                    "messageDetail": `Ctact2 with id: ${newContact2Id} created successfully for Aixigo case: ${aixigoCaseId}`
                }            
            }
        };
    }

    if (aixigoCaseId === null) {
      return {
          status: 400,
          body: {
            error: "Invalid Request" 
          }
      };
  }    
};
