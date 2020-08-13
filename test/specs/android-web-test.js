describe('WebdriverIO', () => {
  it('should access to Shadown DOM', async () => {
    await browser.url('https://material-components.github.io/material-components-web-components/demos/switch.html')
    await browser.pause(3000)

    element = await browser.$('//mwc-switch[1]')
    let innerEl = await element.shadow$$('#basic-switch')
    // Perform click action on shadow DOM
    await innerEl[0].click()
    
    element = await browser.$('//mwc-switch[1]')
    innerEl = await element.shadow$$('#basic-switch')
    await innerEl[0].click()
  })
})
