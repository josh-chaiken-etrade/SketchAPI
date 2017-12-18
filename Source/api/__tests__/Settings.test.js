/* globals expect */

import { settingForKey, setSettingForKey } from '../Settings'

function madeupContextForTempScript(context) {
  if (!context.plugin) {
    // eslint-disable-next-line
    context.plugin = {
      identifier() {
        return 'temp.script'
      },
    }
  }

  return context
}

export const tests = {
  'non existing settings should return null': context => {
    expect(
      settingForKey(madeupContextForTempScript(context), 'non-existing-key')
    ).toBe(null)
  },

  'should set a boolean': context => {
    setSettingForKey(madeupContextForTempScript(context), 'false-key', false)
    expect(
      settingForKey(madeupContextForTempScript(context), 'false-key')
    ).toBe(false)

    setSettingForKey(madeupContextForTempScript(context), 'true-key', true)
    expect(settingForKey(madeupContextForTempScript(context), 'true-key')).toBe(
      true
    )
  },

  'should set a string': context => {
    setSettingForKey(madeupContextForTempScript(context), 'string-key', 'test')
    expect(
      settingForKey(madeupContextForTempScript(context), 'string-key')
    ).toBe('test')
  },

  'should set undefined': context => {
    setSettingForKey(
      madeupContextForTempScript(context),
      'undefined-key',
      undefined
    )
    expect(
      settingForKey(madeupContextForTempScript(context), 'undefined-key')
    ).toBe(undefined)
  },

  'should set object': context => {
    setSettingForKey(context, 'object-key', { a: 1 })
    expect(settingForKey(context, 'object-key')).toEqual({ a: 1 })
  },
}