import View, { IOuterProps } from './view';
import { withTheme } from 'provider';

export interface IProps extends IOuterProps {
}

export default withTheme(View)