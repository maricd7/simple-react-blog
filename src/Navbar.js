import {Link} from 'react-router-dom'

const  Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Simple Blog</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                
                <Link to='/create' style={{
                    color:'white', 
                    backgroundColor:'#0024c75b',
                    borderRadius:'16px'
                    
                }}>New Blog</Link>
            </div>
        </nav>
      );
}
 
export default Navbar ;