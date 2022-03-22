import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import Cookies from 'js-cookie';
import { useMutation } from '@apollo/client';

import { LOGIN_USER_MUTATION } from '../../graphql/mutation';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

const AuthContext = createContext<{
  authenticated: boolean;
  dispatch: Dispatch<boolean>;
}>({
  authenticated: false,
  dispatch: () => null,
});

type Props = {
  children: ReactNode;
};

export default function AuthProvider(props: Props): JSX.Element {
  const { children } = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');

    if (!token) {
      return;
    }

    setIsAuthenticated(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authenticated: isAuthenticated,
        dispatch: setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

type UserSignInput = {
  email: string;
  password: string;
};

export function useAuth(): {
  authenticated: boolean;
  signIn: (input: UserSignInput) => Promise<void>;
  signOut: () => void;
} {
  const { authenticated, dispatch: toggleAuthenticated } =
    useContext(AuthContext);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [loginUserMutate] = useMutation(LOGIN_USER_MUTATION);

  async function handleSignIn(input: UserSignInput): Promise<void> {
    try {
      const response = (await loginUserMutate({
        variables: { userLoginInput: input },
      })) as any;
      const { token, confirmed, _id } = response.data.loginUser;
      if (!confirmed) {
        enqueueSnackbar(
          'Nemáte práva na prístup do administrácie. Kontaktujte administrátora.',
          {
            variant: 'error',
          }
        );
        return;
      }

      Cookies.set('token', token);
      Cookies.set('userId', _id);

      toggleAuthenticated(true);
      router.push('/admin');
    } catch (error) {
      enqueueSnackbar('Nesprávne prihlasovacie údaje', {
        variant: 'error',
      });
    }
  }

  function handleSignOut(): void {
    Cookies.remove('token');
    Cookies.remove('userId');
    console.log('signout');
    toggleAuthenticated(false);
  }

  return {
    authenticated,
    signIn: handleSignIn,
    signOut: handleSignOut,
  };
}
