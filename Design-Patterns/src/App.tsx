import React from 'react';
import Layout from './components/Layout/Layout';
import ControlledInput from './components/ControlledUncontrolled/ControlledInput';
import UncontrolledInput from './components/ControlledUncontrolled/UncontrolledInput';
import ComponentFactory from './components/Factory/ComponentFactory';
import Tabs from './components/Compound/Tabs';
import SlotExample from './components/Slots/SlotExample';
import DataProvider from './components/RenderProps/DataProvider';
import { ThemeProvider } from './components/Context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import withLogger from './components/HOC/withLogger';
import useCustomHook from './components/Hooks/useCustomHook';

// Component đơn giản nhận prop `message`
const SimpleComponent: React.FC<{ message: string }> = ({ message }) => {
  return <div>{message}</div>;
};


// Áp dụng HOC với SimpleComponent
const SimpleComponentWithLogger = withLogger(SimpleComponent);

// Ví dụ sử dụng Custom Hook
const Counter: React.FC = () => {
  const count = useCustomHook(0);
  return <div>Counter: {count}</div>;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Layout>
          <h1>React Design Patterns Demo</h1>
          
          {/* Render Props: DataProvider */}
          <DataProvider
            render={(data) => (
              <div>
                {data.length === 0
                  ? 'Loading...'
                  : data.map((item: any) => <div key={item.id}>{item.name}</div>)}
              </div>
            )}
          />

          {/* Controlled & Uncontrolled Inputs */}
          <ControlledInput />
          <UncontrolledInput />

          {/* Factory Pattern */}
          <ComponentFactory
            type="button"
            onClick={() => alert('Button Clicked!')}
          >
            Click Me (Factory)
          </ComponentFactory>

          {/* Compound Component (Tabs) */}
          <Tabs>
            <Tabs.Tab name="tab1">
              <div>This is Tab 1 content</div>
            </Tabs.Tab>
            <Tabs.Tab name="tab2">
              <div>This is Tab 2 content</div>
            </Tabs.Tab>
          </Tabs>

          {/* Slots Pattern */}
          <SlotExample 
            header={<h2>Slot Header</h2>}
            body={<p>This is the body content.</p>}
            footer={<small>Footer info</small>}
          />

          {/* HOC Example */}
          <SimpleComponentWithLogger message="Hello from HOC enhanced component!" />

          {/* Custom Hook Example */}
          <Counter />
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
