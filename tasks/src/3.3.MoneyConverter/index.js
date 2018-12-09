import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './styles.css';

/**
 Допиши конвертер валют.
 - Если пользователь ввел значение в рублях, то количество евро обновляется согласно курсу
 - Если пользователь ввел значение в евро, то количество рублей обновляется согласно курсу
 */

const RUBLES_IN_ONE_EURO = 70;

class MoneyConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {valueInEuros: 0, valueInRubles: 0}
    }

    render() {
        return (
            <div className="root">
                <div className="form">
                    <h2>Конвертер валют</h2>
                    <div>
                        <span>&#8381;</span>
                        <Money value={this.state.valueInRubles.toString()} onChange={this.handleChangeValueInRubles}/>
                        &mdash;
                        <Money value={this.state.valueInEuros.toString()} onChange={this.handleChangeValueInEuros}/>
                        <span>&euro;</span>
                    </div>
                </div>
            </div>
        );
    }

    handleChangeValueInRubles = (value) => {
        this.setState({
            valueInRubles: value,
            valueInEuros: Math.round(100 * value / RUBLES_IN_ONE_EURO) / 100
        });

    };

    handleChangeValueInEuros = (value) => {
        this.setState({
            valueInEuros: value,
            valueInRubles: value * RUBLES_IN_ONE_EURO
        });
    };
}

class Money extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input
                type="text"
                value={this.props.value}
                onChange={this.handleChangeValue}
            />
        );
    }
    handleChangeValue = event => {
        const value = extractNumberString(event.target.value);
        this.props.onChange(value);
    };
}

Money.propTypes = {
    value:PropTypes.string,
    onChange:PropTypes.func
};

function extractNumberString(value) {
    const str = value.replace(/^0+/g, '').replace(/[^\.0-9]/g, '');
    const parts = str.split('.');
    return parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : str;
}

ReactDom.render(<MoneyConverter/>, document.getElementById('app'));

/**
 Подсказки:
 - Сейчас каждый компонент Money хранит свое значение в собственном состоянии,
 чтобы конвертер работал, нужно уметь обновлять значение извне, поэтому нужно получать его из props.
 - В MoneyConverter наоборот надо создать состояние, которое будет хранить значения в обеих валютах.
 Таким образом ты сделаешь Lift State Up.
 - Заметь, что компонент Money теперь не содержит состояние и его можно переделать в функциональный компонент.
 */
