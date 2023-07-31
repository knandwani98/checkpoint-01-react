import React, { Component } from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      activities: [],
    };
  }

  componentDidMount = () => {
    if (localStorage.activities) {
      this.setState({
        activities: JSON.parse(localStorage.activities),
      });
    }
    window.addEventListener("beforeunload", this.saveLocalStorage);
  };

  componentWillUnmount = () => {
    window.removeEventListener("beforeunload", this.saveLocalStorage);
  };

  saveLocalStorage = () => {
    localStorage.setItem("activities", JSON.stringify(this.state.activities));
  };

  handleInput = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  toggleDayDone = (id, day) => {
    let newArr = [...this.state.activities];

    if (!newArr[id].daysDone.includes(day)) {
      newArr[id].daysDone.push(day);
    } else {
      newArr[id].daysDone.splice(newArr[id].daysDone.indexOf(day), 1);
    }

    this.setState({
      activities: newArr,
    });
  };

  getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  handleDelete = (key) => {
    let newArr = [...this.state.activities];
    newArr.splice(key, 1);

    this.setState({
      activities: newArr,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    let currentDate = new Date(),
      currentYear = currentDate.getFullYear(),
      currentMonth = currentDate.getMonth();

    this.setState(
      {
        activities: [
          ...this.state.activities,
          {
            title: this.state.inputText,
            month: currentMonth,
            year: currentYear,
            totalDays: this.getDaysInMonth(currentYear, currentMonth),
            daysDone: [],
          },
        ],
        inputText: "",
      },
      this.saveLocalStorage
    );
  };

  render() {
    return (
      <>
        <Header
          state={this.state}
          handleInput={this.handleInput}
          handleClick={this.handleClick}
        />

        <Main
          toggleDayDone={this.toggleDayDone}
          handleDelete={this.handleDelete}
          state={this.state}
        />
      </>
    );
  }
}

export default App;
