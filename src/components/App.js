import { Component } from 'react';
import { Section } from "./Section/Section";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = () => {

  }
  
  render() {
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
          </Section>
      </>
  );
  }

};
