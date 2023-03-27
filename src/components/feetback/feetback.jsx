import { useState } from 'react';
import { Sections } from './Sections/Sections';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const options = ['Good', 'Neutral', 'Bad'];

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positivePercentage = ((good + neutral) / total) * 100;

  const HendleTakeFeedback = e => {
    const { name } = e.target;
    console.log(name);

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  // const handleUpdate = event => {
  //   const { name } = event.currentTarget;
  //   switch (name) {
  //     case 'likes':
  //       setLikes(likes => likes + 1);
  //       break;
  //     case 'dislikes':
  //       setDislikes(dislikes => dislikes + 1);
  //       break;
  //     default:
  //       throw new Error("Name doesn't exist");
  //   }
  // };

  return (
    <section className="feedBackBox">
      <Sections title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={HendleTakeFeedback}
        />
      </Sections>
      <Sections title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Sections>
    </section>
  );
};

// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   HendleTakeFeedback = e => {
//     // const { name } = e.target;
//     // this.setState(prev => ({ [e.target.name]: prev[e.target.name] + 1 }));
//     this.setState({ [e.target.name]: this.state[e.target.name] + 1 });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;

//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     return Math.round(((good + neutral) / (good + neutral + bad)) * 100);
//   };

//   render() {
//     return (
//       <section className="feedBackBox">
//         <Sections title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.HendleTakeFeedback}
//           />
//         </Sections>
//         <Sections title={'Statistics'}>
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Sections>
//       </section>
//     );
//   }
// }
