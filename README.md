An example project the uses [rollup.js](https://rollupjs.org) to bundle modules for MarkLogic 8+.

```shell
git clone https://github.com/jmakeig/marklogic-bundler.git && cd marklogic-bundler
npm install
$(npm bin)/rollup -c
cat build/lib.js
```