import '../assets/css/main.css'

export default function Content() {
    return (
        <div className='margin-sm-end'>
            <div className='my-4 d-flex justify-content-between head-row'>
                <div>
                    <h1 className="content-heading text-nowrap">
                        Efficiency Analytics
                    </h1>
                </div>

                <div className='d-flex justify-content-between'>
                    <div className='header-row dont-show '>
                        <input name='name' type='search' placeholder='Search' className='form-control form-size form-size-xt px-5 rounded' />
                        <i className='fas fa-search search position-absolute mt-2 mx-3'></i>
                    </div>
                    <div className='card card-text rounded px-3'>
                        <div className=' pt-2'>
                            <span>Filter Options</span>
                            <i className='fas fa-chevron-down'></i>
                        </div>

                    </div>
                    <button className='btn btn-success form-size rounded'>Export</button>
                </div>
            </div>
        </div>
    )
}