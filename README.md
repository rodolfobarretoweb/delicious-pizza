# To install
    * nvm use
    * yarn

# To run
    * yarn start
    * yarn run api

# To test
    * yarn test
    * yarn test --coverage

# If your console start to blink when running the tests

```
    I experience this problem with a fairly vanilla create-react-app learning project. See https://github.com/susiehill/amortization for the repo. I tried the workaround in #4635, which first required that I do an eject, but that did not appear to work.

    This problem appears intermittently. Sometimes, blowing away node_modules and redoing the npm install fixes the problem, but only temporarily--it seems to invariably resurface later.

    At least once, it sat there when I started (because it didn't need to re-rerun tests from the last run), but the problem started when I pressed a.

    MacOS 10.13.3
    Jest 20.0.4 (as installed via create-react-app)
    Node 8.2.1
    NPM 5.7.1

    So what's particularly interesting is that I had to work on a Windows machine (I think v10) earlier, and had experienced a different problem there: A single test takes excessive time (12-20s) to run. There are a number of posts on that issue, similarly, but no fix worked. Any chance these are related problems?

    https://github.com/facebook/jest/issues/5038
```