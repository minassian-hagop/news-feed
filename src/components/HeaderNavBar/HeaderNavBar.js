import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Icon, Header } from 'semantic-ui-react';

import './HeaderNavBar.scss';

const HeaderNavBar = () => {
    const inputRef = useRef(null);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const closeSearch = useCallback((event) => {
        setIsSearchActive(false);
        inputRef.current.inputRef.current.value = '';
    }, [])

    useEffect(() => {
        document.addEventListener('click', closeSearch);

        return () => {
            document.removeEventListener('click', closeSearch);
        }
    }, []);

    useEffect(() => {
        if (isSearchActive) {
            inputRef.current.focus();
        } else {
            const searchValue = inputRef.current.inputRef.current.value;
            inputRef.current.inputRef.current.value = '';
            // Submit search
        }
    }, [isSearchActive]);

    const toggleSearch = (event) => {
        event.stopPropagation();
        setIsSearchActive(!isSearchActive);
    }

    return (
        <div className="navbar">
            <Link to="/" className="navbar__item">
                <Header content="News" />
            </Link>
            <Input
                action={
                    <Button onClick={toggleSearch}>
                        <Icon name='search' />
                    </Button>
                }
                className={`navbar__item search-input ${isSearchActive ? '' : 'inactive'}`}
                placeholder="Search..."
                ref={inputRef}
            />
        </div>
    )
}

export default HeaderNavBar;
