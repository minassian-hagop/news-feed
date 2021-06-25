import { useState } from 'react';
import { Form, Checkbox, Accordion, Icon } from 'semantic-ui-react';

const SourcesCheckbox = ({ sources }) => {
    const [values, setValues] = useState([]);
    const [active, setActive] = useState(false);

    const handleChange = (e, { value }) => {
        if (values.indexOf(value) !== -1) {
            setValues(values.filter(val => val !== value));
        } else {
            setValues([...values, value]);
        }
    };

    const handleAccordionClick = () => {
        setActive(prevState => !prevState);
    }

    return (
        <Form style={{ marginTop: 20 }}>
            <Accordion>
                <Accordion.Title active={active} onClick={handleAccordionClick}>
                    <Icon name='dropdown' />
                    Sources:
                </Accordion.Title>
                <Accordion.Content active={active}>
                    <div className="checkbox-container">
                        {
                            sources.map(source => (
                                <Form.Field width="5" inline>
                                    <Checkbox
                                        label={source.name}
                                        value={source.id}
                                        checked={values.indexOf(source.id) !== -1}
                                        onChange={handleChange}
                                    />
                                </Form.Field>
                            ))
                        }
                    </div>
                </Accordion.Content>
            </Accordion>
        </Form>
    )
}

export default SourcesCheckbox;
