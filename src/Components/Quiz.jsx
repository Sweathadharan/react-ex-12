import { Component } from 'react';
import questions from "../resources/quizQuestions.json";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0
    };
  }
  handlePreviousQuestion = () => {
    const { currentQuestionIndex } = this.state;
    const totalQuestions = questions.length;
    if (currentQuestionIndex === 0) 
    {
        this.setState({ currentQuestionIndex: totalQuestions - 1 });
    } 
    else
     {
        this.setState({ currentQuestionIndex: currentQuestionIndex - 1 });
    }
};


 handleNextQuestion = () => {
  const { currentQuestionIndex } = this.state;
  const totalQuestions = questions.length;
  if (currentQuestionIndex === totalQuestions - 1) 
  {
      this.setState({ currentQuestionIndex: 0 });
  } 
  else 
  {
      this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
  }
};

  handleQuit = () => {
    const confirmQuit = window.confirm("Are you sure you want to quit?");
    if (confirmQuit) 
    {
      this.handleNextQuestion();
    }
  };

  render() {
    const { currentQuestionIndex } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="App">
        <h1>Questions</h1>
        {currentQuestion && (
          <>
            <div className="question">
              <h3>{currentQuestion.question}</h3>
              <span>{currentQuestionIndex + 1} of {questions.length}</span>
              <ul className="options">
                <li><button>{currentQuestion.optionA}</button></li>
                <li><button>{currentQuestion.optionB}</button></li>
                <li><button>{currentQuestion.optionC}</button></li>
                <li><button>{currentQuestion.optionD}</button></li>
              </ul>
            </div>
            <div className="buttons">
              <button className="pre" onClick={this.handlePreviousQuestion}>Previous</button>
              <button className="next" onClick={this.handleNextQuestion}>Next</button>
              <button className="quit" onClick={this.handleQuit}>Quit</button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Quiz;
