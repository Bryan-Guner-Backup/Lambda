# https://piazza.com/class/j63w1pdyopf7kj?cid=93
# https://youtu.be/tg4JEUsYKSM

# Original solution that leverages our homebrew doubly-linked list:
"""Our LRUCache class keeps references to the max limit of nodes it
can hold, the current number of nodes it is holding, a doubly-linked
list that holds the nodes in the correct order, as well as a storage
dictionary for easy access to every node stored in our LRU cache."""


class LRUCache:
    def __init__(self, limit=10):
        self.limit = limit
        self.size = 0
        self.list = List()
        self.storage = {}

    """Retrieves the value of the node given a key. Moves the
  retrieved node to the end of the List. Should be an
  O(1) operation."""

    def get(self, key):
        # check that the key exists in our cache
        if key in self.storage:
            # if so, access the node, return its value, and move the node to the tail of the List
            node = self.storage[key]
            self.list.move_to_end(node)
            return node.val[1]
        else:
            return None

    """Sets the given key-value pair as the new tail of the List,
  as well as adding it to the storage dict. If the List is already
  at its limit, the head of the List will need to be evicted before
  the new key-value pair is added. Lastly, if the key already exists
  in the List, its value should be updated, and then the updated pair
  should be moved to the end of the List. Should be an O(1)
  operation."""

    def set(self, key, val):
        # first, handle the case where we need to overwrite an already-existing node
        if key in self.storage:
            node = self.storage[key]
            node.val = (key, val)
            self.list.move_to_end(node)
            return
        # handle the case where our list is already full
        if self.size == self.limit:
            del self.storage[self.list.head.val[0]]
            self.list.shift()
            self.size -= 1
        # now we can add the newest key-value pair
        self.list.add_to_tail((key, val))
        self.storage[key] = self.list.tail
        self.size += 1


"""***********Doubly-Linked List Implementation***********"""
"""ListNode class that comprises a single node in the List"""


class ListNode:
    def __init__(self, val, prev=None, next=None):
        self.prev = prev
        self.val = val
        self.next = next

    """Inserts a new node as this node's next node"""

    def insert_after(self, val):
        current_next = self.next
        self.next = ListNode(val, self, current_next)
        if current_next:
            current_next.prev = self.next

    """Inserts a new node as this node's previous node"""

    def insert_before(self, val):
        current_prev = self.prev
        self.prev = ListNode(val, current_prev, self)
        if current_prev:
            current_prev.next = self.prev

    """Deletes this node from the List"""

    def delete(self):
        if self.prev:
            self.prev.next = self.next
        if self.next:
            self.next.prev = self.prev


"""Doubly-linked List class"""


class List:
    def __init__(self, node=None):
        self.head = node
        self.tail = node.next if node else None

    """Adds the given value as the new head of the List"""

    def add_to_head(self, val):
        if not self.head:
            self.head = ListNode(val, None, self.tail)
        elif not self.tail:
            self.tail = self.head
            self.head = ListNode(val, None, self.tail)
            self.tail.prev = self.head
        else:
            self.head = ListNode(val, None, self.head)
            self.head.next.prev = self.head

    """Removes the head of the List and returns its value"""

    def shift(self):
        if not self.head:
            if not self.tail:
                return None
            return self.remove_from_tail()
        else:
            current_head = self.head
            self.head = self.head.next
            self.head.prev = None
            return current_head.val

    """Adds the given value as the new tail of the List"""

    def add_to_tail(self, val):
        if not self.tail:
            self.tail = ListNode(val, self.head, None)
        elif not self.head:
            self.head = self.tail
            self.tail = ListNode(val, self.head, None)
            self.head.next = self.tail
        else:
            self.tail = ListNode(val, self.tail, None)
            self.tail.prev.next = self.tail

    """Removes the tail of the List and returns its value"""

    def remove_from_tail(self):
        if not self.tail:
            if not self.head:
                return None
            return self.shift()
        else:
            current_tail = self.tail
            self.tail = self.tail.prev
            self.tail.next = None
            return current_tail.val

    """Moves the given node to the head of the List"""

    def move_to_front(self, node):
        value = node.val
        if node is self.tail:
            self.remove_from_tail()
        else:
            node.delete()
        self.add_to_head(value)

    """Moves the given node to the tail of the List"""

    def move_to_end(self, node):
        value = node.val
        if node is self.head:
            self.shift()
        else:
            node.delete()
        self.add_to_tail(value)


# Here is a Pythonic solution that leverages Python's built-in Ordered Dictionary data structure. It's certainly a much cleaner solution, but abstracts away more of the underlying details as well:
import collections


class LRUCache:
    def __init__(self, limit=10):
        self.limit = limit
        self.cache = collections.OrderedDict()

    def get(self, key):
        # attempt to fetch our key-value pair from the cache
        try:
            value = self.cache.pop(key)
            # re-add our key-value pair to the cache so that we maintain ordering
            self.cache[key] = value
            return value
        except KeyError:
            return None

    def set(self, key, value):
        # check to see if the key is already in our cache
        try:
            self.cache.pop(key)
        except KeyError:
            # check to see if cache is holding the max number of key-value pairs
            if len(self.cache) >= self.limit:
                # if it is, remove the least-recently accessed key-value pair
                self.cache.popitem(last=False)
        # add the key-value pair to the cache
        self.cache[key] = value
