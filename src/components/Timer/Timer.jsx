import React, { Component } from 'react';
import { Container } from 'components/Container/Container';
import { TimerSection, TimerContainer, TimerItem } from './Timer.styled';
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTimer() {
    const now = new Date();
    const targetDate = new Date('2024-01-10T00:00:00'); // Замените на вашу целевую дату

    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <Container>
        <TimerSection>
          <TimerContainer>
            <TimerItem>
              {days} <span> d</span>
            </TimerItem>
            <TimerItem>
              {hours} <span> h</span>
            </TimerItem>
            <TimerItem>
              {minutes} <span> m</span>
            </TimerItem>
            <TimerItem>
              {seconds} <span> s</span>
            </TimerItem>
          </TimerContainer>
        </TimerSection>
      </Container>
    );
  }
}

export default Timer;
