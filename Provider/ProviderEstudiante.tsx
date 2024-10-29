// Provider/ProviderEstudiante.tsx
import React, { useState, useEffect } from 'react';
import { EstudianteContext } from '../Context/ContextApi';
import { Estudiante } from '../Modelos/Estudiante';

const listaInicial: Estudiante[] = [
  { id: 1, name: 'Juan' },
  { id: 2, name: 'Andrea' },
  { id: 3, name: 'Ana' },
  { id: 4, name: 'Maria' },
  { id: 5, name: 'Pedro' },
  { id: 6, name: 'Luis' },
  { id: 7, name: 'Adres' },
  { id: 8, name: 'Allan' },
  { id: 9, name: 'Carlos' },
  { id: 10, name: 'Junior' },
];

export const EstudianteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [listaEstudiante, setListaEstudiante] = useState<Estudiante[]>(listaInicial);

  const agregarEstudiante = () => {
    const nuevoEstudiante: Estudiante = {
      id: listaEstudiante.length + 1,
      name: `Estudiante nombre ${listaEstudiante.length + 1}`,
    };
    setListaEstudiante((prev) => [...prev, nuevoEstudiante]);
  };

  useEffect(() => {
    const intervalId = setInterval(agregarEstudiante, 5000);
    return () => clearInterval(intervalId);
  }, [listaEstudiante]);

  return (
    <EstudianteContext.Provider value={{ listaEstudiante, agregarEstudiante }}>
      {children}
    </EstudianteContext.Provider>
  );
};
