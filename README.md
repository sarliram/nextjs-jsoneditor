# nextjs-jsoneditor

>

[![NPM](https://img.shields.io/npm/v/nextjs-jsoneditor.svg)](https://www.npmjs.com/package/nextjs-jsoneditor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save jsoneditor
npm install --save nextjs-jsoneditor
```

## Usage
In Nextjs, add this css file in styles folder under src folder and call css file in _app.js.

https://drive.google.com/file/d/18xVG9kJdbbN8vHrr2Jb5sYXU_rdeDrfn/view?usp=sharing

_app.js
```jsx
import './nextjs-jsoneditor.css' //download this file and use as global css in nextjs

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```


index.js
```jsx
import React, { Component } from 'react'
const JsonEditor = dynamic(
  {
    loader: () => import("nextjs-jsoneditor").then((mod) => mod.JsonEditor),
    render: (props, JsonEditor) => {
      return JsonEditor;
    },
  },
  {
    ssr: false,
  }
);

class Example extends Component {
  render() {
    return <JsonEditor value={{
      name: 'John Doe',
    }}/>
  }
}
```


## Update Editor options

You can also update editor options (see availables options), adding new props to the component:

```jsx
class Example extends Component {
  render() {
    return (
      <JsonEditor
        // Disable search input
        search={false}
        // ... 
        value={{ name: 'John Doe' }}
      />
    );
  }
}
```

## Props options

The JSONEditor component accepts the following props:

* `value` (object, optional): The initial JSON object to be edited.
* `mode` (string, optional, default: 'tree'): Set the editor mode.
* `name` (string, optional, default: undefined): Initial field name for the root node.
* `schema` (object, optional): Validate the JSON object against a JSON schema.
* `schemaRefs` (object, optional): Schemas that are referenced using the $ref property.
* `onChange` (function, optional): Set a callback function triggered when json in the JSONEditor change. Will only be triggered on changes made by the user.
* `onError` (function, optional): Set a callback function triggered when an error occurs. Invoked with the error as first argument. The callback is only invoked for errors triggered by a users action, like switching from code mode to tree mode or clicking the Format button whilst the editor doesn't contain valid JSON.
* `onModeChange (function, optional): Set a callback function triggered right after the mode is changed by the user.
* `ace` (object, optional): Provide a version of the Ace editor. Only applicable when mode is code.
* `ajv` (object, optional): Provide a instance of ajv, the library used for JSON schema validation.
* `theme` (string, optional): Set the Ace editor theme, uses included 'ace/theme/jsoneditor' by default.
* `history` (boolean, optional, default: false): Enables history, adds a button Undo and Redo to the menu of the JSONEditor. Only applicable when mode is 'tree' or 'form'.
* `navigationBar` (boolean, optional, default: true): Adds navigation bar to the menu the navigation bar visualize the current position on the tree structure as well as allows * * `breadcrumbs` navigation.
* `statusBar` (boolean, optional, default: true): Adds status bar to the buttom of the editor the status bar shows the cursor position and a count of the selected characters. Only 
* `applicabl` when mode is 'code' or 'text'.
* `search` (boolean, optional, default: true): Enables a search box in the upper right corner of the JSONEditor.
* `allowedModes` (array of strings, optional): Create a box in the editor menu where the user can switch between the specified modes.
* `tag` (string or PropTypes.elementType, optional, default: 'div'): Html element, or react element to render.
* `htmlElementProps` (object, optional): Html element custom props.
* `innerRef` (function, optional): Callback to get html element reference.
* `sortObjectKeys` (boolean, optional, default: false): If true, object keys in 'tree', 'view' or 'form' mode list be listed alphabetically instead by their insertion order.

### Example API Events

* `onChange`:
```jsx
 <JsonEditor
      onChange={(e) => {
        console.log('onChange', e);
      }}
  />
```
* `onError`
* `onModeChange`
* `onEditable`

## Default JSONEditor options

```jsx
Editor.defaultProps = {
  tag: 'div',
  mode: modes.tree,
  history: false,
  search: true,
  navigationBar: true,
  statusBar: true,
  sortObjectKeys: false
}
```

## License

MIT © [raja-poudel](https://github.com/raja-poudel)

# nextjs-jsoneditor
