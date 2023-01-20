import React from 'react';
import {
  Header,
  Page,
  Content,
  HeaderLabel,
  HeaderTabs,
} from '@backstage/core-components';
import '@patternfly/react-core/dist/styles/base.css';

import { Topology, WithResizableSideBar, WithSideBar } from '../TopologyDemo/TopologyPackage';
import { PipelineLayout } from '../TopologyDemo/PipelineLayout';
import { TopologyPipelineTasks } from '../TopologyDemo/PipelineTasks';

import './fonts.css';
import './TopologyComponent.css';

const tabs = [
  { label: 'Topology App' },
  { label: 'Topology Sidebar' },
  { label: 'Topology Resizable Sidebar' },
  { label: 'Pipelines Task' },
  { label: 'Pipelines Layout' },
];

const TopologyHeader = () => (
  <Header
    title="Welcome to topology-plugin!"
    subtitle="Integrate pf-topology in backstage"
  >
    <HeaderLabel label="Owner" value="Team X" />
    <HeaderLabel label="Lifecycle" value="Alpha" />
  </Header>
);

const TopologyContentBody = ({ selectedTab }: { selectedTab?: number }) => { 
  return (
    <div className="pf-ri__topology-demo">
        {(() => {
            switch(selectedTab) {
              case 0:
                return <Topology />;
              case 1:
                return <WithSideBar />;
              case 2: 
                return <WithResizableSideBar />;
                case 3: 
                return <TopologyPipelineTasks />;
                case 4: 
                return <PipelineLayout />;
              default:
                return  <p>Invalid tab selected</p>;
            }
        })()}
    </div>
);
}

export const TopologyComponent = () => {
  const [selectedTab, setSelectedTab] = React.useState<number>(2);
  return (
    <div style={{ border: '1px solid #ddd' }}>
      <Page themeId="tool">
        <TopologyHeader />
        <HeaderTabs
          selectedIndex={selectedTab}
          onChange={index => setSelectedTab(index)}
          tabs={tabs.map(({ label }, index) => ({
            id: index.toString(),
            label,
          }))}
        />
        <Content>
          <TopologyContentBody selectedTab={selectedTab} />
        </Content>
      </Page>
    </div>
  );
};
