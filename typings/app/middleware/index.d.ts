// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportCache from '../../../app/middleware/cache';

declare module 'egg' {
  interface IMiddleware {
    cache: typeof ExportCache;
  }
}
