## Polymer Labs

#### Load browserified modules
```bash
npm install --save web-components-lab
```

```html
<script src="node_modules/wc-polyfills/dist/polyfills.bundle.js"></script>
```

#### Lazy load polymer
```javascript
var polymerStarter = new WcPolyfills.PolymerStarter();

document.addEventListener('DOMContentLoaded', function () {
	polymerStarter.setDom('shadow');
	polymerStarter.setElements([
		'elements/my-awesome-element.html',
		'elements/rock-in-element.html'
	]);
	polymerStarter.load();
});
```
