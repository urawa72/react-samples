import { Amplify, I18n } from 'aws-amplify';
import { authConfig } from './authConfig';

export const amplifyInit = () => {
  Amplify.configure(authConfig);
  I18n.putVocabularies({
    ja: {
      'Back to Sign In': 'ログイン画面へ戻る',
      'Change Password': 'パスワード変更',
      Change: '更新',
      Confirm: '確認',
      'Confirm Sign Up': '新規登録の確認',
      'Confirmation Code': '確認コード',
      'Create Account': '新規登録',
      'Create a new account': 'アカウントの新規登録',
      'Create account': '新規登録',
      Email: 'メールアドレス',
      'Email Address *': 'メールアドレス',
      'Enter your code': '確認コードを入力してください',
      'Enter your password': 'パスワードを入力してください',
      'Enter your username': 'ユーザー名を入力してください',
      'Enter your email address': 'メールアドレスを入力してください',
      'Forget your password? ': 'パスワードをお忘れの方 ',
      'Have an account? ': 'アカウント登録済みの方 ',
      'Have an account?': 'アカウント登録済みの方 ',
      Hello: 'こんにちは ',
      'Incorrect username or password':
        'ユーザー名またはパスワードが異なります',
      'Lost your code? ': 'コードを紛失した方 ',
      Name: '氏名',
      'New Password': '新しいパスワード',
      'No account? ': 'アカウント未登録の方 ',
      'No account?': 'アカウント未登録の方 ',
      Password: 'パスワード',
      'Password *': 'パスワード',
      'Phone Number': '電話番号',
      'Resend Code': '確認コードの再送',
      'Reset password': 'パスワードのリセット',
      'Reset your password': 'パスワードのリセット',
      'Send Code': 'コードの送信',
      'Sign In': 'ログイン',
      'Sign Out': 'ログアウト',
      'Sign in': 'ログイン',
      'Sign in to your account': 'hogehogeにログイン',
      'User does not exist': 'ユーザーが存在しません',
      Username: 'ユーザー名',
      'Username cannot be empty': 'ユーザー名は必須入力です',
      'Username/client id combination not found.': 'ユーザー名が見つかりません',
    },
  });
  I18n.setLanguage('ja');
};
