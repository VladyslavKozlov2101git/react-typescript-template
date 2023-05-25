import React, { useEffect, RefObject, useState, useRef, useCallback } from "react";


export function useOnClickOutside<T extends HTMLElement>(
    ref: RefObject<T>,
    handler: (event: MouseEvent | TouchEvent) => void
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


export const useDebounce = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

//EXAMPLE useDebounce

// const [searchTerm, setSearchTerm] = useState('');
// const debouncedSearchTerm = useDebounce(searchTerm, 500);

// const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
//   setSearchTerm(event.target.value);
// }, []);

// useEffect(() => {
//   // Perform search or any other action with debouncedSearchTerm
//   // This effect will run only after 500 milliseconds of inactivity
//   console.log('Performing search with debounced term:', debouncedSearchTerm);
// }, [debouncedSearchTerm]);



export const useToggle = (initialState = false): [boolean, () => void] => {
    const [state, setState] = useState<boolean>(initialState);
    const toggle = useCallback(() => setState(prevState => !prevState), []);

    return [state, toggle];
};