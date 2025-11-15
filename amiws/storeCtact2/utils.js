import axios from "axios";

// Configuración de Kafka
export const KAFKA_BROKER = process.env.KAFKA_BROKER || 'kafka-controller-0.kafka-controller-headless.lgt-advice-dv:9092';
export const KAFKA_TOPIC = process.env.KAFKA_TOPIC || 'drp-eu-te.inspire-pretrade-ack.v1';
export const KAFKA_USERNAME = process.env.KAFKA_USERNAME || 'user1';
export const KAFKA_PASSWORD = process.env.KAFKA_PASSWORD || 'GTOn01y3Jg';
export const EXTERNAL_API_URL = process.env.EXTERNAL_API_URL ||'http://advice-advice-service.lgt-advice-dv.svc.cluster.local';
export const M2M_CLIENT_SECRET = process.env.CLIENT_SECRET || 'iObq4qfPufCjbVe8KEKab.CAdf';
export const M2M_CLIENT_ID = process.env.CLIENT_ID || 'cb922b08-f5a5-4114-9620-db2ca542e615';
export const SCOPE = process.env.SCOPE || 'openid';
export const AUDIENCE = process.env.AUDIENCE || 'ocp';
export const PERSONA_ID = process.env.PERSONA_ID || '666bd517-47e7-4368-9024-2bffbba72e2d';
export const NIMBUS_CLIENT_TOKEN_URL = process.env.NIMBUS_CLIENT_TOKEN_URL || 'https://identity.nimbusplane.io/oauth2/token';
export const NIMBUS_IMPERSONATE_URL = process.env.NIMBUS_IMPERSONATE_URL || 'https://identity.nimbusplane.io/impersonate'; 

// Otras utilidades que podrían ser necesarias
export const generateJobId = () => {
  return Math.random().toString(16).substring(2, 18);
};

/*
export const generateCicId = () => {
  return '0001' + Array(45).fill('0001').join('');
}; 
*/

export const generateCicId = () => {
  
  const prefix = "0002";
  const fixedSegment1 = "LIDV78CRM";
  const fixedSegment2 = "0103";
  const padding = "0000000000";

  const generateRandomNumber = (length) => {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    return Math.floor(min + Math.random() * (max - min + 1)).toString();
  };

  const randomSegment = generateRandomNumber(21); 
  return prefix + fixedSegment1 + fixedSegment2 + padding + randomSegment;
};



export const generateContact2Id = () => {

  const randomNum = Math.floor(Math.random() * 1e9);
  return randomNum.toString().padStart(9, '0');
  
};

export async function getNimbusBasicAuthHeader() {

  console.log('✔ Requesting client token...');
  const tokenResponse = await axios.post(NIMBUS_CLIENT_TOKEN_URL, {
      grant_type: 'client_credentials',
      client_secret: M2M_CLIENT_SECRET,
      client_id: M2M_CLIENT_ID,
      scope: SCOPE,
      audience: AUDIENCE
  }, {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  });

  const clientToken = tokenResponse.data.access_token;

  console.log('✔ Client token obtained successfully.');
  console.log('✔ Client token: ', clientToken);

  console.log('✔ Requesting user token...');
  const impersonateResponse = await axios.post(NIMBUS_IMPERSONATE_URL, {
      persona_id: PERSONA_ID
  }, {
      headers: {
          'Authorization': `Bearer ${clientToken}`,
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  });

  const userToken = impersonateResponse.data.access_token;
  console.log('✔ User token obtained successfully.');
  console.log('✔ User token:', userToken);

  return userToken;
}