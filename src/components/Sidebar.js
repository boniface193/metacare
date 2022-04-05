import '../assets/css/main.css'

export default function Sidebar() {

    return (
        <div className="container sidebar">
            <div className='d-flex'>
                <div className='card mt-3 cardy mb-4'>
                    <div className='card-sub'>
                        <div className="text-head">
                            Metacare
                        </div>
                        <p className="text-sub">
                            adeyinka@metacare.app
                        </p>
                    </div>
                </div>
            </div>


            <ul className='list-style-type-none'>
                <li className='text-icon'>
                    <i className="fas fa-user-friends text-ico"></i>
                    <span>Admin</span>
                    <i className="fas fa-chevron-right arrow-down"></i>
                </li>

                <li className='text-icon'>
                    <i className="far fa-check-square text-ico"></i>
                    <span>Knowledge Base</span>
                    <i className="fas fa-chevron-right arrow-down"></i>
                </li>

                <li className='text-icon'>
                    <i className="far fa-check-square text-ico"></i>
                    <span>Train SAM</span>
                    <i className="fas fa-chevron-right arrow-down"></i>
                </li>

                <li className='text-icon'>
                    <i className="far fa-calendar text-ico"></i>
                    <span>Agent Inbox</span>
                    <i className="fas fa-chevron-right arrow-down"></i>
                </li>

                <li className='text-icon'>
                    <i className="far fa-clock text-ico"></i>
                    <span>Help Center</span>
                    <i className="fas fa-chevron-right arrow-down"></i>
                </li>

                <li className='text-icon active'>
                    <i className="far fa-comment-dots ps-3"></i>
                    <span>Analytics</span>
                    <i className="fas fa-chevron-down arrow-down"></i>
                    <ul className='text-substitute'>
                        <li className='fw-bold'>Teams</li>
                        <li className='mt-2'>Knowledge Base</li>
                        <li className='mt-2'>Training SAM</li>
                        <li className='mt-2'>Help Center</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}