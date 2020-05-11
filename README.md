# reddit-notifier

[![ericomanoff](https://circleci.com/gh/ericomanoff/reddit-notifier.svg?style=svg)](https://app.circleci.com/pipelines/github/ericomanoff/reddit-notifier)

This puppy will email you the top posts of your favorite subreddits

## Usage

To run locally, make sure you have docker installed and run `docker-compose up` from the root directory
then run the db migrations from the node container
`docker exec -it reddit-notifier_node_1 bash`
then
`npx sequelize-cli db:migrate`

## Architecture

this tool is built with Bob Martin's Clean Architecture
https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

### api
the api receives json requests and stores users and thread preferences in a mysql db

### cron
the cron uses the same code base but runs on a different server and queries the db everyday at 8am and triggers the emails
