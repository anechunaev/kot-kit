import * as React from 'react';

export interface IProps {
	className: string;
}

export default (props: IProps) => <button {...props} />