# 4 Vuepress components

- `<imgHover>`
- `<singleImg>`
- `<imgSet>`
- `<BackTop />`

## `<imgHover>`

props:

- default: `string`, img path for page loading
- enter: `string`, img path for mouse hover

## `<singleImg>`

Image lightbox, or img modal, for single image

props:

- link: `string`, img path when page loads

## `<imgSet>`

display two images vertically, click on each to show it's lightbox or modal

props:

- link1: `string`, img path for the first img
- link2: `string`, img path for the 2nd img


## `<BackTop />`

add this to the bottom of an `.md` file, no pros, button color used the default settings

if you got `window (document) is not defined` problem use `mounted()` hook instead of the `created()` one
