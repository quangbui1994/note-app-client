// export default {
//     MAX_ATTACHMENT_SIZE: 5000000,
//     STRIPE_KEY: "pk_test_hI9gTHgAM7cnvLdhhS8oyYpH00bi0TcclJ",
//     s3: {
//       REGION: "us-east-1",
//       BUCKET: "notes-app-2-api"
//     },
//     apiGateway: {
//       REGION: "us-east-1",
//       URL: "https://xhhrcw8yfe.execute-api.us-east-1.amazonaws.com/dev"
//     },
//     cognito: {
//       REGION: "us-east-1",
//       USER_POOL_ID: "us-east-1_lOs2JO4Dv",
//       APP_CLIENT_ID: "rfeihkpnrk5rd1qb5kju7ra5",
//       IDENTITY_POOL_ID: "us-east-1:1fb421b7-1835-4e93-aa2d-4e7937e47e87"
//     }
// };

const dev = {
  STRIPE_KEY: "pk_test_hI9gTHgAM7cnvLdhhS8oyYpH00bi0TcclJ",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://xhhrcw8yfe.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_lOs2JO4Dv",
    APP_CLIENT_ID: "rfeihkpnrk5rd1qb5kju7ra5",
    IDENTITY_POOL_ID: "us-east-1:1fb421b7-1835-4e93-aa2d-4e7937e47e87"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_hI9gTHgAM7cnvLdhhS8oyYpH00bi0TcclJ",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://xhhrcw8yfe.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_lOs2JO4Dv",
    APP_CLIENT_ID: "rfeihkpnrk5rd1qb5kju7ra5",
    IDENTITY_POOL_ID: "us-east-1:1fb421b7-1835-4e93-aa2d-4e7937e47e87"
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