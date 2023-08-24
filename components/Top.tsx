import { Headline, List } from 'react-native-paper';

export const Top = () => {
    return (
        <>
            <Headline>リハモ辞典</Headline>
            <List.AccordionGroup>
                <List.Accordion title="セブンスコードのリハモ" id="1">
                    <List.Item title="ツーファイブへの分割" />
                </List.Accordion>
            </List.AccordionGroup>
        </>
    );
};
