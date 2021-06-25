import { useEffect, useRef } from 'react';
import { Grid, Item, Button, Input } from 'semantic-ui-react';

import { CountrySelectRadio, CategorySelectRadio, SourcesCheckbox } from './components';

import './Search.scss';

const Search = ({
    sources,
    search_filter,
    country_filter,
    category_filter,
    sources_filter,
    setSearchFilter,
    setCategoryFilter,
    setCountryFilter,
    setSourcesFilter,
    clearFilters
}) => {
    const searchInputRef = useRef(null);
    const timeoutId = useRef(null);

    useEffect(() => {
        searchInputRef.current.inputRef.current.value = search_filter;
    }, [search_filter]);

    useEffect(() => {
        console.log('fetch ...');
    }, [search_filter, country_filter, category_filter, sources_filter]);

    const handleSearch = (event) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }

        timeoutId.current = setTimeout(() => {
            setSearchFilter(event.target.value.trim());
        }, 500);
    }

    return (
        <>
            <Button className="clear-button" onClick={clearFilters}>Clear</Button>
            <Grid>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={16} computer={6}>
                        <div className="filters">
                            <Input
                                placeholder="Search..."
                                fluid
                                ref={searchInputRef}
                                onChange={handleSearch}
                            />
                            {
                                !sources_filter.length &&
                                <>
                                <CountrySelectRadio
                                    selected={country_filter}
                                    onSelect={setCountryFilter} />
                                <CategorySelectRadio
                                    selected={category_filter}
                                    onSelect={setCategoryFilter} />
                                </>
                            }
                            {
                                (!country_filter && !category_filter) &&
                                <SourcesCheckbox
                                    sources={sources}
                                    selected={sources_filter}
                                    onSelect={setSourcesFilter} />
                            }
                        </div>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={16} computer={10}>
                        <Item.Group>
                            <Item
                                className="news-item"
                                image='/'
                                header='Header'
                                description='Description'
                                meta='Metadata'
                                extra='Extra'
                            />
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )
}

export default Search;
