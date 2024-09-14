// 1. Insert Documents (Create)
db.tasks.insertMany([
    { name: "Complete assignment", done: false },
    { name: "Read a book", done: true },
    { name: "Go for a walk", done: false }
])

// 2. Select Documents (Read)
db.tasks.find()                    
db.tasks.find({ done: false })      

// 3. Update a Document (Update)
db.tasks.updateOne(
    { name: "Go for a walk" },
    { $set: { done: true } }
)

// 4. Delete a Document (Delete)
db.tasks.deleteOne({ name: "Read a book" })
