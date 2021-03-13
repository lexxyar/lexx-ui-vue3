<template>
  <div>
    <title-component>Input group</title-component>
    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>Groups</template>
          <lx-input class="mb-1" label="Labeled" placeholder="Search text..."></lx-input>
          <lx-input label="Prepend" type="number" class="mb-1" value="99.90">
            <template #prepend>$</template>
          </lx-input>
          <lx-input label="Append" placeholder="Put e-mail here" class="mb-1">
            <template #append>@mail.com</template>
          </lx-input>
          <lx-input label="Both" placeholder="subdomain" class="mb-1">
            <template #prepend>domain.</template>
            <template #append>.com</template>
          </lx-input>
        </lx-card>
      </div>
      <div class="col-6">
        <lx-card>
          <template #header>Label size</template>
          <lx-input class="mb-1" label="Small" labelSize="sm" placeholder="Search text..."></lx-input>
          <lx-input class="mb-1" label="Default" placeholder="Search text..."></lx-input>
          <lx-input class="mb-1" label="Large" labelSize="lg" placeholder="Search text..."></lx-input>
          <lx-input class="mb-1" label="Extra large" labelSize="xl" placeholder="Search text..."></lx-input>
        </lx-card>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <lx-card>
          <template #header>Search help</template>
          <lx-search-help v-model="shSelected"
                          :fields="shFields"
                          :items="shValues"
                          keyField="key"
                          text-field="value" class="mb-1"/>
        </lx-card>
      </div>
    </div>

    <pre>
<code>&lt;template&gt;</code>
<code>  &lt;div&gt;</code>
<code>    &lt;title-component&gt;Input group&lt;/title-component&gt;</code>
<code>    &lt;div class=&quot;row&quot;&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;Groups&lt;/template&gt;</code>
<code>          &lt;lx-input class=&quot;mb-1&quot; label=&quot;Labeled&quot; placeholder=&quot;Search text...&quot;&gt;&lt;/lx-input&gt;</code>
<code>          &lt;lx-input label=&quot;Prepend&quot; type=&quot;number&quot; class=&quot;mb-1&quot; value=&quot;99.90&quot;&gt;</code>
<code>            &lt;template #prepend&gt;$&lt;/template&gt;</code>
<code>          &lt;/lx-input&gt;</code>
<code>          &lt;lx-input label=&quot;Append&quot; placeholder=&quot;Put e-mail here&quot; class=&quot;mb-1&quot;&gt;</code>
<code>            &lt;template #append&gt;@mail.com&lt;/template&gt;</code>
<code>          &lt;/lx-input&gt;</code>
<code>          &lt;lx-input label=&quot;Both&quot; placeholder=&quot;subdomain&quot; class=&quot;mb-1&quot;&gt;</code>
<code>            &lt;template #prepend&gt;domain.&lt;/template&gt;</code>
<code>            &lt;template #append&gt;.com&lt;/template&gt;</code>
<code>          &lt;/lx-input&gt;</code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;Label size&lt;/template&gt;</code>
<code>          &lt;lx-input class=&quot;mb-1&quot; label=&quot;Small&quot; labelSize=&quot;sm&quot; placeholder=&quot;Search text...&quot;&gt;&lt;/lx-input&gt;</code>
<code>          &lt;lx-input class=&quot;mb-1&quot; label=&quot;Default&quot; placeholder=&quot;Search text...&quot;&gt;&lt;/lx-input&gt;</code>
<code>          &lt;lx-input class=&quot;mb-1&quot; label=&quot;Large&quot; labelSize=&quot;lg&quot; placeholder=&quot;Search text...&quot;&gt;&lt;/lx-input&gt;</code>
<code>          &lt;lx-input class=&quot;mb-1&quot; label=&quot;Extra large&quot; labelSize=&quot;xl&quot; placeholder=&quot;Search text...&quot;&gt;&lt;/lx-input&gt;</code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>    &lt;/div&gt;</code>
<code></code>
<code>    &lt;div class=&quot;row&quot;&gt;</code>
<code>      &lt;div class=&quot;col-6&quot;&gt;</code>
<code>        &lt;lx-card&gt;</code>
<code>          &lt;template #header&gt;Search help&lt;/template&gt;</code>
<code>          &lt;lx-search-help v-model=&quot;shSelected&quot;</code>
<code>                          :fields=&quot;shFields&quot;</code>
<code>                          :items=&quot;shValues&quot;</code>
<code>                          keyField=&quot;key&quot;</code>
<code>                          text-field=&quot;value&quot; class=&quot;mb-1&quot;/&gt;</code>
<code>        &lt;/lx-card&gt;</code>
<code>      &lt;/div&gt;</code>
<code>    &lt;/div&gt;</code>
<code>  &lt;/div&gt;</code>
<code>&lt;/template&gt;</code>
<code></code>
<code>&lt;script&gt;</code>
<code>import TitleComponent from &quot;../../components/TitleComponent&quot;;</code>
<code>import LxInput from &quot;@/lib-components/lxInput&quot;;</code>
<code>import LxCard from &quot;@/lib-components/lxCard&quot;;</code>
<code>import LxSearchHelp from &quot;@/lib-components/lxSearchHelp&quot;;</code>
<code></code>
<code>export default {</code>
<code>  name: &quot;GroupInputs&quot;,</code>
<code>  components: {LxSearchHelp, LxCard, LxInput, TitleComponent},</code>
<code>  data() {</code>
<code>    return ({</code>
<code>      shValues: [</code>
<code>        {key: 'key1', value: 'Key 1'},</code>
<code>        {key: 'key2', value: 'Key 2'},</code>
<code>        {key: 'key3', value: 'Key 3'},</code>
<code>        {key: 'key4', value: 'Key 4'},</code>
<code>      ],</code>
<code>      shFields: [</code>
<code>        {key: 'key', label: 'ID'},</code>
<code>        {key: 'value', label: 'Value'},</code>
<code>      ],</code>
<code>      shSelected: '',</code>
<code>    })</code>
<code>  }</code>
<code>}</code>
<code>&lt;/script&gt;</code>
    </pre>
  </div>
</template>

<script>
import TitleComponent from "../../components/TitleComponent";
import LxInput from "@/lib-components/lxInput";
import LxCard from "@/lib-components/lxCard/lxCard";
import LxSearchHelp from "@/lib-components/lxSearchHelp";

export default {
  name: "GroupInputs",
  components: {LxSearchHelp, LxCard, LxInput, TitleComponent},
  data() {
    return ({
      shValues: [
        {key: 'key1', value: 'Key 1'},
        {key: 'key2', value: 'Key 2'},
        {key: 'key3', value: 'Key 3'},
        {key: 'key4', value: 'Key 4'},
      ],
      shFields: [
        {key: 'key', label: 'ID'},
        {key: 'value', label: 'Value'},
      ],
      shSelected: '',
    })
  }
}
</script>

<style scoped>

</style>