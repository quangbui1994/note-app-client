// export default {
//     MAX_ATTACHMENT_SIZE: 5000000,
//     STRIPE_KEY: "pk_test_hI9gTHgAM7cnvLdhhS8oyYpH00bi0TcclJ",
//     s3: {
//       REGION: "us-east-1",
//       BUCKET: "notes-app-2-api"
//     },
//     apiGateway: {
//       REGION: "us-east-1",
//       URL: "https://lvj4ufs5q1.execute-api.us-east-1.amazonaws.com/dev"
//     },
//     cognito: {
//       REGION: "us-east-1",
//       USER_POOL_ID: "us-east-1_urk0FDdWJ",
//       APP_CLIENT_ID: "rfeihkpnrk5rd1qb5kju7ra5",
//       IDENTITY_POOL_ID: "us-east-1:3aca9f66-0ec1-4434-8acc-b1336776390b"
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
    URL: "https://lvj4ufs5q1.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_urk0FDdWJ",
    APP_CLIENT_ID: "rfeihkpnrk5rd1qb5kju7ra5",
    IDENTITY_POOL_ID: "us-east-1:3aca9f66-0ec1-4434-8acc-b1336776390b"
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
    URL: "https://lvj4ufs5q1.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_urk0FDdWJ",
    APP_CLIENT_ID: "40bmei4kbt97sd2uck1cs8go00",
    IDENTITY_POOL_ID: "us-east-1:3aca9f66-0ec1-4434-8acc-b1336776390b"
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