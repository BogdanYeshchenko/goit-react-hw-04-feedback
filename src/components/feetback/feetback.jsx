import { Component } from 'react';
import { Sections } from './Sections/Sections';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const options = ['Good', 'Neutral', 'Bad'];

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  HendleTakeFeedback = e => {
    // const { name } = e.target;
    // this.setState(prev => ({ [e.target.name]: prev[e.target.name] + 1 }));
    this.setState({ [e.target.name]: this.state[e.target.name] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round(((good + neutral) / (good + neutral + bad)) * 100);
  };

  render() {
    return (
      <section className="feedBackBox">
        <Sections title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.HendleTakeFeedback}
          />
        </Sections>
        <Sections title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Sections>
      </section>
    );
  }
}
