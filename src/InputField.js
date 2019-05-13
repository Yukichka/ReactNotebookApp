import React from "react";

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titleValue: "", contentValue: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    if (event.target.name === "title") {
      this.setState({
        titleValue: event.target.value
      });
    } else {
      this.setState({
        contentValue: event.target.value
      });
    }
  }

  handleSubmit(event) {
    console.log(
      " New note was submitted: " +
        this.state.titleValue +
        "   " +
        this.state.contentValue
    );
    const newNote = {
      title: this.state.titleValue,
      content: this.state.contentValue
    };

    this.props.onDataReady(newNote);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title >>>
          <input
            type="text"
            name="title"
            value={this.state.titleValue}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Content >>>
          <input
            type="text"
            name="content"
            value={this.state.contentValue}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputField;
