import './BonusCard.css';
import icon from '../../img/icon.svg';

function BonusCard(props) {
    const { currentQuantity, newDate, forBurningQuantity } = props;
    return (
        <section className='BonusCard'>
            <div className='BonusCard-content'>
                <h2 className='BonusCard-title'>{currentQuantity} бонусов</h2>
                <div className='BonusCard-container'>
                    <h3 className='BonusCard-subtitle'>{newDate} сгорит</h3>
                    <img className='BonusCard-icon' src={icon} alt='Fire'/>
                    <h3 className='BonusCard-subtitle'>{forBurningQuantity} бонусов</h3>
                </div>
            </div>
            <button className='BonusCard-button'></button>
        </section>
    )
}

export default BonusCard;