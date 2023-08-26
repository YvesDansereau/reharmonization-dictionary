import { Text, List } from 'react-native-paper';
import type { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationStackParamList } from '../types/NavigationStackParamList';
import { DetailContentSeventhToTwoFive } from '../assets/DetailContents';

type TopProps = NativeStackScreenProps<NavigationStackParamList, 'Top'>;

export const Top: FC<TopProps> = props => {
    const navigation = props.navigation;

    return (
        <>
            <Text variant='headlineLarge'>リハモ辞典</Text>
            <List.AccordionGroup>
                <List.Accordion title="セブンスコードのリハモ" id="1">
                    <List.Item
                        title={DetailContentSeventhToTwoFive.name}
                        onPress={() => { navigation.navigate("Detail", DetailContentSeventhToTwoFive) }}
                    />
                </List.Accordion>
            </List.AccordionGroup>
        </>
    );
};
