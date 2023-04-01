const addToDb = blogName => {
    let bookmarkItems = getBookmarkedItems();
    // add quantity
    const quantity = bookmarkItems[blogName];
    if (!quantity) {
        bookmarkItems[blogName] = 1;
    }
    else {
        const newBookmark = quantity + 1;
        bookmarkItems[blogName] = newBookmark;
    }
    localStorage.setItem('bookmarked', JSON.stringify(bookmarkItems));
}

const getBookmarkedItems = () => {
    let bookmarkItems = {};
    //get the bookmarked items from local storage
    const bookMarkedItems = localStorage.getItem('bookmarked');
    if (bookMarkedItems) {
        bookmarkItems = JSON.parse(bookMarkedItems);
    }
    return bookmarkItems;
}

export {
    addToDb,
    getBookmarkedItems
}