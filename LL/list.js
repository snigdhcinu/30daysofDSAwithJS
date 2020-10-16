	/*
		size of the list
		append()
		insert() -> to the beginning
		remove() delete an element
		clear() -> remove current elements
		toString() -> display the elements of the list
		getElements() -> display value of current element indicated by this.pos
		front
		end
		next() -> move fwd from one element to another
		prev() -> move bwd from one element to another
		moveTo(n) -> move to nth position in list.
	*/


	function list() {
			this.listSize = 0;
			this.arr = [];
			this.pos = 0;
			this.clear = clear;
			this.find = find;
			this.toString = toString;
			this.append = append;
			this.insert = insert;
			this.remove = remove;
			this.clear = clear;
			this.next = next;
			this.prev = prev;
			this.length = length;
			// this.contains = contains;
			this.getElement = getElement;


		// Append an item 
		function append(item){
			this.arr[this.listSize] = item;
			this.listSize+=1;
			return `${item} successfully added to the list`
		}

		// Find an item
		function find(item){
			// search the item
			for(let i = 0;i < this.arr.length; i++){
				if(this.arr[i] == item)
					return i;
			}
			return -1;
		}

		// Remove and item
		function remove(item){
			let pos = this.find(item);
			if(i < 0){
				return 'Item not found'
			}
			else{
				this.arr.splice(index,1);
				this.listSize -= 1;
				return `${item} has been successfully deleted from the list`
			}
		}

		// Length of list
		function length(){
			return this.listSize;
			// return this.arr.length
		}

		// Display the list
		function toString(){
			return this.arr;
		}

		// Insert element after specific item
		function insert(element,item){
			let pos = this.find(item);
			if(pos >= 0){
				this.arr.splice(pos+1,1,element);
				this.listSize += 1;
				return `${element} has been added to the list before ${item}`
			}
			else{
				return `${item} was not found in the list`;
			}
		}

		// Clear the list of all its elements
		function clear(){
			delete this.arr;
			this.arr = [];
			this.listSize = 0;
			this.pos = 0;
		}

		// Traversing the list, note this is list, not array

			// Move pointer to the front of the list
			function front(){
				this.pos = 0;
			}

			// Move pointer to the end of the list
			function end(){
				this.pos = this.listSize - 1;
			}

			// Move pointer to the previous element in the list
			function prev(){
				if(this.pos > 0){
					this.pos -= 1;
				}
				else{
					return "Already in front of the list !!"
				}
			}

			// Move pointer to next element in the list
			function next(){
				if(this.pos < this.listSize){
					this.pos += 1;
				}
				else{
					return "Already in the end of the list !!"
				}
			}

			// Display the element denoted by the pointer
			function getElement(){
				return this.arr[this.pos];
			}



	}

let books = new list();

console.log(books.toString())
books.append('hogwarts-secret');
books.append('voldemort-restoration')
books.append('docs-on-hunger-games')
books.append('dragon-tales')

