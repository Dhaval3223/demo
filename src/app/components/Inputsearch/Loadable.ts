/**
 *
 * Asynchronously loads the component for Inputsearch
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Inputsearch = lazyLoad(
  () => import('./index'),
  module => module.Inputsearch,
);
