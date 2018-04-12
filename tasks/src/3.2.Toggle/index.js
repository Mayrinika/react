import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import "./toggle.css";
import PropTypes from "prop-types";


/**
 *  Допиши компонент Toggle.
 *  Пусть флаг хранится во внутреннем состоянии,
 *  а при изменении передается наружу через onChange.
 * 
 *  Подсказки:
 *  - Начальное состояние компонента хранится в this.state и обычно инициируется в конструкторе.
 *  - Не забудь добавить super(props) первой строчкой конструктора, чтобы вызвать базовый.
 *  - this.setState({property: value}) обновляет часть состояния и инициирует перерисовку.
 */

class Toggle extends React.Component {
  // constructor(props) {
  // }

  static propTypes = {
    onChange: PropTypes.func
  };

  render() {
    const checked = true;
    return (
      <span className={'container' + (checked ? ' isChecked' : '')} onClick={this.handleClick}>
        <span className="handle">
          <div className="bg" />
          <span className="hinge" />
        </span>
      </span>
    );
  }

  handleClick = () => {
  };
}

ReactDom.render(
  <div className="page">
    <Toggle onChange={value => console.log(value)}/> Использовать умные компоненты
  </div>,
  document.getElementById("app"));