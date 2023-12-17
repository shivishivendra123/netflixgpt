import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',  dangerouslyAllowBrowser: true// This is the default and can be omitted
});

export default openai;