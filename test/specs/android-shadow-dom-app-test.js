describe('Android App Shadow DOM sample', () => {
  it('should switch to the contexts', async () => {
    let element = await browser.$('//android.webkit.WebView')
    let context = await browser.getContext()
    let contexts = await browser.getContexts()
    console.log('contexts', contexts)

   	await  browser.switchContext(contexts[1])
   	element = await browser.$('//mwc-switch[1]')
    let innerEl = await element.shadow$$('#basic-switch')
    // Perform click action on shadow DOM
    await innerEl[0].click()
    
    element = await browser.$('//mwc-switch[1]')
    innerEl = await element.shadow$$('#basic-switch')
    await innerEl[0].click()


  })
})
