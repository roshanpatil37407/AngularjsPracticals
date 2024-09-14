use ("bca");
db.createCollection("tasks");



db.tasks.insertOne({
    name: "Complete assignment",
    done: false
})


db.tasks.insertMany([
    { name: "Read a book", done: true },
    { name: "Go for a walk", done: false },
    { name: "Buy groceries", done: false }
])
