# This is a Mock API created with Loopback

## Setup

1.  Clone this repo (you might use the SSH URL instead of HTTPS).:

```
git clone https://github.com/cuddlemeister/employee_test_api.git
```

3.  `cd` to the repository directory and run the following command:

```
$ cd employee_test_api
$ npm i
```

This will load all the required dependencies

## Run and view site locally

Run the server using the following command:

```
$ npm start
```

Then, load [http://localhost:3000/explorer/](http://localhost:3000/explorer/) on your browser to view the API explorer.

Base url for your application will be [http://localhost:3000/api/](http://localhost:3000/api/).

This Mock API represents a simple server, where there are authors, posts and comments. Authors can create and comment on their own posts and posts of other authors. 

This API does not require any databases to be attached, all the data has been generated from scratch every time you boot the server. 

__NOTE: ALL YOUR DATA WILL BE REMOVED EACH TIME YOU REBOOT THE SERVER!__

__Also, you should consider that this is a simplified version of the API, no validation of model creation is provided__


## Querying data

Loopback provides methods to retrieve data with filtering. It accepts `Fields`, `Include`, `Limit`, `Skip`, `Order` and `Where` filters. 
Details about how to use them can be found here https://loopback.io/doc/en/lb3/Where-filter.html

Here's a small example of filter object for Authors: 

```
{
    "where": {
        "is_female_gender": false,
        "date_of_birth": {
            "gt": "1980-01-01T00:00:00.000Z"
        }
    },
    "include": {
        "relation": "posts",
        "scope": {
            "include": {
                "relation": "comments"
            }
        }
    },
    "limit": 10,
    "skip": 0,
    "order": "date_of_birth ASC"
}

```

This will include the first 10 (`limit === 10`,` skip === 0`) authors with all their posts and all comments for each post. Only authors born later than `1980-01-01T00: 00: 00.000Z` will be included in it, and all authors will be sorted from oldest to youngest.