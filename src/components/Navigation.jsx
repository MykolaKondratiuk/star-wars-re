import NavItem from './NavItem';
import {navItems} from "../utils/constanst.js";

const Navigation = ({changePage}) => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                {navItems.map(item => <NavItem changePage={changePage} itemTitle={item} key={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;