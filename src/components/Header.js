import '../assets/css/main.css'

export default function Header() {

    function sidebar() {
        document.querySelector('#d-none').classList.toggle('d-none');
        
    };

    return (
        <div>
            <nav className="pt-3 navbar-light bg-white bg-lighty">
                <div className="justify-content-between header-row mb-2 margin-sm-end">
                    <form className="d-flex justify-content-end">
                        <i className="fas fa-align-left py-3 pe-3  d-lg-none" onClick={sidebar}></i>
                        <input type="search" name="name" className="form-control form-control-xtr rounded-xlg" placeholder="Ask us any question" aria-label="Search" />
                        <i className='fas fa-search position-absolute mt-3 mx-4'></i>
                    </form>
                    <div className='card rounded-xlg px-3 py-2'>
                        <div className='d-flex'>
                            <div className='d-flex'>
                                <i className='far fa-bell search'></i>
                                <div className='mx-2'>
                                    <span className="badge p-1 alertColor">3</span>
                                </div>
                            </div>
                            <div className='hr-right'></div>
                            <div className='d-flex mx-4'>
                                <div className='small-circle'></div>
                                <i className='fas fa-chevron-down'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}