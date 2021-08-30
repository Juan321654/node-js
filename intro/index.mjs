import { readFile, writeFile } from 'fs/promises';
// console.log(import.meta.url) //file:///C:/Users/Sir%20XtC/Documents/AA-coding-my-projects/frontendmasters/intro_to_node/index.mjs


let template = await readFile(new URL('template.html', import.meta.url), 'utf-8');

const data = {
  title: 'Learn Node.js',
  body: 'This is the body of the page',
}

for (const [k,v] of Object.entries(data)) {
  template = template.replace(`{${k}}`, v);
}

await writeFile('index.html', template);