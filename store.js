import { createContext, useState } from 'react';

export const StackContext = createContext();

export function StackProvider({ children }) {
  const [cadreTexte, setCadreTexte] = useState("");
  return (
    <StackContext.Provider value={{ cadreTexte, setCadreTexte }}>
      {children}
    </StackContext.Provider>
  );
}
