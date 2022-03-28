# Basic API Server

A basic API server for storing information about video games and video-gaming platforms. Uses Express and a postgres DB to provide full CRUD capability.

[Deployed API](https://jjtech-basic-api-server.herokuapp.com/)

UML DIAGRAM WIP
![UML Diagram](./assets/uml-401-lab-3.jpg)

## Installation

1. Clone from this repo `git clone https://github.com/jeffreyjtech/basic-api-server.git`
2. cd into `basic-api-server`
3. `npm install`
4. Optionally, create an .env file with variable `PORT` to assign your preferred port number. The default `PORT` is `3000`.

## Usage

After installation, run `npm start`.

## Contributors / Authors

- Jeffrey Jenkins

## Features / Routes

API has two routes, each with a schema and full CRUD endpoint set:

- `/game`
- `/platform`

### Routes

#### `/game`

- GET : `/game[/id]`
  - Parameters
    - Optional: an `id` param will specify a single record to return.
  - Response
    - status `200`, and a JSON body which is an array of all records in the table if `id` **is not** present, or a single record if `id` **is** present.
      - body: `{ // refer to schema }`
    - status `500`, `id` param is invalid.

- POST : `/game`
  - Request body
    - Requires a JSON object with valid data shape and types per the `game` schema.
  - Response
    - status `200`, and a JSON body of the record created in the DB.
      - body: `{ // refer to schema }`
    - status `500`, if JSON object is invalid per `game` schema.

- PUT : `/game/:id`
  - Parameters
    - Requires `id` param to specify record to update.
  - Request body
    - Requires a JSON object with a valid key-value pair to update the record.
  - Response
    - status `200`, and a JSON body of the updated record in the DB.
      - body: `{ // refer to schema }`
    - status `500`, if `id` param is invalid.

- DELETE : `/game/:id`
  - Parameters
    - Requires `id` param to specify record to delete.
  - Response
    - status `200`, and an object with property `record: null`.
      - body: `{"record": null}`
    - status `500`, if `id` param is invalid.

#### `/platform`

***Identical endpoint set to `/game`, except records and requests use the `platform` schema and route***

### Schemas

#### Game

```js
{
  title: STRING // required
  genre: STRING // not required
  releaseYear: INTEGER // not required
}
```

#### Platform

```js
{
  name: STRING // required
  manufacturer: STRING // not required
  gameCount: INTEGER // not required
}
```
