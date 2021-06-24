import { Header, Grid, Card } from 'semantic-ui-react';

const Home = () => {
    return (
        <div>
            <Header content="Sources" textAlign="center" />
            <Grid>
                <Grid.Row columns={3} only="computer">
                    <Grid.Column>
                        <Card
                            fluid
                            color="grey"
                            href='#card-example-link-card'
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} only="mobile tablet">
                    <Grid.Column>
                        <Card
                            fluid
                            color="grey"
                            href='#card-example-link-card'
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Home;
