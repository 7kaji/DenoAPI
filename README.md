# Deno RESTful API

Deno and Oak

## rename and edit .env file

```
$ mv .env.sample .env
```

## Run

```
$ deno run --allow-net --allow-read --allow-write --allow-env src/index.ts
```

## Getting with Curl

```
$ curl -H 'content-type: application/json' -v -X GET http://127.0.0.1:8000/api/books
$ curl -H 'content-type: application/json' -v -X GET http://127.0.0.1:8000/api/books/:id
$ curl -H 'content-type: application/json' -v -X POST -d '{ "title": "hoge", "description": "hogehoge", "price":"9.99"}' http://127.0.0.1:8000/api/books
$ curl -H 'content-type: application/json' -v -X PUT -d '{ "title": "fuga", "description": "fugafuga", "price":"19.99"}' http://127.0.0.1:8000/api/books/:id
$ curl -H 'content-type: application/json' -v -X DELETE http://127.0.0.1:8000/api/books/:id
```
