import React, {Component} from 'react';
import './BottomSide.css'
class BottomSide extends Component {
    render() {
        return (
            <div className="twoItems">
                <div className='text'>Хочете якісно відпочити, але вже всюди були, або не знаєте
                    куди саме відправитися? Не біда, адже ви попали за адресою.
                    Тут ви зможете знайти наймальовничіші куточки України,
                    багато цікавих місць та море насолоди від різних закладів.
                    Ми допоможемо підібрати ваше місце душевної насолоди. То що, ви з нами?
                </div>

                <button className="goButton">ПОЇХАЛИ</button>


            </div>
        );
    }
}

export default BottomSide;