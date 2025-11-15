import { EXTERNAL_API_URL, generateCicId, getNimbusBasicAuthHeader } from '../../util/utils.js';
import axios from 'axios';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const ccResponsePayload = {
    aixigoCaseId: "1231",
    cicId: "0002LIDV78CRM010300000000000020250210110443196564855",
    standardRsp: {
       message: "Generate C&C Document with help of 579730808",
       messageDetail: "C&C document successfully generated with help of mail_idx number 196564855"
    }
};

export default async (req, res) => {

 console.log('Received request to /v1/gen-costs-and-charges-docm');
  try {
    ccResponsePayload.cicId = generateCicId();
    const cicId = ccResponsePayload.cicId;
 
    const filePath = path.join(__dirname, 'assets', 'response.pdf');
    const fileData = fs.readFileSync(filePath);
    const base64Content = fileData.toString('base64');
    
    const payload = {
      section: {
        type: "COST_AND_CHARGES",
        content: base64Content
      }
    };

    const immediateResponse = {
        status: 200,
        body: {
            aixigoCaseId: "1231",
            cicId: cicId,
            standardRsp: {
                message: "Generate C&C Document with help of 579730808",
                messageDetail: "C&C document successfully generated with help of mail_idx number 196564855"
            }
        }
    };
    
    (async () => {
        const authorizationHeader = await getNimbusBasicAuthHeader();

        console.log('✔ Waiting for a coffee before call Advice Service.');
        await new Promise(resolve => setTimeout(resolve, 10000));
        console.log('✔ Hmmm Delicious!!! - OK lets do it.');
        const externalUrl = `${EXTERNAL_API_URL}/documents/${cicId}/sections`;
        console.log('✔ Sending COMS Mocked Response to Facade at: ', externalUrl);
        try {
            await axios.put(externalUrl, payload, {
                headers: {
                    'Authorization': `Bearer ${authorizationHeader}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('✔ Advice Service call successful');
        } catch (error) {
            console.error('❌ Error calling Advice Service: ', error);
        }
    })();

    return immediateResponse;

  } catch (error) {
    console.error('Error calling Advice Service:', error);
  }

};
