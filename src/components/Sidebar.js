import '../assets/css/main.css'

export default function Sidebar() {
    function sidebar() {
        document.querySelector('#d-none').classList.toggle('d-none');
    };

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
                </li>

                <li className='text-icon'>
                    <i className="far fa-check-square text-ico"></i>
                    <span>Knowledge Base</span>
                </li>

                <li className='text-icon'>
                    <i className="far fa-check-square text-ico"></i>
                    <span>Train SAM</span>
                </li>

                <li className='text-icon'>
                    <i className="far fa-calendar text-ico"></i>
                    <span>Agent Inbox</span>
                </li>

                <li className='text-icon'>
                    <i className="far fa-clock text-ico"></i>
                    <span>Help Center</span>
                </li>

                <li className='text-icon active'>
                    <i className="far fa-comment-dots ps-3"></i>
                    <span>Analytics</span>
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