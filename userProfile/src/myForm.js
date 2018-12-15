import ReactDom from 'react-dom';
import React from "react";
import Gapped from "@skbkontur/react-ui/Gapped";
import Input from "@skbkontur/react-ui/Input";
import Select from "@skbkontur/react-ui/Select";
import Button from "@skbkontur/react-ui/Button";

const cities = ['Екатеринбург', 'Курган', 'Москва', 'Тюмень'];
ReactDom.render(
    <form>
        <h2>Информация о пользователе</h2>
        <Gapped gap={15} vertical>
            <lable>
                <div className={'label'}>Имя</div>
                <Input type={'text'} name={'name'} placeholder={'Введите имя пользователя'} />
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
            <Button size="large" use="primary" onClick={() => console.log('Hey!')}>Сохранить</Button>
        </Gapped>
    </form>,
    document.getElementById('react')
);

