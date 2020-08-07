describe('WebdriverIO', () => {
  it('should access to Shadown DOM', async () => {
    const allBooks = '#allBooks'
    const aStoreLink = 'a[href*="product"]'
    
    await browser.url('http://www.kaidez.com/samples/template-shadowdom-practice/')
    await browser.pause(3000)

    const innerEl = await $(allBooks)
    await innerEl.shadow$$(aStoreLink)
    await innerEl.shadow$(aStoreLink)

    console.log(await innerEl.getValue())
  })
})