import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';

export function useNavigationHistory() {
  const [location, navigate] = useLocation();
  const navigationStackRef = useRef<string[]>([]);

  useEffect(() => {
    // Adicionar a localização atual ao stack
    if (!navigationStackRef.current.includes(location)) {
      navigationStackRef.current.push(location);
    }
  }, [location]);

  const goBack = () => {
    // Remover a página atual do stack
    navigationStackRef.current.pop();
    
    // Se houver página anterior, voltar para ela
    if (navigationStackRef.current.length > 0) {
      const previousLocation = navigationStackRef.current[navigationStackRef.current.length - 1];
      navigate(previousLocation);
    } else {
      // Se não houver histórico, voltar para home
      navigate('/');
    }
  };

  const goToPage = (path: string) => {
    navigationStackRef.current.push(path);
    navigate(path);
  };

  return { goBack, goToPage, currentPath: location };
}
