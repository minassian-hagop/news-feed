import { useState } from 'react';
import { Form, Radio, Accordion, Icon } from 'semantic-ui-react';
import countryLookup from 'country-code-lookup';

import COUNTRIES from '../../../constants/newsapi-country-codes';

const CountrySelectRadio = () => {
    const [value, setValue] = useState();
    const [active, setActive] = useState(false);

    const handleChange = (e, { value }) => setValue(value);

    const handleAccordionClick = () => {
        setActive(prevState => !prevState);
    }

    return (
        <Form style={{ marginTop: 20 }}>
            <Accordion>
                <Accordion.Title active={active} onClick={handleAccordionClick}>
                    <Icon name='dropdown' />
                    Country:
                </Accordion.Title>
                <Accordion.Content active={active}>
                    <div className="checkbox-container">
                        {
                            COUNTRIES.map(countryCode => {
                                const countryObj = countryLookup.byIso(countryCode);

                                return (
                                    <Form.Field width="5" inline>
                                        <Radio
                                            label={countryObj ? countryObj.country : countryCode}
                                            name="country"
                                            value={countryCode}
                                            checked={value === countryCode}
                                            onChange={handleChange}
                                        />
                                    </Form.Field>
                                )
                            })
                        }
                    </div>
                </Accordion.Content>
            </Accordion>
        </Form>
    )
}

export default CountrySelectRadio;
