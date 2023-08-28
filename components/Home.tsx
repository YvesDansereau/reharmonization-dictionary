import { Text, List } from 'react-native-paper';
import type { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NavigationStackParamList } from '../types/NavigationStackParamList';
import { DetailContentSeventhToTwoFive } from '../assets/DetailContents';
import { StyleSheet } from 'react-native';

type TopProps = NativeStackScreenProps<NavigationStackParamList, 'Home'>;

export const Home: FC<TopProps> = props => {
    const navigation = props.navigation;

    return (
        <>
            <Text variant='headlineLarge' style={styles.headline}>リハモ辞典</Text>
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

const styles = StyleSheet.create({
    headline: {
        margin: 20
    }
});
