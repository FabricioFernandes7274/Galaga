const nextButton = document.getElementById('nextButton');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const choiceButtons = document.getElementById('choiceButtons');
const dialogue = document.querySelector('.dialogue');
let step = 0;

const messages = [
    {
        speaker: 'Fabrício',
        text: 'Então Isa, eu menti'
    },
    {
        speaker: 'Fabrício',
        text: 'Não tem uma terceira fase'
    },
    {
        speaker: 'Fabrício',
        text: 'É apenas algo que quis te contar faz muito tempo mesmo'
    },
    {
        speaker: 'Fabrício',
        text: 'Você é a pessoa mais incrível que Deus já colocou na minha vida'
    },
    {
        speaker: 'Fabrício',
        text: 'Nunca me senti tão entendido e feliz assim na minha vida'
    },
    {
        speaker: 'Fabrício',
        text: `Isso é tudo o que sinto
O que me mantém acordado a noite
Ah que belo, você deve ter notado
Não há rimas nessa verdade 
O sentimento é tão intenso que rebate nas paredes do meu coração 
Que nem a rima e abstração são capazes de mostrar todo meu amor 

Sempre quis chegar nesse ponto
Criar coragem para falar tudo o que sinto
E querer te levar pro resto da vida
Estou disposto de tudo e mais um pouco por você 
Não posso arriscar te perder

Com todo meu amor eu faço esse pedido
Que peço de todo grande coração`
    },
    {
        speaker: 'Fabrício',
        text: 'Isabelle, aceita ser minha namorada?'
    }
];

// Exibir a primeira fala imediatamente
appendDialogue(messages[0]);
step = 1;

function appendDialogue(message) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.dataset.speaker = message.speaker;
    const nameSpan = document.createElement('strong');
    nameSpan.textContent = message.speaker;
    const textPara = document.createElement('p');
    textPara.innerHTML = message.text.replace(/\n/g, '<br>');
    bubble.appendChild(nameSpan);
    bubble.appendChild(textPara);
    dialogue.appendChild(bubble);
    bubble.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function showChoices() {
    nextButton.classList.add('hidden');
    choiceButtons.classList.remove('hidden');
}

function resetConversation() {
    dialogue.innerHTML = '';
    appendDialogue(messages[0]);
    step = 1;
    document.body.className = 'neutral';
    nextButton.textContent = 'Próxima fala';
    nextButton.classList.remove('hidden');
    choiceButtons.classList.add('hidden');
}

nextButton.addEventListener('click', () => {
    if (step < messages.length) {
        if (step === 3) {
            document.body.className = 'romantic';
        }
        appendDialogue(messages[step]);
        step += 1;
        if (step === messages.length) {
            showChoices();
        }
    } else {
        resetConversation();
    }
});

yesButton.addEventListener('click', () => {
    appendDialogue({
        speaker: 'Fabrício',
        text: 'Obrigado por aceitar meu amor, prometo cuidar de você o melhor que conseguir e ser sempre o melhor para você'
    });
    setTimeout(() => {
        appendDialogue({
            speaker: 'Fabrício',
            text: 'Independente da resposta, estarei esperando você no zap para conversarmos sobre.'
        });
        nextButton.textContent = 'Reiniciar';
        nextButton.classList.remove('hidden');
        choiceButtons.classList.add('hidden');
        step = messages.length + 2;
    }, 1500);
});

noButton.addEventListener('click', () => {
    appendDialogue({
        speaker: 'Fabrício',
        text: 'Você realmente não quer? Ou apenas precisa de mais tempo e ainda não está pronta para mais um relacionamento'
    });
    setTimeout(() => {
        appendDialogue({
            speaker: 'Fabrício',
            text: 'Independente da resposta, estarei esperando você no zap para conversarmos sobre.'
        });
        nextButton.textContent = 'Reiniciar';
        nextButton.classList.remove('hidden');
        choiceButtons.classList.add('hidden');
        step = messages.length + 2;
    }, 1500);
});
