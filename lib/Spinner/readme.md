# Description
Крутящийся спиннер. Нужен для отображения состояния процесса, время окончания которого неизвестно.

# Usage
	import { Button, Spinner } from 'kot-kit';

	export default props => (
		<Button primary>
			<Spinner count={8} />
			Button with spinner
		</Button>
	)

# Props
| Name | Required | Type | Default value | Description |
|---|:-:|---|---|---|
| className || `string` || Имя внешнего класса, вешается на контейнер |
| count || `number` | 8 | Количество линий индикатора |
| width || `number` | 2 | Ширина линий |
| length || `number` | 6 | Длина линий |
| innerRadius || `number` | 3 | Радиус внутренней окружности (на какое расстояние от центра сдвинуты линии) |
| borderRadius || `number` | 0 | Радиус скругления углов линий индикатора |