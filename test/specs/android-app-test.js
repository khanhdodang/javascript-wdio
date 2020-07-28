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
    
    for (let i = 0; i < 4; i++) {
      await browser.touchAction([
       { action: 'press', x: 200, y: 1200 },
       { action: 'moveTo', x: 200, y: 300},
        'release'
      ])
    }

    await browser.pause(2000)
    element = await browser.$('//android.widget.TextView[@content-desc="WebView"]')
    await element.click()
	  await browser.pause(2000)
	
    let contexts = await browser.getContexts()
    console.log('contexts', contexts)

   	await  browser.switchContext(contexts[1])
  })
})
