# Node buildint test Runner

Running test without express ...


# Dependencies 

npm init -y

npm install -D @types/node

# run 

node users.test.js ||  node --test 

# we can use to watch the test ===>>    

node --watch --test

# replace this:

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  # for this one:

  "scripts": {
    "test": "node --test",
    "test:watch": "node --watch --test"
  },

  # Now you can also run

  npm run test || npm run test:watch


