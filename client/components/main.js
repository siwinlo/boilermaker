import React from "react";
import { connect } from "react-redux";
import { getMessage } from "../reducers/reducers";

class Main extends React.Component {
  componentDidMount() {
    this.props.getMessage();
    console.log(this.props);
    console.log("component mounted");
  }
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

const mapStateToProps = state => ({
  message: state
});

const mapDispatchToProps = dispatch => ({
  getMessage: () => dispatch(getMessage())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
