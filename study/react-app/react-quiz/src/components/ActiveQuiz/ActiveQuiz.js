import React from "react";
import classes from './ActiveQuiz.scss';
import AnswersList from './../AnswersList/AnswersList'

const ActiveQuiz = props => {
  return(
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <b>{props.answerNumber}.</b>&nbsp;
          {props.question}
        </span>
        <small>{props.answerNumber} из {props.quizLength}</small>
      </p>
      <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  )
}

export default ActiveQuiz