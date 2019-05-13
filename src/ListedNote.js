import React from "react";
import ReactDOM from "react-dom";

class ListedNote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Title:{this.props.note.title}</div>
        <div>Content:{this.props.note.content}</div>
      </div>
    );
  }
}

export default ListedNote;
