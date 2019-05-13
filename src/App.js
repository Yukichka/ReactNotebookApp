import React from "react";
import InputField from "./InputField";
import ListedNote from "./ListedNote";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      notes: []
    };
    this.onNewNote = this.onNewNote.bind(this);
  }

  onNewNote(newNote) {
    console.log(`logged from the App: ${newNote}`);
    this.setState({
      note: newNote
    });
    this.state.notes.push(newNote);
    this.setState({
      notes: this.state.notes
    });
  }
  s;

  render() {
    return (
      <div>
        <h1>Notebook App</h1>
        <hr />
        <h2>Type here :</h2>
        <InputField onDataReady={this.onNewNote} />
        <hr />

        {this.state.notes.map(n => (
          <ListedNote note={n} />
        ))}

        <hr />
        <div>edit field</div>
      </div>
    );
  }
}

export default App;
