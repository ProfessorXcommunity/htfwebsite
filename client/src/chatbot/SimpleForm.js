import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
const theme = {
  background: "#000",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#E53935",
  //   headerBgColor: "rgb(32,37,41)",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#E53935",
  botFontColor: "#fff",
  userBubbleColor: "#000",
  userFontColor: "#fff",
};
const config = {
  width: "400px",
  height: "500px",
  floating: true,
};
class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: "intro",
              message: "Hello. What is your name?",
              trigger: "user-name",
            },
            {
              id: "user-name",
              user: true,

              trigger: "intro-ques",
            },
            {
              id: "intro-ques",
              message: "Do you like this website?",
              trigger: "intro-user",
            },
            {
              id: "intro-user",
              options: [
                { value: "y", label: "Yes", trigger: "yes-response" },
                { value: "n", label: "No", trigger: "no-response" },
              ],
            },
            {
              id: "yes-response",
              message: "Great! So which section attracts you the most?",
              trigger: "liked-pages",
            },
            {
              id: "liked-pages",
              options: [
                { value: "A", label: "Training", trigger: "Training" },
                { value: "B", label: "Session", trigger: "Session" },
                { value: "C", label: "Story", trigger: "Story" },
                { value: "D", label: "Discussion Forum", trigger: "Forum" },
              ],
            },
            {
              id: "Training",
              message:
                "The training page is where u find details about the areas in which one wants to gain knowledge!",
              end: true,
            },
            {
              id: "Session",
              message:
                "The session page is where u get to attend different session by experts and moreover u can even add ur own sessions!",
              end: true,
            },
            {
              id: "Forum",
              message:
                "The forum page is a page where u get to clear ur queries and connect with other people and members!",
              end: true,
            },
            {
              id: "Story",
              message:
                "Story page is an booster page where u get to know about others experience and their inspiration would help u gain confidence!",
              end: true,
            },
            {
              id: "no-response",
              message: "Sorry to hear that.",
              end: true,
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
