# nextjs-jsoneditor

>

[![NPM](https://img.shields.io/npm/v/nextjs-jsoneditor.svg)](https://www.npmjs.com/package/nextjs-jsoneditor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save jsoneditor
npm install --save nextjs-jsoneditor
```

## Usage
In Nextjs,add this css file in styles folder under src folder and call css file in _app.js.

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

## License

MIT © [raja-poudel](https://github.com/raja-poudel)

# nextjs-jsoneditor
