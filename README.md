# Thermostat

This program models a thermostat. The specification is:

- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
- (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## Setup and model

In this project I decided to use Javascript with the use of J-query to manipulate my HTML. Using the MVC framework I modelled the Model / Controller relationship:

     ┌──────────┐           ┌─────┐
     │Controller│           │Model│ Themostat instance variables: MaxTemp, MinTemp, PowerSaving, Temp
     └────┬─────┘           └──┬──┘
          │    increaseTemp    │   
          │ ───────────────────>   
          │                    │   
          │ Temp increased by 1│   
          │ <─ ─ ─ ─ ─ ─ ─ ─ ─ ─   
          │                    │   
          │    decreaseTemp    │   
          │ ───────────────────>   
          │                    │   
          │ Temp decreased by 1│   
          │ <─ ─ ─ ─ ─ ─ ─ ─ ─ ─   
          │                    │   
          │      resetTemp     │   
          │ ───────────────────>   
          │                    │   
          │      Temp = 20     │   
          │ <─ ─ ─ ─ ─ ─ ─ ─ ─ ─   
          │                    │   
          │ currentEnergyUsage │   
          │ ───────────────────>   
          │                    │   
          │    Low/Mid/High    │   
          │ <─ ─ ─ ─ ─ ─ ─ ─ ─ ─   
          │                    │   
          │  togglePowerSaving │   
          │ ───────────────────>   
          │                    │   
          │       On/Off       │   if power saving on MaxTemp = 20
          │ <─ ─ ─ ─ ─ ─ ─ ─ ─ ─   if power saving off MaxTemp = 35
     ┌────┴─────┐           ┌──┴──┐
     │Controller│           │Model│
     └──────────┘           └─────┘
