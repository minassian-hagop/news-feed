import { useState } from 'react';
import { Form, Checkbox, Accordion, Icon } from 'semantic-ui-react';

const SourcesCheckbox = ({ sources, selected, onSelect }) => {
    const [active, setActive] = useState(false);

    const handleChange = (e, { value }) => {
        if (selected.indexOf(value) !== -1) {
            onSelect(selected.filter(val => val !== value));
        } else {
            onSelect([...selected, value]);
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
                                        checked={selected.indexOf(source.id) !== -1}
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
