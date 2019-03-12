import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';
import styled from 'styled-components';

const Heading = styled.h2`
  color: red;
  text-transform: uppercase;
  font-style: italic;
`;

class HomePage extends Component {
  state = {}
  inputRef = React.createRef();
  formRef = React.createRef();
  
  componentDidMount() {
    console.log(this);

    setTimeout(() => {
      this.inputRef.current.focus();
    }, 100);
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    this.formRef.current.reset();

  }




  render() {

    return (
      <Fragment>
        <h1 style={styles}>Самый красивый заголовок</h1>
        <Heading>Второй заголовок</Heading>
        <form onSubmit={this.handleSubmit} className="form-inline" ref={this.formRef}>
          <input placeholder="Текст" className="form-control mr-2" ref={this.inputRef} />
          <input placeholder="Имя" className="form-control mr-2" ref="zhenyaRef" />
          <input placeholder="Возраст" className="form-control mr-2" ref={(el) => {this.vasyeRef = el}} />
          <button type="submit">Отправить</button>
        </form>
        <Card price={100} />
      </Fragment>
    );
  }
}

const styles = {
  color: "red", 
  textTransform: "uppercase" 
}

const mapStateToProps = state => {
  return {
    //..
  }
}
export default connect(mapStateToProps, {})(HomePage);


// npm run eject -если webpack стартовать