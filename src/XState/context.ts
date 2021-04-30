import { createContext } from 'react';
import { Context } from './machineConfig'

export const LogInMachineContext = createContext<Context | undefined>(undefined);
// export const LogInMachineContext = createContext(defaultValue);