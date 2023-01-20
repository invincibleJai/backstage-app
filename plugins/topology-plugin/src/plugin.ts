import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const topologyPluginPlugin = createPlugin({
  id: 'topology-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const TopologyPluginPage = topologyPluginPlugin.provide(
  createRoutableExtension({
    name: 'TopologyPluginPage',
    component: () =>
      import('./components/TopologyComponent').then(m => m.TopologyComponent),
    mountPoint: rootRouteRef,
  }),
);
