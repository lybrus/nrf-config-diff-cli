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

## Example

For `blinky_freertos` (in `$NRF_SDK/examples/peripheral/blinky_freertos/pca10056/blank/config/`) it creates file with content:

```c 
/* Generated by nrf-config-diff-cli */

#ifndef APP_CONFIG_H__
#define APP_CONFIG_H__

#define GPIOTE_ENABLED 1
#define GPIOTE_CONFIG_NUM_OF_LOW_POWER_EVENTS 4
#define NRFX_CLOCK_ENABLED 1
#define NRFX_GPIOTE_ENABLED 1
#define NRF_CLOCK_ENABLED 1
#define APP_TIMER_ENABLED 1
#define BUTTON_ENABLED 1

#endif // APP_CONFIG_H__

```
