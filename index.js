import readline from 'readline';
import BubbleSort from './EDAComJs/ordenacaoEBusca/bubbleSort/bubbleSort.js';
import SelectionSort from './EDAComJs/ordenacaoEBusca/selectionSort/selectionSort.js';

const defaultArray = [5, 4, 3, 2, 1, 10, 9];

const chapthers = [
  {
    title: 'Algoritmos de ordenação e de busca',
    subChapther: [
      {
        title: 'BubbleSort',
        fun: (array) => {
          return BubbleSort.bubbleSort(array);
        },
      },
      {
        title: 'SelectionSort',
        fun: (array) => {
          return SelectionSort.selectionSort(array);
        },
      },
    ],
  },
];

menu(chapthers);

async function getAnswer(question) {
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return await new Promise((resolve) => {
    reader.question(question, (answer) => {
      reader.close();
      resolve(answer);
    });
  });
}

function handleOption(array, option) {
  if (option > array.length) {
    console.log('Opção inválida, tenteNovamente');
  }

  const choice = array[option - 1];
  if (choice?.fun) {
    console.log(choice.fun(defaultArray));
    return;
  }

  menu(choice.subChapther);
}

async function menu(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i].title}`);
  }

  const option = await getAnswer('Escolha uma opção: ');
  handleOption(array, option);
}
