// export default {
//     MAX_ATTACHMENT_SIZE: 5000000,
//     STRIPE_KEY: "pk_test_hI9gTHgAM7cnvLdhhS8oyYpH00bi0TcclJ",
//     s3: {
//       REGION: "us-east-1",
//       BUCKET: "quang-notes-app-uploads"
//     },
//     apiGateway: {
//       REGION: "us-east-1",
//       URL: "https://wfjjne7z93.execute-api.us-east-1.amazonaws.com/prod"
//     },
//     cognito: {
//       REGION: "us-east-1",
//       USER_POOL_ID: "us-east-1_Lty7wOM1l",
//       APP_CLIENT_ID: "422mpcglifcu0n7vpn1i31emjt",
//       IDENTITY_POOL_ID: "us-east-1:f55fa677-53fb-4ab2-9c44-99d2ff9afb91"
//     }
// };

const dev = {
  STRIPE_KEY: "pk_test_hI9gTHgAM7cnvLdhhS8oyYpH00bi0TcclJ",
  s3: {
    REGION: "us-east-1",
    BUCKET: "quang-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://wfjjne7z93.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Lty7wOM1l",
    APP_CLIENT_ID: "422mpcglifcu0n7vpn1i31emjt",
    IDENTITY_POOL_ID: "us-east-1:f55fa677-53fb-4ab2-9c44-99d2ff9afb91"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_hI9gTHgAM7cnvLdhhS8oyYpH00bi0TcclJ",
  s3: {
    REGION: "us-east-1",
    BUCKET: "quang-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://wfjjne7z93.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Lty7wOM1l",
    APP_CLIENT_ID: "422mpcglifcu0n7vpn1i31emjt",
    IDENTITY_POOL_ID: "us-east-1:f55fa677-53fb-4ab2-9c44-99d2ff9afb91"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};