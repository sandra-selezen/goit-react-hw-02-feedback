import { Component } from 'react';
import { Section } from "./Section/Section";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 5,
    neutral: 6,
    bad: 1
  }

  onLeaveFeedback = (event) => {
    const targetBtn = event.target.name;
    // console.log(targetBtn);
    const stateArray = Object.keys(this.state);
    // console.log(stateArray);
    for (const element of stateArray) {
      if (element === targetBtn) {
        console.log(element);
        this.setState(prevState => {
          return { element: prevState.element + 1 };
        })
      }
    }
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Number(((good / total) * 100).toFixed());
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          </Section>
      </>
  );
  }

};
