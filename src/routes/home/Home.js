import { Header, Grid, Card, Placeholder, Segment } from 'semantic-ui-react';
import { useHistory } from 'react-router';
import _ from 'lodash';
import ISO6391 from 'iso-639-1';
import countryLookup from 'country-code-lookup';

const Home = ({ sources, setSourcesFilter }) => {
    const history = useHistory();

    const handleSourceSelect = (sourceId) => {
        setSourcesFilter([sourceId]);
        history.push('/search');
    }

    return (
        <div>
            <Header content="Sources" textAlign="center" />
            <Grid centered>
            {
                sources.length === 0
                ? _.times(3, (index) => <Grid.Column mobile={16} tablet={8} computer={5}>
                    <Segment raised key={index}>
                        <Placeholder>
                            <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                            <Placeholder.Line length="medium" />
                            <Placeholder.Line length="short" />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Segment>
                </Grid.Column>)
                : sources.map((source, index) => {
                    const category = source.category.toUpperCase();
                    const language = ISO6391.getName(source.language);
                    const countryObj = countryLookup.byIso(source.country);

                    return <Grid.Column mobile={16} tablet={8} computer={5} key={index}>
                        <Card
                            style={{ height: '100%' }}
                            fluid
                            color="grey"
                            onClick={() => handleSourceSelect(source.id)}
                            header={source.name}
                            meta={`${category} - ${language} - ${countryObj ? countryObj.country : '' }`}
                            description={source.description}
                        />
                    </Grid.Column>
                })
            }
            </Grid>
        </div>
    )
}

export default Home;
