import { withTheme, withStyles } from 'provider';
import View from './view';
import styles from './style';

export default withTheme(withStyles(styles)(View));