import React, { useState } from 'react';
import "./SideBar.css";
import { usePlace } from '../PlaceContext';
const SideBar = () => {

    const { places, originalPlaces, setPlaces, setShouldFilter } = usePlace();

    const [selectedOptions, setSelectedOptions] = useState({
        dropdown1: "",
        dropdown2: "",
        dropdown3: "",
        checkbox1: false,
        checkbox2: false
    });

    const handleDropdownChange = (event) => {
        const { id, value } = event.target;
        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [id]: value
        }));
    };

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [id]: checked
        }));
    };

    const setFilteredPlaces = async () => {

        const region = selectedOptions.dropdown1;
        const relaxation_type = selectedOptions.dropdown2;
        const trip_goal = selectedOptions.dropdown3;
        const with_food = selectedOptions.checkbox1;
        const with_sleep = selectedOptions.checkbox2;

        let criteria = {
            region: region,
            relaxation_type: relaxation_type,
            trip_goal: trip_goal,
            with_food: with_food,
            with_sleep: with_sleep
        }

        let filteredPlaces = await originalPlaces.filter(place => (
            place.location.region === criteria.region &&
            place.relaxation_type.includes(criteria.relaxation_type) &&
            place.trip_goal.includes(criteria.trip_goal) &&
            place.with_food === criteria.with_food &&
            place.with_sleep === criteria.with_sleep
        ));

        await setPlaces(filteredPlaces);
        setShouldFilter(true);
        console.log(`Filtered places count: ${filteredPlaces.length}`);
    };

    return (
            <div className="list">
                <div className="dropdown">
                    <select id="dropdown1" onChange={handleDropdownChange} className="element">
                        <option value="">Оберіть область, яка вас цікавить</option>
                        <option value="Вінницька область">Вінницька</option>
                        <option value="Волинська область">Волинська</option>
                        <option value="Дніпропетровська область">Дніпропетровська</option>
                        <option value="Житомирська область">Житомирська</option>
                        <option value="Закарпатська область">Закарпатська</option>
                        <option value="Запорізька область">Запорізька</option>
                        <option value="Івано-Франківська область">Івано-Франківська</option>
                        <option value="Київська область">Київська</option>
                        <option value="Кіровоградська область">Кіровоградська</option>
                        <option value="Львівська область">Львівська</option>
                        <option value="Миколаївська область">Миколаївська</option>
                        <option value="Одеська область">Одеська</option>
                        <option value="Полтавська область">Полтавська</option>
                        <option value="Рівненська область">Рівненська</option>
                        <option value="Сумська область">Сумська</option>
                        <option value="Тернопільська область">Тернопільська</option>
                        <option value="Харківська область">Харківська</option>
                        <option value="Херсонська область">Херсонська</option>
                        <option value="Хмельницька область">Хмельницька</option>
                        <option value="Черкаська область">Черкаська</option>
                        <option value="Чернівецька область">Чернівецька</option>
                        <option value="Чернігівська область">Чернігівська</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select id="dropdown2" onChange={handleDropdownChange} className="element">
                        <option value="">Якому відпочинку надаєте перевагу?</option>
                        <option value="FAMILY">Сімейний</option>
                        <option value="SHOPPING">Шопінг</option>
                        <option value="MOUNTAIN">Гірський</option>
                        <option value="EXTREME">Екстримальний</option>
                        <option value="SPA">СПА</option>
                        <option value="CALMING">Заспокійливий</option>
                        <option value="PASSIVE">Пасивний</option>
                        <option value="ACTIVE">Активний</option>
                        <option value="WITH_WATER">З водоймою</option>
                        <option value="NATURE">На природі</option>
                        <option value="COGNITIVE">Пізнавальний</option>
                        <option value="CREATIVE">Творчий</option>
                        <option value="WITH_COMPANY">З компанією</option>
                        <option value="MEDICAL">Лікувально-оздоровчий</option>
                        <option value="YOUTH">Молодіжний</option>

                    </select>
                </div>
                <div className="dropdown">
                    <select id="dropdown3" onChange={handleDropdownChange} className="element">
                        <option value="">Ціль вашої поїздки</option>
                        <option value="RELAXATION">Розслабитися</option>
                        <option value="ENJOY_NATURE">Насолодитися природою</option>
                        <option value="MAKE_NICE_PHOTOS">Зробити гарні фото</option>
                        <option value="VISIT_MUSEUMS_CASTLES">Відвідати музеї/замки</option>
                        <option value="EAT_TASTY">Смачно поїсти</option>
                        <option value="HAVE_FUN">Розважитися</option>
                        <option value="LEARN_SOMETHING_NEW">Дізнатися щось нове</option>
                        <option value="SKIING">Покататися на лижах</option>
                        <option value="WALK_CITY">Погуляти містом</option>
                        <option value="SWIM">Поплавати</option>
                    </select>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="checkbox1" onChange={handleCheckboxChange}
                           checked={selectedOptions.checkbox1} className="element1"/>
                    <label htmlFor="checkbox1" className="checkbox-label">З місцем харчування поблизу?</label>
                </div>
                <div className="checkbox-item">
                    <input className="button" type="checkbox" id="checkbox2" onChange={handleCheckboxChange}
                           checked={selectedOptions.checkbox2}/>
                    <label htmlFor="checkbox2" className="checkbox-label">З можливістю лишатись наніч?</label>
                </div>
                <div>
                    <button className="Find-button" onClick={setFilteredPlaces}>Пошук</button>
                </div>
            </div>
        );
}

export default SideBar;
