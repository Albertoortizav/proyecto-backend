#KODERS APIv1 javascript 33

This is a repo created during the backend module in [kodemia](http://kodemia.mx)

## How to run?
```
1. install dependencies
```
npm install 
```
2. to run in dev mode npm run dev
```
touch.env

you can find the kees needed in the "example.env" file
```
3. to run in production mode 
```
npm start
## How can you create an user?
```
1. You can use POST/user to sign up new users in thunder client
```
example: http://localhost:8080/users
```
2.You can use GET/user/:id to find an especific user in thunder client
```
example:http://localhost:8080/users/:id
```
3.You can use POST/auth/login to have a new token and create a new post
```
example: http://localhost:8080/auth/login

## How can you create a post?
```
1.You can use POST/posts to create a new post but you need to have your token, just do login to have de token in thunder client, put your email and password and you´ll have your token
```
example: http://localhost:8080/posts
```
2. You can use GET/post to watch every post, you can use ?search=title name post to watch an especific post
```
example:http://localhost:8080/posts

or

example: example:http://localhost:8080/posts?search=nametitle

```
3. You can use PATCH/post/:id to change something of some post, you need to have your token but you can´t change de id user
```

example:http://localhost:8080/posts/:id

```
4. You can use DELETE/post/:id to delete an specific post, you can do this only if you are the post owner and you need to have your token
```
example:http://localhost:8080/posts/:id