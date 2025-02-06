import React, { useEffect } from 'react';

function withLogger<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithLogger = (props: P) => {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    useEffect(() => {
      console.log(`Component ${componentName} mounted`);
      console.log('Initial props:', props);

      return () => {
        console.log(`Component ${componentName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  ComponentWithLogger.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithLogger;
}

export default withLogger;