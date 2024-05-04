//chat-gpt help
/*
import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image'; // Corrigido o import para qr

const questions = [
  {
    type: 'input',
    name: 'url',
    message: 'Qual URL você quer transformar em QR code?',
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log('Respostas do usuário:');
    console.log(answers);

    // Corrigido para usar answers.url em vez de answers
    var qr_svg = qr.image(`${answers.url}`, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream('i_love_qr.svg')); // Corrigido para usar fs.createWriteStream diretamente

    // Corrigido para usar answers.url em vez de answers
    var svg_string = qr.imageSync(`${answers.url}`, { type: 'svg' });
  })
  .catch((error) => {
    console.error('Erro ao fazer perguntas:', error);
  });

  */
 

 import inquirer from 'inquirer';
 import fs from 'fs';
 import qr from 'qr-image'; 


 //inqerer etsilo
 inquirer
  .prompt([
    {
        "message": "Qual a url vc quer transformar em qr-code?",
        "name": "URL",
        "type": "input",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    //qr its a module that needs to be import in the top
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('menssagem2.png'));

    fs.writeFile("messege.txt", url, (err) => {
        if(err){
            throw err; 
        } else{
            console.log("The file has been created!");
        }
    });
 
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(`Have a error in the process, the error: ${error}`);
    } else {
      console.log("All work out");
    }
  });
