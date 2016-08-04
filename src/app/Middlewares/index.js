import { applyMiddleware } from 'redux';

// Middlewares
import ConsoleLogger from './ConsoleLogger';
import ConsoleLine from './ConsoleLine';
import Saga from './Saga';

export default applyMiddleware(
  ConsoleLogger,
  ConsoleLine,
  Saga
);