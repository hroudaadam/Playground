using System;
using System.Text;

namespace StuctsAlgosLibrary
{
    public class Queue
    {
        public QueueNode Front { get; set; }

        // put new value to the queue
        public void Enqueue(int value)
        {
            QueueNode newNode = new QueueNode(value, null);

            if (IsEmpty())
            {
                Front = newNode;
                return;
            }

            QueueNode tmp = Front;

            while (tmp.Next != null)
            {
                tmp = tmp.Next;
            }

            tmp.Next = newNode;
        }

        // remove front from the queue
        public int Dequeue()
        {
            if (IsEmpty()) throw new InvalidOperationException("Queue is empty");

            QueueNode excluded = Front;
            Front = Front.Next;

            return excluded.Value;
        }

        // return if queue is empty
        public bool IsEmpty()
        {
            return (Front == null);
        }
    }

    public class QueueNode
    {
        public QueueNode(int value, QueueNode next)
        {
            Value = value;
            Next = next;
        }
        public int Value { get; private set; }
        public QueueNode Next { get; set; }

    }
}
