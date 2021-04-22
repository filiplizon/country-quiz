import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import Link from 'components/Link/Link';
import bqQuiz from 'assets/images/bgQuiz.png';
import illustration from 'assets/images/illustration.png';
import { VscArrowLeft as ArrowIcon } from 'react-icons/vsc';
import { FaFlagUsa as FlagIcon } from 'react-icons/fa';
import { GiCapitol as CapitolIcon } from 'react-icons/gi';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import Flag from 'components/Flag/Flag';
import Input from 'components/Input/Input';
import _ from 'lodash';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    align-items: flex-start;
  }

  ::after {
    @media (min-width: 1200px) {
      position: absolute;
      right: 0;
      top: 0;
      content: '';
      width: 90vw;
      height: 100vh;
      clip-path: polygon(100% 0, 37% 100%, 100% 100%);
      background-image: url(${bqQuiz});
      background-position: 50% 35%;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const StyledArrowIcon = styled(ArrowIcon)`
  margin-right: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.secondary};
  margin: 85px 0 10px;

  @media (min-width: 768px) {
    margin: 165px 0 10px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    margin: 65px 0 10px;
    font-size: 4rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    width: 70%;
    margin-bottom: 110px;
  }

  @media (min-width: 1200px) {
    width: 60%;
    margin: ${({ column }) => column && '75px 0 0px 150px'};
  }
`;

const StyledIllustration = styled.div`
  width: 100%;
  height: 50vh;
  position: absolute;
  bottom: 0;
  background-image: url(${illustration});
  background-position: 45% 50%;
  background-size: cover;
  transition: opacity 0.2s;
  z-index: -1;

  &.fade-out {
    opacity: 0.3;
  }

  @media (min-width: 768px) {
    height: 60vh;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    width: 55%;
  }

  @media (min-width: 1200px) {
    height: 47vh;
    width: 32%;
    margin-left: 40px;
  }
`;

const StyledIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    height: 90px;
  }
`;

const grow = keyframes`
  from {
   transform:scale(0);
   opacity: 0;
  }

  to {
   opacity:1;
   transform:scale(1)
  }
`;

const StyledBox = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  color: ${({ theme }) => theme.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  animation: ${grow} 0.2s linear both;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1200px) {
    top: 5%;
    right: 20%;
    font-size: ${({ theme }) => theme.fontSize.m};
    background-color: #fff;
    z-index: 1000;
  }
`;

const QuestionWrapper = styled.div`
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 85px 0 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (min-width: 768px) {
    height: 40vh;
    margin: 75px 0 10px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    margin: 65px 0 10px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1200px) {
    height: 50vh;
    margin: 0;
    position: absolute;
    top: 15%;
    left: 25%;
  }
`;

const StyledMessage = styled(Paragraph)`
  opacity: ${({ hidden }) => hidden && 0};
  color: ${({ correctAnswer }) => (correctAnswer ? 'green' : 'red')};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 1.3rem;

  @media (min-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 500px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 800px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

class Quiz extends Component {
  state = {
    typeChoosen: false,
    levelChoosen: false,
    quizType: '',
    quizLevel: '',
    points: 0,
    questionsLength: 10,
    counter: 0,
    allCountries: [],
    countriesToGuess: [],
    countriesByLevel: {
      easy: [
        'POL',
        'RUS',
        'MEX',
        'ARG',
        'AUS',
        'CHN',
        'CZE',
        'BRA',
        'CAN',
        'FRA',
        'DEU',
        'IND',
        'ISR',
        'PRT',
        'USA',
        'ESP',
        'ITA',
        'BEL',
        'GRC',
      ],
      medium: [
        'AFG',
        'ALB',
        'ARM',
        'BGR',
        'CMR',
        'CHL',
        'COL',
        'HRV',
        'CUB',
        'EGY',
        'EST',
        'GEO',
        'HUN',
        'JPN',
        'KEN',
        'MNE',
        'MAR',
        'PAK',
        'SRB',
      ],
      hard: [
        'TUV',
        'VNM',
        'ZMB',
        'SOM',
        'SYC',
        'SMR',
        'WSM',
        'RWA',
        'QAT',
        'PNG',
        'PAN',
        'PLW',
        'OMN',
        'NER',
        'NIC',
        'NPL',
        'NRU',
        'MOZ',
        'HTI',
      ],
    },
    checked: false,
    correctAnswer: false,
    input: '',
  };

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')

      .then((response) => {
        this.setState({ allCountries: [...response.data] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleTypeChange(type) {
    this.setState((state) => ({ typeChoosen: !state.typeChoosen }));
    this.state.quizType = type;
  }

  handleLevelChange(level) {
    this.setState((state) => ({ levelChoosen: !state.levelChoosen }));
    this.state.quizLevel = level;
  }

  handleAnswearCheck() {
    const { input, countriesToGuess, counter, quizType } = this.state;
    let isAnswerCorrect;
    if (input) {
      switch (quizType) {
        case 'flags':
          isAnswerCorrect = input.toLowerCase() === countriesToGuess[counter].name.toLowerCase();
          break;
        case 'capitals':
          isAnswerCorrect = input.toLowerCase() === countriesToGuess[counter].capital.toLowerCase();
          break;
        default:
          return;
      }
      isAnswerCorrect && this.setState((state) => ({ points: state.points + 1 })); // eslint-disable-line
      this.setState((state) => ({ checked: !state.checked }));
      this.setState(() => ({ correctAnswer: isAnswerCorrect }));
    }
  }

  handleInputChange(e) {
    this.setState(() => ({ input: e.target.value }));
  }

  handleQuestionChange() {
    const { input } = this.state;
    input && this.setState((state) => ({ counter: state.counter + 1 })); // eslint-disable-line
    this.setState((state) => ({ checked: !state.checked }));
    this.setState(() => ({ input: '' }));
  }

  setQuestions() {
    let countries;
    const { allCountries, quizLevel, countriesByLevel } = this.state;
    switch (quizLevel) {
      case 'easy':
        countries = allCountries.filter(({ alpha3Code }) =>
          countriesByLevel.easy.includes(alpha3Code),
        );
        break;
      case 'medium':
        countries = allCountries.filter(({ alpha3Code }) =>
          countriesByLevel.medium.includes(alpha3Code),
        );
        break;
      case 'hard':
        countries = allCountries.filter(({ alpha3Code }) =>
          countriesByLevel.hard.includes(alpha3Code),
        );
        break;
      default:
        return;
    }
    this.state.countriesToGuess = _.sampleSize(countries, 10);
  }

  render() {
    const {
      typeChoosen,
      levelChoosen,
      points,
      questionsLength,
      counter,
      countriesToGuess,
      checked,
      input,
      correctAnswer,
      quizType,
    } = this.state;

    return (
      <StyledWrapper>
        <StyledLink to="/">
          <StyledArrowIcon /> go back
        </StyledLink>
        {levelChoosen && (
          <StyledBox>
            <Paragraph>
              Question: {counter + 1} / {questionsLength}
            </Paragraph>
            <Paragraph>
              Points: {points} / {questionsLength}
            </Paragraph>
          </StyledBox>
        )}
        {levelChoosen ? (
          <QuestionWrapper>
            <Paragraph>
              {quizType === 'flags'
                ? 'Guess what country the flag is:'
                : 'What is capital of this country?'}
            </Paragraph>
            {quizType === 'capitals' ? (
              <Flag
                flag={countriesToGuess[counter].flag}
                name={countriesToGuess[counter].name}
                quiz="true"
              />
            ) : (
              <Flag flag={countriesToGuess[counter].flag} />
            )}
            <Input
              value={input}
              placeholder={quizType === 'flags' ? 'Country' : 'Capital'}
              onChange={(e) => this.handleInputChange(e)}
              correctAnswer={correctAnswer}
            />
            {checked && (
              <StyledMessage correctAnswer={correctAnswer}>
                {correctAnswer
                  ? 'Good!'
                  : `You're wrong. It's ${
                      quizType === 'flags'
                        ? countriesToGuess[counter].name
                        : countriesToGuess[counter].capital
                    }.`}
              </StyledMessage>
            )}
            <Button
              secondary
              onClick={() => {
                checked ? this.handleQuestionChange() : this.handleAnswearCheck(); // eslint-disable-line
              }}
            >
              {checked ? 'Next' : 'Check'}
            </Button>
          </QuestionWrapper>
        ) : (
          <InnerWrapper column>
            <StyledHeading>Welcome to the quiz!</StyledHeading>
            <StyledParagraph>Choose {typeChoosen ? 'level' : 'type'} of the quiz:</StyledParagraph>
            {typeChoosen ? (
              <InnerWrapper>
                <Button
                  secondary
                  onClick={() => {
                    this.handleLevelChange('easy');
                    this.setQuestions();
                  }}
                >
                  Easy
                </Button>
                <Button
                  secondary
                  delay=".5s"
                  onClick={() => {
                    this.handleLevelChange('medium');
                    this.setQuestions();
                  }}
                >
                  Medium
                </Button>
                <Button
                  secondary
                  delay="1s"
                  onClick={() => {
                    this.handleLevelChange('hard');
                    this.setQuestions();
                  }}
                >
                  Hard
                </Button>
              </InnerWrapper>
            ) : (
              <InnerWrapper>
                <Button secondary big onClick={() => this.handleTypeChange('flags')}>
                  <StyledIcon>
                    <FlagIcon />
                  </StyledIcon>
                  Flags
                </Button>
                <Button secondary big onClick={() => this.handleTypeChange('capitals')}>
                  <StyledIcon>
                    <CapitolIcon />
                  </StyledIcon>
                  Capitals
                </Button>
              </InnerWrapper>
            )}
          </InnerWrapper>
        )}
        {levelChoosen ? <StyledIllustration className="fade-out" /> : <StyledIllustration />}
      </StyledWrapper>
    );
  }
}

export default Quiz;
