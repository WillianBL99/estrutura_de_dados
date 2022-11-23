import readline from 'readline';
import BubbleSort from './EDAComJs/ordenacaoEBusca/bubbleSort/bubbleSort.js';
import CountingSort from './EDAComJs/ordenacaoEBusca/countingSort/countingSort.js';
import InsertionSort from './EDAComJs/ordenacaoEBusca/insertionSort/insertionSort.js';
import MergeSort from './EDAComJs/ordenacaoEBusca/mergeSort/mergeSort.js';
import QuickSort from './EDAComJs/ordenacaoEBusca/quickSort/quickSort.js';
import SelectionSort from './EDAComJs/ordenacaoEBusca/selectionSort/selectionSort.js';
import { isInOrder } from './isInOrder.js';

const defaultArray = [];

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const QTD_VALUES = 10e6;
for (let i = 0; i < QTD_VALUES; i++) {
  const randomValue = Math.floor(Math.random() * QTD_VALUES);
  defaultArray.push(randomValue);
}

const chapthers = [
  {
    title: 'Algoritmos de ordenação e de busca',
    subChapther: [
      {
        title: 'BubbleSort',
        subChapther: [
          {
            title: 'BubbleSort',
            fun: (array) => {
              return BubbleSort.bubbleSort(array);
            },
          },
          {
            title: 'BestBubbleSort',
            fun: (array) => {
              return BubbleSort.bestBubbleSort(array);
            },
          },
        ],
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
      {
        title: 'MergeSort',
        fun: (array) => {
          return MergeSort.mergeSort(array);
        },
      },
      {
        title: 'QuickSort',
        fun: (array) => {
          return QuickSort.quickSort(array);
        },
      },
      {
        title: 'CountingSort',
        subChapther: [
          {
            title: 'CountingSort',
            fun: (array) => {
              return CountingSort.countingSort(array);
            },
          },
          {
            title: 'CountingSortWithHashtable',
            fun: (array) => {
              return CountingSort.countingSortHash(array);
            },
          },
        ],
      },
    ],
  },
];

while (await menu(chapthers)) {
  console.log('\n---------------------');
}

async function getAnswer(question) {
  return await new Promise((resolve) => {
    reader.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function handleOption(array, option) {
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
    console.log(
      isInOrder(orderedArray)
        ? `Ordered ${orderedArray.length}`
        : "Isn't Ordered"
    );
    return;
  }

  await menu(choice.subChapther);
  return true;
}

async function menu(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i].title}`);
  }

  const option = await getAnswer('\nEscolha uma opção: ');
  return await handleOption(array, option);
}
