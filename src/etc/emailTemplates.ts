export const createAuthEmail = (registered: boolean, code: string) => {
  const keywords = registered
    ? {
        type: 'email-login',
        text: 'Sign In'
      }
    : {
        type: 'register',
        text: 'Register'
      };

  const subject = `Reactlog ${keywords.text}`;
  const body = `<a href="https://reactlog.io"><img src="https://images.reactlog.io/email-logo.png" style="display: block; width: 128px; margin: 0 auto;"/></a>
  <div style="max-width: 100%; width: 400px; margin: 0 auto; padding: 1rem; text-align: justify; background: #f8f9fa; border: 1px solid #dee2e6; box-sizing: border-box; border-radius: 4px; color: #868e96; margin-top: 0.5rem; box-sizing: border-box;">
    <b style="black">Hello! </b>${
      keywords.text
    } Click the link below to continue. if you made a request by mistake, or if you didn't, please ignore this email.
  </div>

  <a href="https://reactlog.io/${
    keywords.type
  }?code=${code}" style="text-decoration: none; width: 400px; text-align:center; display:block; margin: 0 auto; margin-top: 1rem; background: #845ef7; padding-top: 1rem; color: white; font-size: 1.25rem; padding-bottom: 1rem; font-weight: 600; border-radius: 4px;">continue</a>

  <div style="text-align: center; margin-top: 1rem; color: #868e96; font-size: 0.85rem;"><div>Click the button above or open the following link: <br/> <a style="color: #b197fc;" href="https://reactlog.io/${
    keywords.type
  }?code=${code}">https://reactlog.io/${
    keywords.type
  }?code=${code}</a></div><br/><div>This link is valid for 24 hours. </div></div>`;

  return {
    subject,
    body
  };
};
