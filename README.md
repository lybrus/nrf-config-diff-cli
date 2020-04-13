# nrf-config-diff-cli

## Installation

```shell script
npm i -g nrf-config-diff-cli
```

## Usage

1. Set nRF SDK path to NRF_SDK environment variable
2. In folder with `sdk_config.h` file run

```shell script
nrf-config-diff
```

It will calculate diff compare to `$NRF_SDK/config/nrf52840/config/sdk_config.h` and write it to `app_config.h` file
