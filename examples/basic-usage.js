const { createPipeline, steps, utils } = require('../src');

async function main() {
  console.log('--- Starting Verification ---');

  // 1. Create a pipeline
  const pipeline = createPipeline([
    // Step 1: Validate size (should pass)
    steps.validateSize(1024),
    
    // Step 2: Rename
    steps.rename(name => 'verified_' + name),
    
    // Step 3: Mock Convert
    steps.convertTo('json'),
    
    // Step 4: Custom inline step to hash content
    async (context) => {
      const hash = await utils.hashFile(context.content);
      return { hash };
    }
  ]);

  // 2. Define input context
  const initialContext = {
    fileName: 'test.txt',
    fileSize: 100,
    content: 'This is some test content for verification.'
  };

  console.log('Input Context:', initialContext);

  try {
    // 3. Execute
    const result = await pipeline(initialContext);
    console.log('Pipeline Result:', result);

    // 4. Assertions (manual)
    if (result.fileName !== 'verified_test.json') throw new Error('Filename mismatch');
    if (result.format !== 'json') throw new Error('Format mismatch');
    if (!result.hash) throw new Error('Hash missing');

    console.log('--- Verification PASSED ---');
  } catch (err) {
    console.error('--- Verification FAILED ---', err);
    process.exit(1);
  }
}

main();
