<a name="Saloimex"></a>

## Saloimex
**Kind**: global class  

* [Saloimex](#Saloimex)
    * [new Saloimex()](#new_Saloimex_new)
    * [.save(data)](#Saloimex+save) ⇒ <code>object</code>
    * [.load()](#Saloimex+load) ⇒ <code>object</code>
    * [.export(data)](#Saloimex+export) ⇒ <code>string</code>
    * [.import(string)](#Saloimex+import) ⇒ <code>object</code>

<a name="new_Saloimex_new"></a>

### new Saloimex()
Saloimex

<a name="Saloimex+save"></a>

### saloimex.save(data) ⇒ <code>object</code>
Save stringified JSON to localStorage.

**Kind**: instance method of [<code>Saloimex</code>](#Saloimex)  
**Returns**: <code>object</code> - data - The passed data.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | The JSON data. |

<a name="Saloimex+load"></a>

### saloimex.load() ⇒ <code>object</code>
Load stringified JSON from localStorage.

**Kind**: instance method of [<code>Saloimex</code>](#Saloimex)  
**Returns**: <code>object</code> - data - The JSON data.  
<a name="Saloimex+export"></a>

### saloimex.export(data) ⇒ <code>string</code>
Export JSON to base64.

**Kind**: instance method of [<code>Saloimex</code>](#Saloimex)  
**Returns**: <code>string</code> - result - The base64 string.  
**Todo**

- [ ] [] add options for export without saving


| Param | Type | Description |
| --- | --- | --- |
| data | <code>data</code> | The JSON data. |

<a name="Saloimex+import"></a>

### saloimex.import(string) ⇒ <code>object</code>
Import base64 string to JSON.

**Kind**: instance method of [<code>Saloimex</code>](#Saloimex)  
**Returns**: <code>object</code> - data - The JSON data.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The base64 string. |

