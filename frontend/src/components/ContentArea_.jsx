import React from "react";
import Calendar from "react-calendar";
import ProfileSection from "./ProfileSection";
import SalesChart from "./structures/charts";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>Current Time</h2>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

function ContentArea() {
  return (
    <div className="content">
      <SalesChart />
      <div className="displayUtitlities">
        <Calendar />
        <Clock />
      </div>

      <ProfileSection />
    </div>
  );
}

export default ContentArea;
