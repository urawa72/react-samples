import React from 'react';

type ChildProps = {
  count: number;
  reset: () => void;
  increment: () => void;
};

type Props = {
  max: number;
  children: (props: ChildProps) => React.ReactElement;
};

type State = {
  count: number;
};

class CounterPropvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
  }

  reset = (): void => this.setState({ count: 0 });
  increment = (): void =>
    this.setState((state) => ({ count: state.count + 1 }));

  componentDidUpdate = (): void => {
    if (this.state.count > this.props.max) this.reset();
  };

  render = (): React.ReactElement =>
    this.props.children({
      count: this.state.count,
      reset: this.reset,
      increment: this.increment,
    });
}

const Counter: React.FC<{ max: number }> = ({ max }) => (
  <CounterPropvider max={max}>
    {({ count, reset, increment }) => (
      <div>
        <h1>Render Props Sample</h1>
        <div>
          {count}/{max}
        </div>
        <button onClick={reset} type="button">
          Reset
        </button>
        <button onClick={increment} type="button">
          +1
        </button>
      </div>
    )}
  </CounterPropvider>
);

export default Counter;
