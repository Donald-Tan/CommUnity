export type RootStackParamList = {
    SignUp: undefined; // No params for SignUp screen
    CreateAccount: { userId: string }; // Expecting userId (string) to be passed to CreateAccount screen
  };