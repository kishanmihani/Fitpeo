import { Link,Outlet } from "react-router-dom";

const Layout =() =>{
return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Manatee</Link>                    
                </li>
                <li>
                    <Link to="/Whale">Whale</Link>                    
                </li>
                <li>
                    <Link to="/Narehal">Narehal</Link>                    
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
)
}

export default Layout