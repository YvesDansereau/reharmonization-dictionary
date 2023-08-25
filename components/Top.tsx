import { Headline, List, Paragraph } from 'react-native-paper';
import type { FC } from 'react'
import { Pressable } from 'react-native';
import type { NavigationProp } from '@react-navigation/native';
import { PageName } from '../types/PageName';

type TopProps = {
    navigation: NavigationProp<any> //TODO: specify the class
};

export const Top: FC<TopProps> = props => {
    const handlePress = (name: string): void => {
        props.navigation.navigate(name);
    };

    return (
        <>
            <Headline>リハモ辞典</Headline>
            <List.AccordionGroup>
                <List.Accordion title="セブンスコードのリハモ" id="1">
                    <Pressable onPress={() => {handlePress(PageName.SeventhToTwoFive)}}>
                        <List.Item title={PageName.SeventhToTwoFive} />
                    </Pressable>
                </List.Accordion>
            </List.AccordionGroup>
        </>
    );
};
