interface Book {
  title: string;
  author: string;
}

function renameBookImmutable(book: Book, newTitle: string): Book {
 return {...book,title:newTitle};
}
export {};
