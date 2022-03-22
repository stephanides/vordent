import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from './useAuth';

export const useAuthenticated = () => {
  const router = useRouter();
  const { authenticated } = useAuth();

  useEffect(() => {
    console.log(authenticated);
    if (!authenticated) {
      router.push('/admin/prihlasenie');
      return;
    }
  }, [authenticated]);

  return { authenticated };
};
