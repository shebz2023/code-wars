class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  reverseList(){
    let current = this.head
    let prev = null
    while(current){
      let temp = current.next
      current.next = prev
      prev = temp
      console.log(current.value)
    }
  }
}
const LinkedList = new List();
LinkedList.append(10);
LinkedList.append(11);
LinkedList.append(12);
LinkedList.append(13);
LinkedList.append(14);
LinkedList.printList();
