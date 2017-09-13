var books = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling"
    },
    {
        title: "Keeper of the Lost Cities",
        author: "Shannon Messenger"
    }
]

var controller = {
    create: function (req, res, next) {
        var newBook = req.body;
        books.push(newBook);
        res.status(200).end()
    },
    update: function (req, res, next) {
        var newObj = req.body;
        var id = req.params.id;
        books[id] = newObj;
        res.send(newObj);
    },
    read: function (req, res, next) {
        res.status(200).send(books)
    },
    readById: function (req, res, next) {
        var id = req.params.id
        var book = books[id];

        res.json(book)
    },
    delete: function (req, res, next) {
        var id = req.params.id;
        books.splice(id, 1);

        res.end();
    }
}

module.exports = controller