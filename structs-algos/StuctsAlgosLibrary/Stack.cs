using System;
using System.Collections.Generic;
using System.Text;

namespace StuctsAlgosLibrary
{
    public class Stack
    {
        // top of the stack
        public StackNode Top { get; private set; }

        // peek the top of the stack
        public int Peek()
        {
            if (IsEmpty()) throw new InvalidOperationException("Stack is empty");

            return Top.Value;
        }

        // pop the top of the stack
        public int Pop()
        {
            if (IsEmpty()) throw new InvalidOperationException("Stack is empty");

            StackNode poppedNode = Top;
            Top = poppedNode.Next;

            return poppedNode.Value;
        }

        // push new item to the top of the stack
        public void Push(int value)
        {
            StackNode newNode = new StackNode(value, Top);
            Top = newNode;
        }

        // validate if the stack is empty
        private bool IsEmpty()
        {
            return (Top == null);
        }

        // clear all value in the stack
        public void Clear()
        {
            Top = null;
        }

    }

    public class StackNode
    {
        public StackNode(int value, StackNode next)
        {
            Value = value;
            Next = next;
        }
        public int Value { get; private set; }
        public StackNode Next { get; set; }

    }
}
