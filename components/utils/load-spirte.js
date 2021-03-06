// inspried by https://github.com/kisenka/svg-sprite-loader/blob/master/runtime/browser-sprite.js
// Much simplified, do make sure run this after document ready
import icons from './default-svg-list'

var svgSprite = contents => `
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="__TG_MOBILE_SVG_SPRITE_NODE__"
  style="position:absolute;width:0;height:0"
>
  <defs>
    ${contents}
  </defs>
</svg>
`

var renderSvgSprite = () => {
  var symbols = Object.keys(icons)
    .map(iconName => {
      var svgContent = icons[iconName].split('svg')[1]
      return `<symbol id=${iconName}${svgContent}symbol>`
    })
    .join('')
  return svgSprite(symbols)
}

var loadSprite = () => {
  if (!document) {
    return
  }
  var existing = document.getElementById('__TG_MOBILE_SVG_SPRITE_NODE__')
  var mountNode = document.head;
  if (!existing) {
    mountNode.insertAdjacentHTML('beforeend', renderSvgSprite())
  }
}

export default loadSprite
