# Hello-Kitty API
## _Get Your Top Cats_

This Express API will retrieve the top _child friendly_, _dog friendly_, and _stranger friendly_ cats. 

### Requirements

- Docker installed on your machine.
- Web browser.

## Dependencies

I used the following npm packages in the app.

| Plugin | README |
| ------ | ------ |
| express | For building the API |
| lodash | For some easy data manipulation |
| jest | For unit testing |
| supertest | For testing the express app |
| nodemon | For development |
| axios | For makign requests to the Cat API |

### Getting the App into your machine

Clone this repository into your local machine by executing the following:

```
git clone git@github.com:wongkj/hello-kitty.git
```

### Setting Up

You will need Docker installed on your machine for the installation of this app.
Hello-Kitty is very easy to install and deploy in a Docker container.
By default, the Docker will expose port 3000.

When the repository is cloned on to your machine, you will need to execute the following command in a terminal to spin up a Docker Container of the Hello-Kitty Image.

```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```

### Using the App

Once the Docker Container is up and running, the app should be ready to use. 
- Open up your web browser.
- The API root endpoint is:
```
http://localhost:3000/api/v1/cats
```
- The app has 2 query string parameters: 
    - **type**: This is _required_. The app will throw an error if this is not included. The **type** allowed are:
        - **child_friendly**
        - **dog_friendly**
        - **stranger_friendly**
    - **limit**: this is **optional**. If no limit is provided then the default value of **5** will be used.

##### Here are some example requests you can make
&nbsp;
`Getting the top 5 child friendly cats`
```
http://localhost:3000/api/v1/cats?type=child_friendly
```
`Getting the top 5 dog friendly cats`
```
http://localhost:3000/api/v1/cats?type=dog_friendly
```
`Getting the top 5 dog stranger friendly cats`
```
http://localhost:3000/api/v1/cats?type=stranger_friendly
```
`Getting the top 11 dog stranger friendly cats`
```
http://localhost:3000/api/v1/cats?type=stranger_friendly&limit=11
```
