import '../assets/css/main.css'

export default function SubHeader() {
    return (

        <div className='mb-2 main-nav'>
            <div className='margin-sm-end sub--header'>
                <li className='nav-item nav-item--active'>Efficiency</li>
                <li className='nav-item'>Volume</li>
                <li className='nav-item'>Customer Satisfaction</li>
                <li className='nav-item'>Backlog</li>
            </div>
        </div>
    )
}