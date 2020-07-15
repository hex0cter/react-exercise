fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My 1 test', async t => {
    // Test code
    await t.navigateTo("https://danielhan.dev/")
});

test('My 2 test', async t => {
    // Test code
    await t.navigateTo("https://danielhan.dev/")
});
