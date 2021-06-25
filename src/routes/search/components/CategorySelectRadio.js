import { useState } from 'react';
import { Form, Radio, Accordion, Icon } from 'semantic-ui-react';

import CATEGORIES from '../../../constants/newsapi-categories.js';

const CategorySelectRadio = ({ selected, onSelect }) => {
    const [active, setActive] = useState(false);

    const handleChange = (e, { value }) => onSelect(value);

    const handleAccordionClick = () => {
        setActive(prevState => !prevState);
    }

    return (
        <Form style={{ marginTop: 20 }}>
            <Accordion>
                <Accordion.Title active={active} onClick={handleAccordionClick}>
                    <Icon name='dropdown' />
                    Category:
                </Accordion.Title>
                <Accordion.Content active={active}>
                    <div className="checkbox-container">
                        {
                            CATEGORIES.map(category => (
                                <Form.Field width="6" inline>
                                    <Radio
                                        label={category.toUpperCase()}
                                        name="category"
                                        value={category}
                                        checked={selected === category}
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

export default CategorySelectRadio;
