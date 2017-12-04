# Description
Компонент ссылки
**ToDo:**
* Добавит обработку контекстов
* Добавить зависимость от `<Text />`

# Usage
	import { Link } from 'kot-kit';

	export default props => <Link pseudo onClick={props.onClick}>I’m pseudolink</Link>

# Props
| Name | Required | Type | Default value | Description |
|---|:-:|---|---|---|
| pseudo || `boolean` | `false` | Отображает стили псевдоссылки, подменяет элемент `<a>` на `<span>` |