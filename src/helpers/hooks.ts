import { RefObject, useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback(() => setState((prevState) => !prevState), []);

  return [state, toggle];
};

//Detect what device the user is on
//Usage:const device = useDeviceDetection();

export const useDeviceDetection = () => {
  const [device, setDevice] = useState('');

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) {
        setDevice('Mobile');
      } else if (isTablet) {
        setDevice('Tablet');
      } else {
        setDevice('Desktop');
      }
    };

    handleDeviceDetection();
    window.addEventListener('resize', handleDeviceDetection);

    return () => {
      window.removeEventListener('resize', handleDeviceDetection);
    };
  }, []);

  return device;
};

//COPY TEXT TO THE BUFFER
//Usage:  const { copyToClipboard } = useClipboard(link, 'copied');

const useClipboard = (initialText: string, type: string) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [text, setText] = useState<string>(initialText);

  const copyToClipboard = async (newText: string) => {
    try {
      await navigator.clipboard.writeText(newText);
      setText(newText);
      setIsCopied(true);
      toast(initialText, {
        id: type,
      });
    } catch (error) {
      console.error('Failed to copy text to clipboard: ', error);
      setIsCopied(false);
    }
  };

  return { text, isCopied, copyToClipboard };
};

export default useClipboard;
