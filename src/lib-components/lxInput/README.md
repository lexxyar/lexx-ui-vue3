# Inputs

## lxSearchHelp
### Properties
Name|Type|Default|Required|Description
---|---|---|---|---
readonly|Boolean|`false`| |
label|String| | |
emptyLabel|Boolean|`false`| |
placeholder|String| | |
helpTitle|String| | |
tableHeader|Array| |`Yes`|
tableContent|Array| | |
keyField|String|`id`| |
valueField|String|`name`| |
clearButton|Boolean|`false`| |Show clear button for input

### Emits
Emit|Parameter
---|---
update:modelValue|selectedKey
onclear|


### Header structure
Field|Required|Description
---|---|---
key|`true`|Field name of table data
title|`false`|Title for table header
