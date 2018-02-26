import * as React from 'react';
import {
	View as ViewBox,
	Text,
	Input,
	Button,
	Group,
	Panel,
} from 'kot-kit';
import * as readme from '../../../lib/Group/readme.md';
import MarkdownViewer from '../MarkdownViewer';
import Knobs from '../Knobs';

export default () => (
	<ViewBox>
		<ViewBox width={1 / 3}>
			<Text header large>Group of buttons</Text>
			<Panel withShadow={false} withMargin={false}>
				<Group>
					<Button toggled>М</Button>
					<Button>Ж</Button>
				</Group>
			</Panel>
		</ViewBox>

		<ViewBox width={1 / 3}>
			<Text header large>Mixed items</Text>
			<Panel withShadow={false} withMargin={false}>
				<Group>
					<Input expanded placeholder="Search…" />
					<Button primary>🔎</Button>
				</Group>
			</Panel>
		</ViewBox>

		<ViewBox width={1 / 3}>
			<Text header large>Counter markup</Text>
			<Panel withShadow={false} withMargin={false}>
				<Group>
					<Button>–</Button>
					<Input expanded disabled value="1" readOnly />
					<Button>+</Button>
				</Group>
			</Panel>
		</ViewBox>

		<ViewBox>
			<Knobs>
				{({ boolean }: any) => [
					<Text header large>Vertical group</Text>,
					<Panel withShadow={false} withMargin={false}>
						<Group vertical={boolean('Is vertical?', true)}>
							<Input expanded placeholder="Email" type="email" />
							<Input expanded placeholder="Password" type="password" />
							<Button expanded>Log in</Button>
						</Group>
					</Panel>
				]}
			</Knobs>
		</ViewBox>

		<MarkdownViewer source={readme} />
	</ViewBox>
)