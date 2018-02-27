# Basic outer props `IBasicOuterProps<T>`
| Name | Required | Type | Default value | Description |
|---|:-:|---|---|---|
| className || `string` || Имя класса, которое будет присвоено внешнему DOM-элементу. |
| elementRef || `React.Ref<T>` || Функция, которая возвращает ссылку на внешний DOM-элемент |

**@TODO** Возможно стоит добавить `tabIndex?: number`

# Basic inner props `IBasicInnerProps`
| Name | Required | Type | Default value | Description |
|---|:-:|---|---|---|
| classes | ✓ | `Dictionary<string>` || Список CSS-классов, полученных HOC’ом `withStyles` |