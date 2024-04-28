//SideBar.js
import React, { Component } from 'react';
import "./SideBar.css";

class SideBar extends Component {
    state = {
        selectedOptions: {
            dropdown1: "",
            dropdown2: "",
            dropdown3: "",
            checkbox1: false,
            checkbox2: false
        }
    };

    handleDropdownChange = (event) => {
        const { id, value } = event.target;
        this.setState(prevState => ({
            selectedOptions: {
                ...prevState.selectedOptions,
                [id]: value
            }
        }));
    };

    handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        this.setState(prevState => ({
            selectedOptions: {
                ...prevState.selectedOptions,
                [id]: checked
            }
        }));
    };

    render() {
        return (
            <div className="list">
                <div className="dropdown">
                    <select id="dropdown1" onChange={this.handleDropdownChange} className="element">
                        <option value="">Оберіть область, яка вас цікавить</option>
                        <option value="Vinnytsia">Вінницька</option>
                        <option value="Volyn">Волинська</option>
                        <option value="Dnipro">Дніпропетровська</option>
                        <option value="Zhytomyr">Житомирська</option>
                        <option value="Zakarpatia">Закарпатська</option>
                        <option value="Zaporizhia">Запорізька</option>
                        <option value="Ivano-Frankivsk">Івано-Франківська</option>
                        <option value="Kyiv">Київськаа</option>
                        <option value="Kirovograd">Кіровоградська</option>
                        <option value="Lviv">Львівська</option>
                        <option value="Mykolaiv">Миколаївська</option>
                        <option value="Odessa">Одеська</option>
                        <option value="Poltava">Полтавська</option>
                        <option value="Rivne">Рівненська</option>
                        <option value="Sumy">Сумська</option>
                        <option value="Ternopil">Тернопільська</option>
                        <option value="Kharkiv">Харківська</option>
                        <option value="Kherson">Херсонська</option>
                        <option value="Khmelnytskiy">Хмельницька</option>
                        <option value="Cherkasy">Черкаська</option>
                        <option value="Chernivtsi">Чернівецька</option>
                        <option value="Chernigiv">Чернігівська</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select id="dropdown2" onChange={this.handleDropdownChange} className="element">
                        <option value="">Якому відпочинку надаєте перевагу?</option>
                        <option value="option1">Сімейний</option>
                        <option value="option2">Шопінг</option>
                        <option value="option3">Гірський</option>
                        <option value="option4">Екстримальний</option>
                        <option value="option5">СПА</option>
                        <option value="option6">Заспокійливий</option>
                        <option value="option7">Пасивний</option>
                        <option value="option8">Активний</option>
                        <option value="option9">З водоймою</option>
                        <option value="option10">На природі</option>
                        <option value="option11">Пізнавальний</option>
                        <option value="option12">Творчий</option>
                        <option value="option13">З компанією</option>
                        <option value="option14">Лікувально-оздоровчий</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select id="dropdown3" onChange={this.handleDropdownChange} className="element">
                        <option value="">Ціль вашої поїздки</option>
                        <option value="option1">Розслабитися</option>
                        <option value="option2">Насолодитися природою</option>
                        <option value="option3">Зробити гарні фото</option>
                        <option value="option4">Відвідати музеї/замки</option>
                        <option value="option5">Смачно поїсти</option>
                        <option value="option6">Розважитися</option>
                        <option value="option7">Дізнатися щось нове</option>
                        <option value="option8">Покататися на лижах</option>
                        <option value="option9">Погуляти містом</option>
                    </select>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="checkbox1" onChange={this.handleCheckboxChange}
                           checked={this.state.selectedOptions.checkbox1} className="element1"/>
                    <label htmlFor="checkbox1" className="checkbox-label">З місцем харчування поблизу?</label>
                </div>
                <div className="checkbox-item">
                    <input className="button" type="checkbox" id="checkbox2" onChange={this.handleCheckboxChange}
                           checked={this.state.selectedOptions.checkbox2} />
                    <label htmlFor="checkbox2" className="checkbox-label">З можливістю лишатись наніч?</label>
                </div>
            </div>
        );
    }
}

export default SideBar;
