using System;

namespace StuctsAlgosLibrary
{
    public class LinkedList
    {
        // head of the linked list
        public LinkedListNode Head { get; private set; }

        // add new item after certain item
        public void Add(int value, LinkedListNode prevNode=null)
        {
            LinkedListNode newNode;
            if (prevNode == null)
            {
                newNode = new LinkedListNode(value, Head);
                Head = newNode;
            }
            else
            {
                newNode = new LinkedListNode(value, prevNode.Next);
                prevNode.Next = newNode;
            }
        }

        // delete certain item
        public void Delete(LinkedListNode nodeToDelete)
        {
            // list is not empty OR node is null
            if (IsEmpty()) throw new InvalidOperationException("Linked list is empty");

            // delete head
            if (nodeToDelete == Head)
            {
                Head = Head.Next;
            }
            // delete others
            else
            {
                // find previous node
                LinkedListNode prevNode = Head;

                while (prevNode.Next != nodeToDelete && prevNode.Next != null)
                {
                    prevNode = prevNode.Next;
                }
                // was found
                if (prevNode.Next != null)
                {
                    prevNode.Next = nodeToDelete.Next;
                }              
            }
        }

        // find item with given value
        public LinkedListNode Find(int value)
        {
            LinkedListNode currNode = Head;
            while (currNode != null && currNode.Value != value)
            {
                currNode = currNode.Next;
            }
            return currNode;
        }

        // clear linked list
        public void Clear()
        {
            Head = null;
        }

        // validate if the linked list is empty
        private bool IsEmpty()
        {
            return (Head == null);
        }

        public class LinkedListNode
        {
            public LinkedListNode(int value, LinkedListNode next)
            {
                Value = value;
                Next = next;
            }
            public int Value { get; private set; }
            public LinkedListNode Next { get; set; }

        }
    }
}
