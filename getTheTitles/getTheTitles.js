const getTheTitles = function(books) {
    let bookTitles = [];

    for (let i = 0; i < books.length; i++){
        bookTitles.push(books[i].title);
    }
    return bookTitles;
}

module.exports = getTheTitles;
