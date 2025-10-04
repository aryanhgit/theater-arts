import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaPlus, FaMinus } from "react-icons/fa";
import clubLogo from "../assets/theater-logo.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState({});

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubMenu = (menuName) => {
        setOpenSubMenus(prevState => ({
            ...prevState,
            [menuName]: !prevState[menuName]
        }));
    };

    const menuItems = [
        { name: "Gallery"},
        { name: "People", subItems: ["Students", "Alumni"] },
        { name: "About" },
    ];

    return (
        <header className="bg-white shadow-md font-sans sticky top-0 z-50">
            {/* Desktop Navigation */}
            <div className="container mx-auto px-4 h-20 flex justify-between items-center">
                {/* Logo and Title */}
                <Link to="/" className="flex items-center space-x-4 text-black">
                    <img src={clubLogo} alt="Student Theater Logo" className="h-15" />
                    <span className="text-xl font-semibold tracking-tight">Kalakaar</span>
                </Link>

                {/* Desktop Menu Links */}
                <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
                    {menuItems.map(item => (
                        item.subItems ? (
                            <div key={item.name} className="relative group">
                                <span className="hover:text-black cursor-pointer pb-2">{item.name}</span>
                                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                                    <ul className="py-1">
                                        {item.subItems.map(sub => (
                                            <li key={sub}>
                                                <Link to={`/${sub.toLowerCase()}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    {sub}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <Link key={item.name} to={`/${item.name.toLowerCase()}`} className="hover:text-black cursor-pointer">
                                {item.name}
                            </Link>
                        )
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isMenuOpen ? <FaBars className="h-6 w-6 text-black" /> : <FaBars className="h-6 w-6 text-black" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`
                    lg:hidden absolute top-full left-0 w-full bg-white shadow-lg
                    transition-all duration-500 ease-in-out overflow-hidden
                    ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <div className="text-gray-800 p-4 text-lg">
                    <ul>
                        {menuItems.map(item => (
                            <li key={item.name} className="border-b border-gray-200 last:border-b-0">
                                {item.subItems ? (
                                    <div>
                                        <button onClick={() => toggleSubMenu(item.name)} className="w-full flex justify-between items-center py-4 font-semibold">
                                            <span>{item.name}</span>
                                            {openSubMenus[item.name] ? <FaMinus /> : <FaPlus />}
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubMenus[item.name] ? 'max-h-96' : 'max-h-0'}`}>
                                            <ul className="pl-4 pb-2">
                                                {item.subItems.map(sub => (
                                                    <li key={sub} className="py-2">
                                                        <a href={`/${sub.toLowerCase()}`} onClick={toggleMenu} className="text-gray-600 hover:text-black">
                                                            {sub}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <a href={`/${item.name.toLowerCase()}`} onClick={toggleMenu} className="block py-4 font-semibold">
                                        {item.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;