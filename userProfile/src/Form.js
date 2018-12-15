import ReactDom from 'react-dom';
import React from "react";
import Gapped from "@skbkontur/react-ui/Gapped";
import Input from "@skbkontur/react-ui/Input";
import Select from "@skbkontur/react-ui/Select";
import Button from "@skbkontur/react-ui/Button";
import Modal from '@skbkontur/react-ui/Modal';

const cities = ['Екатеринбург', 'Курган', 'Москва', 'Тюмень'];


export default class Form extends React.Component {
    state = {modalOpened: false};

    render() {
        const {modalOpened} = this.state;
        return (
            <div>
                <h2>Информация о пользователе</h2>
                {this.renderForm()}
                {modalOpened && this.renderModal()}
            </div>
        );
    }

    renderForm() {
        return(
            <form>
                <Gapped gap={15} vertical>
                    <lable>
                        <div className={'label'}>Имя</div>
                        <Input type={'text'} name={'name'} placeholder={'Введите имя пользователя'}/>
                    </lable>
                    <lable>
                        <div className={'label'}>Фамилия</div>
                        <Input type={'text'} name={'surname'} placeholder={'Введите фамилию пользователя'}/>
                    </lable>
                    <label>
                        <div className={'label'} name={'city'}>Город</div>
                        <Select items={cities} placeholder={'Выберите город'}/>
                        {/*value*/}
                    </label>
                    <Button size="large" use="primary" onClick={this.openModal}>Сохранить</Button>
                </Gapped>
            </form>
        );
    }

    renderModal() {
    return(
        <Modal onClose={this.closeModal}>
        <Modal.Header>Пользователь сохранен</Modal.Header>
            <Modal.Footer>
                <Button onClick={this.closeModal}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

    openModal = () => {
        this.setState({
            modalOpened: true,
        });
    };

    closeModal = () => {
        this.setState({
            modalOpened: false,
        });
    };
}


