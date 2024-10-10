import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({input, output});

let opcao_escolhida, invalido, nome_do_heroi, xp_heroi, level_heroi;

// exibi menu da aplicação e classifica o nível do herói caso a primeira opção for escolhida e encerrar a aplicação quando a segunda opção for escolhida
do{
    console.log("==== Hero Level Classifier ==== \n");
    opcao_escolhida = parseInt(await rl.question('Escolha uma opção:\n 1 - Iniciar nova classificação de herói\n 2 - Encerrar aplicação\n '));
    invalido = 0;

    switch(opcao_escolhida){
        case 1 :
            nome_do_heroi = await rl.question('Qual o nome do seu herói ? \n');
            xp_heroi = parseInt(await rl.question('Quantos pontos de experiência(XP) seu herói possui ? \n'));

            if(xp_heroi <= 1000){
                level_heroi = 'Ferro';
            }else if (xp_heroi >= 1001 && xp_heroi <= 2000){
                level_heroi = 'Bronze';
            }
            else if (xp_heroi >= 2001 && xp_heroi <= 5000){
                level_heroi = 'Prata';
            }
            else if (xp_heroi >= 5001 && xp_heroi <= 7000){
                level_heroi = 'Ouro';
            }
            else if (xp_heroi >= 7001 && xp_heroi <= 8000){
                level_heroi = 'Platina';
            }
            else if (xp_heroi >= 8001 && xp_heroi <= 9000){
                level_heroi = 'Ascendente';
            }
            else if (xp_heroi >= 9001 && xp_heroi <= 10000){
                level_heroi = 'Imortal';
            }
            else{
                level_heroi= 'Radiante';
            }

            console.log(`\nO Herói de nome ${nome_do_heroi} está no nível de ${level_heroi}\n`);
            break;
        case 2 :
            process.exit(0);
        default:
            console.log('Opção inválida!');
            invalido = 1;
            break;
    }

}while(!invalido)

rl.close();
