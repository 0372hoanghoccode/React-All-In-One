import React from 'react';
import ComponentProps from './components/ComponentProps';
import AlternativeComponent from './components/AlternativeComponent';
import FormExample from './components/FormExample';
import UseStateExample from './hooks/useStateExample';
import UseReducerExample from './hooks/useReducerExample';
import UseEffectExample from './hooks/useEffectExample';
import AppProvider from './context/AppProvider';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div style={{ padding: '1rem' }}>
        <h1>React với TypeScript</h1>
        <section>
          <h2>1. Component Props Typing</h2>
          <ComponentProps name="Alice" age={30} />
        </section>
        <section>
          <h2>2. Alternative Way</h2>
          <AlternativeComponent 
            label="Click Me" 
            onClick={() => alert('Button clicked!')} 
          />
        </section>
        <section>
          <h2>3. useState Types</h2>
          <UseStateExample />
        </section>
        <section>
          <h2>4. useRef, Forms, Events</h2>
          <FormExample />
        </section>
        <section>
          <h2>5. useReducer</h2>
          <UseReducerExample />
        </section>
        <section>
          <h2>6. useEffect</h2>
          <UseEffectExample />
        </section>
      </div>
    </AppProvider>
  );
};

export default App;
