import * as React from 'react';
import {
	View,
	Panel,
	Text,
	//Button,
	Input,
	Link,
	withStyles,
	StyleContextProvider,
} from 'kot-kit';
import { Route } from 'react-router-dom';

const styles = (theme: any) => ({
	toggle: {
		flex: [0, 0, '110px'],
	},
	header: {
		flex: 1,
	},
	pageWrapper: {
		maxWidth: 1200,
		minWidth: 1000,
		width: '100%',
		margin: [10, 'auto'],
	},
	'@global body': {
		font: theme.fonts.primary.style.paragraphMedium
	},
})
import WelcomeArticle from '../docs/Welcome';


const Docs: any[] = [];
const Atoms: any[] = [];
const Molecules: any[] = [];
const Organisms: any[] = [];

const requireAll = (context: any, componentsArray: any[]) => {
	context.keys().forEach((key: string) => {
		const name = key.match(/\.\/(.*)\.(j|t)sx?$/i);
		const data: any = {
			Component: context(key)
		};
	
		if (!!name) {
			data.key = name[1];
		}
	
		componentsArray.push(data);
	});
}

requireAll(require.context('../docs', true, /\.tsx$/i), Docs);
requireAll(require.context('../atoms', true, /\.tsx$/i), Atoms);
requireAll(require.context('../molecules', true, /\.tsx$/i), Molecules);
requireAll(require.context('../organisms', true, /\.tsx$/i), Organisms);



class Layout extends React.Component<any> {
	public render() {
		const { classes } = this.props;
		return (
			<Panel withShadow={false} withMargin={false} className={classes.pageWrapper}>
				<View>
					<View className={classes.header}>
						<Text header extraLarge>UI kit showcase</Text>
					</View>
					<View className={classes.toggle}>
						{/* <Text>
							<Button>Dark theme</Button>
						</Text> */}
					</View>
				</View>
				<StyleContextProvider secondary>
					<View width={1 / 4}>
						<Input placeholder="Search..." />
						<Text header large>Docs</Text>
						{Docs.map((Doc, index) => (
								<Text key={index} paragraph>
									<Link href={`/docs/${Doc.key}`}>{Doc.key}</Link>
								</Text>
						))}
						<Text header large>Atoms</Text>
						{Atoms.map((Atom, index) => (
							<Text key={index} paragraph>
								<Link href={`/atoms/${Atom.key}`}>{Atom.key}</Link>
							</Text>
						))}
						<Text header large>Molecules</Text>
						{Molecules.map((Molecule, index) => (
							<Text key={index} paragraph>
								<Link href={`/molecules/${Molecule.key}`}>{Molecule.key}</Link>
							</Text>
						))}
						<Text header large>Organisms</Text>
						{Organisms.map((Organism, index) => (
							<Text key={index} paragraph>
								<Link href={`/organisms/${Organism.key}`}>{Organism.key}</Link>
							</Text>
						))}
					</View>
				</StyleContextProvider>
				<StyleContextProvider primary>
					<View width={3 / 4}>
						<Route exact path={`/`} component={WelcomeArticle} />
						{Docs.map((Doc, index) => <Route key={index} exact path={`/docs/${Doc.key}`} component={Doc.Component.default} />)}
						{Atoms.map((Atom, index) => <Route key={index} exact path={`/atoms/${Atom.key}`} component={Atom.Component.default} />)}
						{Molecules.map((Molecule, index) => <Route key={index} exact path={`/molecules/${Molecule.key}`} component={Molecule.Component.default} />)}
						{Organisms.map((Organism, index) => <Route key={index} exact path={`/organisms/${Organism.key}`} component={Organism.Component.default} />)}
					</View>
				</StyleContextProvider>
			</Panel>
		)
	}
}

export default withStyles(styles)(Layout);