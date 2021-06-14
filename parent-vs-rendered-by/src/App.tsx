import React from 'react';

const App: React.FC = () => {
  console.log('App - start render');
  React.useEffect(() => console.log('App - rendered'));
  const [count, setCount] = React.useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>increase App {count}</button>
      <Parent>
        <Child />
        <Child />
        <Child />
      </Parent>
    </>
  );
};

const Parent: React.FC = ({ children }) => {
  console.log('Parent - start render');
  React.useEffect(() => console.log('Parent - rendered'));
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        increase Parent {count}
      </button>
      {children}
    </div>
  );
};

const Child: React.FC = () => {
  console.log('Child - start render');
  React.useEffect(() => console.log('Child - rendered'));
  const [count, setCount] = React.useState(0);
  return (
    <div>
      child
      <button onClick={() => setCount(count + 1)}>
        increase Child {count}
      </button>
    </div>
  );
};

export default App;
