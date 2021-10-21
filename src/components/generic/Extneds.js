class Counter extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        current: 0,
        other: 'untouched',
        user: {
          firstName: 'John',
          lastName: 'Doe',
        },
      };
    }
  
    render() {
      // We cannot do:
      // this.props.a = 'new value', or this.state.a = 'new value'
  
      return (
        <div className="main-panel">
          <div className="display">
            <div>
              <b>Current:</b> {this.state.current}
            </div>
            <div>
              <b>Other:</b> {this.state.other}
            </div>
            <div>
              <b>User:</b> {this.state.user.firstName} {this.state.user.lastName}
            </div>
          </div>
          <div className="buttons">
            <button
              onClick={() => {
                this.setState(
                  oldState => {
                    // State changes are asynchronous so instead of using
                    // this.state, use the function
                    const { current: oldCurrent } = oldState;
  
                    return {
                      current: oldCurrent + 1,
                    };
                  },
                  () => {
                    // Here we have the new state
                    console.log(this.state);
                  },
                );
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                this.setState(() => {
                  return {
                    user: {
                      firstName: 'Jane',
                    },
                  };
                });
              }}
            >
              User
            </button>
          </div>
        </div>
      );
    }
  }