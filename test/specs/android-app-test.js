describe('Android App sample', () => {
  it('should switch to the contexts', async () => {
    await browser.touchAction([
      { action: 'press', x: 400, y: 800 },
      { action: 'moveTo', x: 400, y: 400},
      'release'
    ])

    await browser.pause(2000)
    element = await browser.$('//android.widget.TextView[@content-desc="Views"]')
    await element.click()
    
    await browser.pause(2000)
    
    for (let i = 0; i < 8; i++) {
      await browser.touchAction([
       { action: 'press', x: 200, y: 900 },
       { action: 'moveTo', x: 200, y: 300},
        'release'
      ])
    }

    await browser.pause(2000)
    element = await browser.$('//android.widget.TextView[@content-desc="WebView"]')
    await element.waitForExist({ timeout: 5000 })
    await browser.waitUntil(
      async () => await element.getText() == 'WebView', {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s'
      }
    )
    await element.click()
	  await browser.pause(2000)
	
    let contexts = await browser.getContexts()
    console.log('contexts', contexts)

   	await  browser.switchContext(contexts[1])
  })
})
