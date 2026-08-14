import React, { Component } from 'react';
class Counter extends Component { constructor(props) {
super(props);

count: 0
};

this.incrementCount = this.incrementCount.bind(this);
}

this.setState(prevState => ({ count: prevState.count + 1
}));
}
render() { return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<h1>Counter App</h1>
<p>Current Count: <strong>{this.state.count}</strong></p>
<button onClick={this.incrementCount}> Increment
</button>
</div>
);

14

}
}
export default Counter;
Output:
