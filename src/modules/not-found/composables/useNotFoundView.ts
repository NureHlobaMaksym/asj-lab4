import { useRouter } from 'vue-router';
import { ROUTE_PATHS } from '@/constants/routes.constants';

export const useNotFoundView = () => {
  const router = useRouter();

  const goHome = (): void => {
    router.push(ROUTE_PATHS.ROOT);
  };

  return {
    goHome
  };
};
