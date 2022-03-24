/* JS120 - Object Oriented JavaScript > Object Creation Patterns > 3. Circular Queue

Circular Queue

A circular queue is a collection of objects stored in a buffer that is treated as though it is connected end-to-end in a circle. When an object is added to this circular queue, it is added to the position that immediately follows the most recently added object, while removing an object always removes the object that has been in the queue the longest.

This works as long as there are empty spots in the buffer. If the buffer becomes full, adding a new object to the queue requires getting rid of an existing object; with a circular queue, the object that has been in the queue the longest is discarded and replaced by the new object.

Assuming we have a circular queue with room for 3 objects, the circular queue looks and acts like this:

P1 	P2 	P3 	Comments
			      All positions are initially empty
1 		      Add 1 to the queue
1 	2 		  Add 2 to the queue
	  2 		  Remove oldest item from the queue (1)
	  2 	3   Add 3 to the queue
4 	2 	3 	Add 4 to the queue, queue is now full
4 		  3 	Remove oldest item from the queue (2)
4 	5 	3 	Add 5 to the queue, queue is full again
4 	5 	6 	Add 6 to the queue, replaces oldest element (3)
7 	5 	6 	Add 7 to the queue, replaces oldest element (4)
7 		  6 	Remove oldest item from the queue (5)
7 			    Remove oldest item from the queue (6)
			      Remove oldest item from the queue (7)
			      Remove non-existent item from the queue (nil)

Your task is to write a `CircularQueue` class that implements a circular queue for arbitrary objects. The class should obtain the buffer size with an argument provided to the constructor, and should provide the following methods:

- `enqueue` to add an object to the queue
- `dequeue` to remove (and return) the oldest object in the queue. It should return `null` if the queue is empty.

You may assume that none of the values stored in the queue are `null` (however, `null` may be used to designate empty spots in the buffer).

Examples: */

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);

/* The above code should log true 15 times.

Approach/Algorithm

See the Wiki page https://en.wikipedia.org/wiki/Circular_bufferif) you need more information about circular queues.

Solution
*/

class CircularQueue {
  constructor(size) {
    this.buffer = new Array(size).fill(null);
    this.nextPosition = 0;
    this.oldestPosition = 0;
  }

  enqueue(object) {
    if (this.buffer[this.nextPosition] !== null) {
      this.oldestPosition = this.increment(this.nextPosition);
    }
    this.buffer[this.nextPosition] = object;
    this.nextPosition = this.increment(this.nextPosition);
  }

  dequeue() {
    let value = this.buffer[this.oldestPosition];
    this.buffer[this.oldestPosition] = null;
    if (value !== null) {
      this.oldestPosition = this.increment(this.oldestPosition);
    }
    return value;
  }

  increment(position) {
    return (position + 1) % this.buffer.length;
  }
}

/* Discussion

If you read the Wiki page on circular queues, it's likely that your solution resembles ours in terms of mechanics: we have a buffer with room for N objects, a pointer to the oldest object currently in the buffer, and a pointer to the next spot where a new object will be inserted. We also use nulls to indicate empty buffer positions. All 3 of these items are initialized in constructor method.

With this type of structure, our two pointers need to "wrap around" from the final position to position 0. This is accomplished with the increment method which simply increments the position pointer, and wraps around to 0 when necessary.

The enqueue method first checks whether it will be adding the object to an empty buffer position or replacing an object in an occupied position. If the position is occupied, we need to update the oldestPosition property since we will be replacing the oldest object. Finally, we store the object in the appropriate position, and increment the nextPosition property.

Note that enqueue needs to test for null, not just falseness. This is because the queue may contain other values that evaluate to false like 0, "" and false.

dequeue starts by extracting the oldest object, and replacing it with null to indicate that the position is no longer occupied. Then we update the oldestPositiion property, and return the value that was originally in that position.

The use of if (value !== null) in dequeue is necessary to prevent problems with calling dequeue on an empty queue, and subsequently adding objects to that queue. If you don't check for the null value, the two properties get out of sync and cause problems.
Further Exploration

Phew. That's a lot of work, but it's a perfectly acceptable solution to this exercise. However, there is a simpler solution that uses an Array, and the push and shift methods. See if you can find a solution that does this. */

/* Emma Story */
class CircularQueue {
  constructor(max) {
    this.buffer = [];
    this.max = max;
  }

  enqueue(item) {
    this.buffer.push(item);
    if (this.buffer.length > this.max) this.buffer.shift();
  }

  dequeue() {
    return this.buffer.shift() || null;
  }
}

/*  Bob Rodes

I started with trying to work out a solution involving pointers to the oldest item and position of the next item. Fortunately, it was late at night, and I decided to sleep on it. In the morning, a simpler solution occurred to me using an array and push and shift. So, I guess I did my further exploration (and, it would seem, caught up with practically everyone else who has posted a solution) in my sleep! */

class CircularQueue {
  #queue;
  #queueSize;

  constructor(size) {
    this.#queue = [];
    this.#queueSize = size;
  }

  enqueue(val) {
    if (this.#queue.length === this.#queueSize) {
      this.#queue.shift();
    }

    this.#queue.push(val);
  }

  dequeue(val) {
    return this.#queue.length === 0 ? null : this.#queue.shift();
  }
}

/* The point is that the first value on the array will always be the oldest one, if you're using push. So, when you enqueue a value, all you need to do is check whether the array is full, shift the oldest item off the front if it is, and push the enqueued item onto the array. With dequeue you just check whether the array is empty first, return null if it is, and if it isn't,shift the oldest item off and return it.

I also used the new # notation to make properties private where they shouldn't be visible to the creator of the instance. */