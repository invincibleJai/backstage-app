import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { topologyPluginPlugin, TopologyPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(topologyPluginPlugin)
  .addPage({
    element: <TopologyPluginPage />,
    title: 'Root Page',
    path: '/topology-plugin'
  })
  .render();
