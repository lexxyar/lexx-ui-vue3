# lxTable

## Usage

```vue
<lx-table :header="thead" :data="data">
  <template #user="{ field, item }">
    <div class="flex flex-start flex-nowrap">
      {{ item[field.key] }}
    </div>
  </template>
</lx-table>
```

## Properties
Name|Type|Default|Description
---|---|---|---
checkboxes|Boolean|`true`|Show / Hide checkboxes
header|Array|`[]`|Array of headers
data|Array|`[]`|Array of data

## Events
Name|Description
---|---
row-click|

## Header structure
Field|Required|Description
---|---|---
key|`true`|
title|`false`|
