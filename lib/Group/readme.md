# Description
Умеет группировать компоненты Button и Input в различных комбинациях.

# Usage
	import { Button, Group } from 'kot-kit';

	export default props => (
		<Group>
			<Button>М</Button>
			<Button>Ж</Button>
		</Group>
	)

# Props
| Name | Required | Type | Default value | Description |
|---|:-:|---|---|---|
| vertical || `boolean` | `false` | Отображать ли группу вертикально? |