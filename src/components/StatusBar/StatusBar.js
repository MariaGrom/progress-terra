import './StatusBar.css';
import figma from '../../img/figma.svg';
import battery from '../../img/battery.svg';

function StatusBar() {
    return (
        <section className='StatusBar'>
            <div className='StatusBar-container'>
                <img src={figma} className='StatusBar-image' alt='Application' />
                <p className='StatusBar-text'>Figma</p>
            </div>
            <div className='StatusBar-container'>
                <p className='StatusBar-text'>9:42&nbsp;</p>
                <p className='StatusBar-text StatusBar-AM_PM'>AM</p>
            </div>
            <div className='StatusBar-container'>
                <p className='StatusBar-text'>42%</p>
                <img src={battery} className='StatusBar-battery' alt='Battery'/>
            </div>
        </section>
    )
}

export default StatusBar;