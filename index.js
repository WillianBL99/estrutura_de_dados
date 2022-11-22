import readline from 'readline';
import BubbleSort from './EDAComJs/ordenacaoEBusca/bubbleSort/bubbleSort.js';
import InsertionSort from './EDAComJs/ordenacaoEBusca/insertionSort/insertionSort.js';
import SelectionSort from './EDAComJs/ordenacaoEBusca/selectionSort/selectionSort.js';
import { isInOrder } from './isInOrder.js';

const defaultArray = [];

for (let i = 0; i < 100000; i++) {
  const randomValue = Math.floor(Math.random() * 1000);
  defaultArray.push(randomValue);
}

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
      {
        title: 'InsertionSort',
        fun: (array) => {
          return InsertionSort.insertionSort(array);
        },
      },
    ],
  },
];

while (await menu(chapthers)) {
  console.log('\n---------------------');
}

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
  if (option === 0) {
    return false;
  }

  if (option > array.length || option < 0) {
    console.log('Opção inválida, tenteNovamente');
    return true;
  }

  const choice = array[option - 1];
  if (choice?.fun) {
    console.time('toOrder');
    const orderedArray = choice.fun([...defaultArray]);
    console.timeEnd('toOrder');
    console.log(isInOrder(orderedArray) ? 'Ordered' : "Isn't Ordered");
    return;
  }

  menu(choice.subChapther);
  return true;
}

async function menu(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i].title}`);
  }

  const option = await getAnswer('\nEscolha uma opção: ');
  return handleOption(array, option);
}
