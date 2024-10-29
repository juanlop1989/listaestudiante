// Context/contextapi.tsx
import React, { createContext } from 'react';
import { Estudiante } from '../Modelos/Estudiante';

export const EstudianteContext = createContext<{
  listaEstudiante: Estudiante[];
  agregarEstudiante: () => void;
}>({
  listaEstudiante: [],
  agregarEstudiante: () => {},
});
