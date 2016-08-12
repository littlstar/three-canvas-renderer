
const test = require('ava')
const three = require('three')
const canvas = require('./')

test('adds RenderableObject & CanvasRenderer', t => {
  canvas(three)
  t.truthy(three.RenderableObject)
  t.truthy(three.CanvasRenderer)
})
