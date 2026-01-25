import { useLocation } from 'wouter';

export function useNavigationHistory() {
  const [location] = useLocation();

  const goBack = () => {
    // Usar window.history.back() para voltar para a página anterior real
    window.history.back();
  };

  return { goBack, currentPath: location };
}
