import * as React from 'react';
import {
	withStyles,
	Panel,
	Text,
} from 'kot-kit';
import style from './style';
import * as hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';

export interface IProps {
	source: string;
	title?: string;
	classes: Dictionary<any>;
}

class MarkdownViewer extends React.PureComponent<IProps> {
	public componentDidMount() {
		hljs.initHighlighting();
	}

	public render() {
		return !this.props.source ? null : (
			<Panel withShadow={false} className={this.props.classes.wrapper}>
				{!!this.props.title && (
					<Text header>{this.props.title}</Text>
				)}
				<div className={this.props.classes.view} dangerouslySetInnerHTML={{ __html: this.props.source }} />
			</Panel>
		);
	}
}

export default withStyles(style)(MarkdownViewer);