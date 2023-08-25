import type { FC } from 'react';
import { Text } from 'react-native-paper';

type DetailBaseProps = {
    what: string;
    when: string;
    how: string;
    example: string
};

const DetailBase: FC<DetailBaseProps> = props => {
    return (
        <>
            <Text variant='titleLarge'>どんなもの？</Text>
            <Text variant='bodyLarge'>{props.what}</Text>

            <Text variant='titleLarge'>主にいつ使える？</Text>
            <Text variant='bodyLarge'>{props.when}</Text>

            <Text variant='titleLarge'>どうやって使う？</Text>
            <Text variant='bodyLarge'>{props.how}</Text>

            <Text variant='titleLarge'>例</Text>
            <Text variant='bodyLarge'>{props.example}</Text>
        </>
    );
};

export const DetailSeventhToTwoFive: FC = () => {
    return (
        <DetailBase 
            what='セブンスコードをツーファイブに分割できる' 
            when='セブンスコードがドミナントまたはセカンダリードミナントとして四度上のコードに解決するとき' 
            how='セブンスコードが指定されている部分の前半分をを四度下のマイナーセブンスコードまたはハーフディミニッシュコードに変える' 
            example='|G7    |CM7    | --> |Dm7 G7 |CM7    |'
        />
    );
};
