import React, { Component } from "react";

export default class FetchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      hasError: false,
      result: null
    };
  }

  componentDidMount() {
    if (this.props.url) {
      fetch(this.props.url)
        .then(response => {
          if (response.status != 200) {
            throw new Error(`Bad Request: ${this.props.url}`);
          }
          return response.json();
        })
        .then(result => {
          this.setState({ result: result, isLoading: false });
        })
        .catch(error => {
          console.error(error);
          this.setState({ isLoading: false, hasError: true });
        });
    }
  }

  render() {
    const { render } = this.props;
    return render({ ...this.state, ...this.props });
  }
}
