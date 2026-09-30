# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Page >> Verify login page elements are visible
- Location: tests\login.spec.ts:5:9

# Error details

```
TypeError: loginPage.passwordFieldIsVisibles is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { test } from '../fixture/baseTest';
  2  | import { data } from '../data/test.data';
  3  | 
  4  | test.describe('Login Page',() => {
  5  |     test('Verify login page elements are visible', async ({ loginPage }) => {
  6  |         await loginPage.page.goto('/');
  7  |         await loginPage.headerIsVisible();
  8  |         await loginPage.usernameFieldIsVisible();
> 9  |         await loginPage.passwordFieldIsVisibles();
     |                         ^ TypeError: loginPage.passwordFieldIsVisibles is not a function
  10 |         await loginPage.loginButtonIsVisible();
  11 |     });
  12 | 
  13 |     test('Verify user can login with valid credentials', async ({ loginPage }) => {
  14 |         await loginPage.page.goto('/');
  15 |         await loginPage.fillLoginCredential(data.validUser.username, data.validUser.password);
  16 |         await loginPage.verifyLoginButtonIsClicked();
  17 |     });
  18 | });
```