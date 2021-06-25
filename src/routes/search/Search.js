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
    return (
        <>
            <Button className="clear-button" onClick={clearFilters}>Clear</Button>
            <Grid>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={16} computer={6}>
                        <div className="filters">
                            <Input placeholder="Search..." fluid />
                            <CountrySelectRadio />
                            <CategorySelectRadio />
                            <SourcesCheckbox sources={sources} />
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
