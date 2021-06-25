import { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Button, Icon, Header } from 'semantic-ui-react';

import './HeaderNavBar.scss';

const HeaderNavBar = ({ search_filter, setSearchFilter, clearFilters }) => {
    const history = useHistory();

    const inputRef = useRef(null);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const closeSearch = useCallback(() => {
        setIsSearchActive(false);
    }, []);

    const handlePressEnter = useCallback((event) => {
        if (event.key === 'Enter') {
            closeSearch();
        }
    }, [])

    useEffect(() => {
        document.addEventListener('click', closeSearch);
        inputRef.current?.inputRef.current && 
            inputRef.current.inputRef.current.addEventListener('keyup', handlePressEnter);

        return () => {
            document.removeEventListener('click', closeSearch);
            inputRef.current?.inputRef.current && 
                inputRef.current.inputRef.current.removeEventListener('keyup', handlePressEnter);
        }
    }, []);

    useEffect(() => {
        if (isSearchActive) {
            inputRef.current.focus();
        } else {
            const searchValue = inputRef.current.inputRef.current.value.trim();
            if (searchValue !== search_filter) {
                setSearchFilter(searchValue);
            }
        }
    }, [isSearchActive]);

    useEffect(() => {
        inputRef.current.inputRef.current.value = search_filter;
    }, [search_filter]);

    const toggleSearch = (event) => {
        event.stopPropagation();
        setIsSearchActive(!isSearchActive);
    }

    const handleHeaderClick = () => {
        if (history.location.pathname !== '/') {
            clearFilters();
            history.push('/');
        }
    }

    return (
        <div className="navbar">
            <div className="navbar__item navbar__item_header" onClick={handleHeaderClick}>
                <Header content="News" />
            </div>
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
