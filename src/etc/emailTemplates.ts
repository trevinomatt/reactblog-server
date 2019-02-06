export const createAuthEmail = (isUser: boolean, code: string) => {
  const keywords = isUser
    ? {
        type: 'email-login',
        text: 'Sign In'
      }
    : {
        type: 'register',
        text: 'Register'
      };

  // return {
  //   subject: `Velog ${keywords.text}`,
  //   body:
  // }
};
