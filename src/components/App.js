import { Component } from 'react';
import { Section } from "./Section/Section";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (event) => {
    const value = event.target.name;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }))
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Number(((good / total) * 100).toFixed());
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total !== 0
            ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
            : <Notification message="There is no feedback" />
          }
        </Section>
        <GlobalStyle />
      </Layout>
  );
  }

};
