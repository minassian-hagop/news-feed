import { useState, useEffect, useRef } from 'react';
import { Grid, Item, Button, Input, Pagination } from 'semantic-ui-react';
import axios from 'axios';

import { CountrySelectRadio, CategorySelectRadio, SourcesCheckbox } from './components';

import { TOP_HEADLINES } from '../../constants/api';

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

    const [searchData, setSearchData] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        searchInputRef.current.inputRef.current.value = search_filter;
    }, [search_filter]);

    useEffect(() => {
        let queryString = `?page=${currentPage}&q=${search_filter}`;

        if (sources_filter.length) {
            queryString += `&sources=${sources_filter.join(',')}`;
        } else {
            if (country_filter) {
                queryString += `&country=${country_filter}`;
            }

            if (category_filter) {
                queryString += `&category=${category_filter}`;
            }
        }

        axios({
            method: 'GET',
            url: `${TOP_HEADLINES}${queryString ? queryString : ''}`,
        })
        .then(res => {
            if (res.status === 200) {
                console.log(res.data)
                setSearchData(res.data.articles);
                setTotalResults(res.data.totalResults);
                return;
            }

            setSearchData([]);
            setTotalResults(0);
            setCurrentPage(1);
        })
        .catch(err => {
            setSearchData([]);
            setTotalResults(0);
            setCurrentPage(1);
        })
    }, [search_filter, country_filter, category_filter, sources_filter, currentPage]);

    const handleSearch = (event) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }

        timeoutId.current = setTimeout(() => {
            setSearchFilter(event.target.value.trim());
        }, 500);
    }

    const handlePageChange = (e, data) => {
        if (data.activePage !== currentPage) {
            setCurrentPage(data.activePage);
        }
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
                            {
                                !!searchData.length &&
                                searchData.map((article, index) => (
                                    <Item
                                        className="news-item"
                                        image={article.urlToImage}
                                        header={article.title}
                                        description={article.description}
                                        meta={article.author}
                                        extra={<a href={article.url} target="_blank">Source link</a>}
                                        key={index}
                                    />
                                ))
                            }
                        </Item.Group>
                        {
                            totalResults > 20 &&
                                <Pagination
                                    totalPages={Math.ceil(totalResults / 20)}
                                    onPageChange={handlePageChange}
                                />
                        }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )
}

export default Search;
