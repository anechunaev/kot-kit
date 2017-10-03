# Usage
	import { View } from 'kot-kit';

	export default (props) => <View width={1/3}>{props.children}</View>

# Props
| Name | Required | Type | Default value | Description |
|---|:-:|---|---|---|
| className || `string` || Задаёт имя класса обёртки |
| width || `number` | `1/1` | Устаналвивает ширину обёртки как часть ширины родителя. Например, `width={1/2}` задаст половину ширины родителя, `width={7/12}` — соответсвенно 7/12 от ширины родителя. |
| elementRef || `React.Ref` | `() => {}` | Функция, которая возвращает ссылку на ноду обёртки. |
| nowrap || `boolean` || Отключает возможность переноса блоков на новую строку |