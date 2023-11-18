/* eslint-disable no-unused-vars */
const {addNoteHandler, getAllNotesHandler, getNoteByIdHandler} = require ('./handler')
const notes = require ('./notes')
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,

  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler, 
  },
]
module.exports = routes
