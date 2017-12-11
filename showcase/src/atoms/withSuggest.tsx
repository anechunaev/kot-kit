import * as React from 'react';

import {
	withSuggest,
	Suggest,
	Select,
	Link,
	Text,
	View,
} from 'kot-kit';

const withPetsSuggest = withSuggest((props: any) => (
	<Suggest {...props}>
		<Select value="кошек">кошек</Select>
		<Select value="собак">собак</Select>
		<Select value="попугайчиков">попугайчиков</Select>
	</Suggest>
));
const withAdjectiveSuggest = withSuggest((props: any) => (
	<Suggest {...props}>
		<Select value="милые">милые</Select>
		<Select value="преданные">преданные</Select>
		<Select value="гадят где попало">гадят где попало</Select>
	</Suggest>
));
const EditableLink = ({ value, ...rest }: any) => <Link {...rest} pseudo tabIndex={0}>{value}</Link>

const PetsLink = withPetsSuggest(EditableLink);
const AdjectiveLink = withAdjectiveSuggest(EditableLink);

export default () => (
	<View>
		<Text header large>Default suggest with editable element</Text>

		<Text paragraph>
			Я люблю <PetsLink value="кошек" />. Они <AdjectiveLink value="милые" />.
		</Text>
	</View>
)