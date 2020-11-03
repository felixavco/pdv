import { useSelector } from 'react-redux';
import { ROLES } from '../../config';

export function useAuthUser(role = ROLES.USER) {
  const { authUser, isAuth } = useSelector((store) => store.auth);
  const hasRole = authUser.role >= role;
  return { isAuth, authUser, hasRole }
}