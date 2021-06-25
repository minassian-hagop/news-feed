import { Grid, Item, Button, Input } from 'semantic-ui-react';

import './Search.scss';

const Search = () => {
    return (
        <>
            <Button className="clear-button">Clear</Button>
            <Grid>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={16} computer={6}>
                        <div className="filters">
                            <Input placeholder="Search..." fluid />
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
