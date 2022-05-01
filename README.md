[![CI@root](https://github.com/akky-xxxx/project-my-homepage/actions/workflows/main-ci-root.yml/badge.svg)](https://github.com/akky-xxxx/project-my-homepage/actions/workflows/main-ci-root.yml)
[![CI@common-icons](https://github.com/akky-xxxx/project-my-homepage/actions/workflows/main-ci-common-icons.yml/badge.svg)](https://github.com/akky-xxxx/project-my-homepage/actions/workflows/main-ci-common-icons.yml)
[![CI@common-types](https://github.com/akky-xxxx/project-my-homepage/actions/workflows/main-ci-common-types.yml/badge.svg)](https://github.com/akky-xxxx/project-my-homepage/actions/workflows/main-ci-common-types.yml)
[![CI@service-client](https://github.com/akky-xxxx/project-my-homepage/actions/workflows/main-ci-service-client.yml/badge.svg)](https://github.com/akky-xxxx/project-my-homepage/actions/workflows/main-ci-service-client.yml)

## About
root of monorepo

## Requires
- node.js
- yarn
- docker

## Resolve dependencies
```shell
$ yarn
```

## Start as development
```shell
$ yarn dev
```

## Scripts
| script     | description                       |
|------------|-----------------------------------|
| check-all  | run `check-all` of all packages   |
| dev        | run `dev` of all service packages |
| storybook  | run all storybook                 |
| fix        | apply fix task for root files     |
| lint       | check fpr root files              |

## Ports
| port | description               |
|------|---------------------------|
| 3000 | client                    |
| 3050 | storybook of client       |
| 3051 | storybook of common icons |
| 4000 | strapi                    |
| 5000 | sg server                 |
