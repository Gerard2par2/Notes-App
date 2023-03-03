migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pwfk8a5et2aok4m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kxw1ign8",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pwfk8a5et2aok4m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kxw1ign8",
    "name": "decription",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
