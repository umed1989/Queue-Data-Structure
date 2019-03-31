//Queues are the data structures with the principle First In First Out
class Queue {
  constructor() {
    this.items = []; //the array of items which holds the items
  }
  //methods and properties
  //add the item
  enqueue(item) {
    this.items.push(item);
  }
  //remove the first item which was added
  dequeue() {
    return this.items.shift();
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

const q = new Queue();
q.enqueue("Medina");
q.enqueue("Robert");
q.enqueue("Daniel");
console.log(q.print());
