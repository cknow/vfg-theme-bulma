# Vue Form Generator theme Bulma

[![NPM Version](https://img.shields.io/npm/v/@cknow/vfg-theme-bulma.svg)](https://www.npmjs.com/package/@cknow/vfg-theme-bulma)
[![Downloads](https://img.shields.io/npm/dt/@cknow/vfg-theme-bulma.svg)](https://www.npmjs.com/package/@cknow/vfg-theme-bulma)
[![MIT License](https://img.shields.io/npm/l/@cknow/vfg-theme-bulma.svg)](LICENSE)

[![Build Status](https://travis-ci.org/cknow/vfg-theme-bulma.svg?branch=master)](https://travis-ci.org/cknow/vfg-theme-bulma)
[![Build status](https://ci.appveyor.com/api/projects/status/v1baamx4fkpejjkr/branch/master?svg=true)](https://ci.appveyor.com/project/cknow/vfg-theme-bulma/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/cknow/vfg-theme-bulma/badge.svg?branch=master)](https://coveralls.io/github/cknow/vfg-theme-bulma?branch=master)

[![Code Climate](https://codeclimate.com/github/cknow/vfg-theme-bulma/badges/gpa.svg)](https://codeclimate.com/github/cknow/vfg-theme-bulma)
[![Test Coverage](https://codeclimate.com/github/cknow/vfg-theme-bulma/badges/coverage.svg)](https://codeclimate.com/github/cknow/vfg-theme-bulma/coverage)
[![Issue Count](https://codeclimate.com/github/cknow/vfg-theme-bulma/badges/issue_count.svg)](https://codeclimate.com/github/cknow/vfg-theme-bulma)

[![Dependencies Status](https://david-dm.org/cknow/vfg-theme-bulma/status.svg)](https://david-dm.org/cknow/vfg-theme-bulma)
[![devDependencies Status](https://david-dm.org/cknow/vfg-theme-bulma/dev-status.svg)](https://david-dm.org/cknow/vfg-theme-bulma?type=dev)
[![peerDependencies Status](https://david-dm.org/cknow/vfg-theme-bulma/peer-status.svg)](https://david-dm.org/cknow/vfg-theme-bulma?type=peer)

[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/cknow/vfg-theme-bulma.svg)](http://isitmaintained.com/project/cknow/vfg-theme-bulma)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/cknow/vfg-theme-bulma.svg)](http://isitmaintained.com/project/cknow/vfg-theme-bulma)
[![Gitter](https://badges.gitter.im/cknow/vfg-theme-bulma.svg)](https://gitter.im/cknow/vfg-theme-bulma?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Install

```bash
npm install --save-dev @cknow/vfg-theme-bulma
```

## Usage

> **Note:** Do not forget to add the style sheets of theme to the header of the page.

```js
import Vfg from '@cknow/vfg';
import VfgThemeBulma from '@cknow/vfg-theme-bulma';

Vue.use(Vfg, {
    theme: 'bulma'
});
Vue.use(VfgThemeBulma);
```

Component:

```html
<template>
    <vfg :model="model" :schema="schema"></vfg>
</template>

<script>
    export default {
        data() {
            return {
                model: {
                    name: 'Foo Bar',
                    email: 'foo@bar.com',
                },

                schema: [
                    {
                        // input text is default
                        label: 'Name',
                        model: 'name'
                    },
                    {
                        inputType: 'email',
                        label: 'E-mail',
                        model: 'email'
                    }
                ]
            }
        }
    }
</script>
```

Result:

```html
<div>
    <div class="field">
        <label class="label" for="name">Name:</label>
        <div class="control">
            <input class="input" type="text" id="name" value="Foo Bar">
        </div>
    </div>
    <div class="field">
        <label class="label" for="email">E-mail:</label>
        <div class="control">
            <input class="input" type="email" id="email" value="foo@bar.com">
        </div>
    </div>
</div>
```
