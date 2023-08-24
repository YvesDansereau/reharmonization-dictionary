import { Headline, List } from 'react-native-paper';
import type { FC } from 'react'
import { Pressable } from 'react-native';

type TopProps = {
    navigation: any //TODO: specify the class
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
                    <Pressable onPress={() => {handlePress("DetailSeventhToTwoFive")}}>
                        <List.Item title="ツーファイブへの分割" />
                    </Pressable>
                </List.Accordion>
            </List.AccordionGroup>
        </>
    );
};
