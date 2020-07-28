describe('iOS App sample', () => {
  it('should switch to the contexts', async () => {
    let contexts = await browser.getContexts()
    console.log('contexts', contexts)

   	await  browser.switchContext(contexts[1])

    let element = await $('.input')
    await element.setValue('test hybrid app')

    element = await $('//option[@value="1"]')
    await element.click()

   	element = await $('#addButton')
   	await element.click()
    
    element = await $('.removeButton')
    await element.click()
  })
})
