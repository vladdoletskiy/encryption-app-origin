import './Main.css';
function Main() {
    return (
      <div className='main-container'>
            <div>
                <a className='main-btn btn btn-outline-primary' href="/create">Create note</a>
            </div> 
            <div>
                <a className='main-btn btn btn-outline-primary' href="/note">View note</a>
            </div> 
      </div>
    );
  }
  
  export default Main;
  