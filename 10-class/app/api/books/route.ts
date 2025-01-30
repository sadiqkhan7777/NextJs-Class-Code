import { NextResponse } from "next/server";

// Simulating a list of books
let books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling", available: true },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", available: true },
  { id: 3, title: "1984", author: "George Orwell", available: false },
  
];

// GET method: Return all books
export async function GET() {
  try {
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching books" }, { status: 500 });
  }
}

// POST method: Add a new book
export async function POST(request: Request) {
  try {
    const newBook = await request.json(); // Get the book details from the request
    newBook.id = books.length + 1; // Give it a new ID
    books.push(newBook); // Add the new book to the list
    return NextResponse.json(newBook, { status: 201 }); // Return the added book
  } catch (error) {
    return NextResponse.json({ message: "Error adding book" }, { status: 500 });
  }
}

// PUT method: Update an existing book
export async function PUT(request: Request) {
  try {
    const updatedBook = await request.json(); // Get updated book details
    const index = books.findIndex(book => book.id === updatedBook.id); // Find the book by ID
    
    if (index === -1) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 }); // Book not found
    }

    books[index] = updatedBook; // Update the book
    return NextResponse.json(updatedBook, { status: 200 }); // Return the updated book
  } catch (error) {
    return NextResponse.json({ message: "Error updating book" }, { status: 500 });
  }
}

// DELETE method: Remove a book by ID
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json(); // Get the book ID from the request
    const index = books.findIndex(book => book.id === id); // Find the book by ID
    
    if (index === -1) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 }); // Book not found
    }

    const deletedBook = books.splice(index, 1); // Remove the book from the list
    return NextResponse.json(deletedBook[0], { status: 200 }); // Return the deleted book
  } catch (error) {
    return NextResponse.json({ message: "Error deleting book" }, { status: 500 });
  }
}
