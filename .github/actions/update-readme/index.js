const core = require('@actions/core');
const fs = require('fs');
const memeMaker = require('meme-maker');

//const test_results = true;
const test_results = core.getInput('resultado_tests');
const output_name = (Math.random() + 1).toString(36).substring(7) + '.jpg';
const meme_image = (test_results === 'success' ? '.github/actions/update-readme/img/good/' : '.github/actions/update-readme/img/bad/') + (Math.floor(Math.random() * 3) + 1) + '.jpg';

let options = {
  image: meme_image,
  outfile: '.github/actions/update-readme/output/' + output_name, 
  topText: test_results === 'success' ? core.getInput('frase_positiva') : core.getInput('frase_negativa'), 
  bottomText: 'Y LO SABES',
  fontSize: 20
}

memeMaker(options, function(err) {
  if (err) throw err;
  console.log('Image saved: ' + options.outfile)
  fs.appendFileSync('README.md', `![alt text](https://github.com/iferrer20/github-actions/blob/github_action_readme/.github/actions/update-readme/output/${output_name}?raw=true)\n`);
  core.setOutput('exit-status', 'Meme añadido al readme');
});

