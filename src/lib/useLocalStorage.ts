'use client';

import { useState, useLayoutEffect, useCallback } from 'react';

export function useLocalStorage(key: string) {
  const [state, setState] = useState([] as any);

  useLayoutEffect(() => {
    const value = localStorage.getItem(key);
    if (value) setState([...JSON.parse(value)]);
    if (!value) setState([]);
  }, [key]);

  const setValue = useCallback(
    (value: {}) => {
      const data = localStorage.getItem(key);

      let messages;

      if (data) messages = [...JSON.parse(data), value];
      if (!data) messages = [value];

      localStorage.setItem(key, JSON.stringify(messages));

      setState(messages);
    },
    [key]
  );

  return [state, setValue];
}
