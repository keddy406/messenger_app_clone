import React from "react";
import "./App.css";
import { FormControl, Input, InputLabel } from "@material-ui/core";

import Message from "./Message";
import db from "./Firebase";
import firebase from "firebase";

import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
function App() {
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  React.useEffect(() => {
    setUsername(prompt("please enter username"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h1>Welcome {username}</h1>
      <form className="app__form">
        <FormControl className="app__formControl">
          {/* input field */}
          <Input
            placeholder="Enter a message..."
            className="app__input"
            value={input}
            onChange={(e) => {
              return setInput(e.target.value);
            }}
          />
          {/* button */}
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {/* message themselves */}
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
