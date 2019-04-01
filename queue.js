//Queues are the data structures with the principle First In First Out
class Queue {
  constructor() {
    this.items = []; //the array of items which holds the items
  }
  //methods and properties
  //add the item
  add(item) {
    this.items.unshift(item);
  }
  //remove the first item which was added
  remove() {
    return this.items.shift();
  }
  //show the last item
  peek() {
    return this.items[this.items.length - 1];
  }
  //show the first item in the Queue
  front() {
    return this.items[0];
  }
  //show is the Queue is empty or not
  isEmpty() {
    return this.items.length == 0;
  }
  //show the size of the Queue
  size() {
    return this.items.length;
  }
  //show the items inside the  Queue
  print() {
    console.log(this.items);
  }
}

//creating 2 new Queues
const firstQueue = new Queue();
const secondQueue = new Queue();

//and defining the function which will take an inputs from the 2 new Queues and create additional Queue
function wave(sourceOne, sourceTwo) {
  //new Queue
  const thirdQueue = new Queue();
  //Go to the end of Queue One and Two
  while (sourceOne.peek() || sourceTwo.peek()) {
    //take the last item from the first Queue
    if (sourceOne.peek()) {
      //and add it to the new Queue
      thirdQueue.add(sourceOne.remove());
    }
    //same logic above
    if (sourceTwo.peek()) {
      thirdQueue.add(sourceTwo.remove());
    }
  }

  return thirdQueue;
}
