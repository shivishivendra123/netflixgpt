import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',  dangerouslyAllowBrowser: true// This is the default and can be omitted
});

export default openai;