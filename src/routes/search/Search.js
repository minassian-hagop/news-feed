import { Grid, Item, Button } from 'semantic-ui-react';

import './Search.scss';

const Search = () => {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column mobile={16} tablet={16} computer={6}>
                    <div className="filters">
                        <Button>Clear</Button>
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
    )
}

export default Search;
