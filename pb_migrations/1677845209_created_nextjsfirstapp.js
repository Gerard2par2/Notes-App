migrate((db) => {
  const collection = new Collection({
    "id": "pwfk8a5et2aok4m",
    "created": "2023-03-03 12:06:49.767Z",
    "updated": "2023-03-03 12:06:49.767Z",
    "name": "nextjsfirstapp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "71hehwng",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pwfk8a5et2aok4m");

  return dao.deleteCollection(collection);
})
