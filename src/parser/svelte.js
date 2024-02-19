import { parse } from '@babel/parser';
import { getContent } from '../utils/file';
import fastParser from './fast';

export default async function parseSvelte(filename) {
  // return ['svelte', ...(await fastParser(filename))];

  const { compile } = await import('svelte/compiler');
  const content = await getContent(filename);
  const { js } = compile(content);
  return parse(js.code, {
    sourceType: 'module',
  });
}
