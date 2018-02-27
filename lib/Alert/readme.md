# Description
Компонент Alert для вывода системных сообщений, на которые пользователь должен обратить внимание.

# Usage
```javascript
import { Alert, Text } from 'kot-kit';

export default props => (
	<Alert title="Hello world!">
		<Text paragraph>Lorem ipsum dolor sit amet</Text>
	</Alert>
)
```

# Props
| Name | Required | Type | Default value | Description |
|---|:-:|---|---|---|
| danger || `boolean` | `false` | Добавляет стили для сообщения, которому требуется повышенное внимание пользователя |
| withMargin || `boolean` | `true` | Добавляет или убирает отступы |
| title || `string` || Заголовок сообщения |