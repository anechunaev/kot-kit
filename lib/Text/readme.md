# Usage
	import { Text } from 'kot-kit';

	export default props => <Text header large>Hello world!</Text>

# Props
| Name | Required | Type | Default value | Description |
|---|:-:|---|---|---|
| header || `boolean` | `false` | Включает/выключает стили заголовка |
| large || `boolean` | `false` | Модификатор заголовка и текста, увеличивает размер шрифта |
| extraLarge || `boolean` | `false` | Модификатор заголовка и текста, самый большой размер шрифта |
| small || `boolean` | `false` | Модификатор заголовка и текста, уменьшает размер шрифта |
| extraSmall || `boolean` | `false` | Модификатор заголовка и текста, самый маленький размер шрифта |
| paragraph || `boolean` | `false` | Добавляет отступы между блоками текста |