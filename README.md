```package
neopixel=github:microsoft/pxt-neopixel#v0.6.12
```

# Test drive a MOVE:mini Mk1

## Introduction @unplugged

In this session you will code the MOVE:mini robot buggy to drive when button ``||A||`` is pressed and spin when button ``||B||`` is pressed..

## Step 1 - Show the buggy is alive and ready

There is some code already written for you to get you started

There's a ``||basic:show icon||`` block so that something is displayed on the @boardname@ at all times. We want this so we know it is powered on and ready. There are lots of other icons you can choose if you don't want the happy face.

```blocks
basic.showIcon(IconNames.Happy)
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setBrightness(25)
```
This is also means we are less likely to pack the buggy away when it is still switched on and therefore run down the batteries while in its box doing nothing.

The other thing already done for you is the setup of the neopixel strip. There is also a ``||neopixel:set brightness (NUM)||`` block which turns the brightness down. This means your batteries will last longer.

## Step 2 - Program a countdown

We don't want the buggy to move as soon as the button is pressed. If it did it would be a rush to get your fingers out of the way. Instead we want a countdown from 5 and then get the buggy to move.

Create a variable ``||variable:start||`` and set it to 5 as initally we'll do a countdown from 5 using a ``||loops:while do||`` loop.

```blocks
input.onButtonPressed(Button.A, function () {
    let start = 0
    start = 5
    while (start > 0) {
        basic.showNumber(start)
        basic.pause(500)
        start += -1
    }
})
```

## Step 3 - Drive the buggy forward

You're now ready to add code to make the buggy move forwards. Remember how the pins on the @boardname@ are used.

![Pin Outs](https://github.com/belmont-admin/testdriveinstructions/raw/master/docs/images/0-PinOuts.png) 

and that:

* **180** means full speed anticlockwise
* **0** means full speed clockwise
* **90** means stop

Let's add code to turn the servos for 1 second. You don't want to have them running all the time as otherwise you will be chasing after your buggy trying to catch it and it may well crash into something.

Here is the code to use the ``||Pins:servo write pin (PIN) to (NUMBER)||`` block to turn the **left** servo for 1 second

```blocks
input.onButtonPressed(Button.A, function () {
    let start = 0
    start = 5
    while (start > 0) {
        basic.showNumber(start)
        basic.pause(500)
        start += -1
    }
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P2, 90)
})

```

Download your code to the @boardname@ and test what happens when you press button ``||A||``

Now see if you can add two more ``||Pins:servo write pin (PIN) to (NUMBER)||`` blocks so that the right wheel also turns for 1 second and then stops.

Download your code to the @boardname@ and check the buggy moves forward when you press button ``||A||``.

### ~hint

#### If your code doesn't work as expected
Think why that might be and then see if you can fix your code. Maybe look carefully at what your wheels are doing.

### ~

Congratulations you have now programmed your buggy to move successfully

## Step 4 - Create a ``||functions:function||`` to make your code reusable

The next step is to make it so that when you press button ``||B||`` the buggy spins for 500 milliseconds. The code you need to do this is going to be very similar. You could just duplicate a large chunk of code but that makes your program bigger, harder to read and means if you want to change things then you have to change them in more than one place.

All computer languages have a way of letting you create and name your own sequence of commands which you want to use often.

In our case we also want to have a 5 second countdown when button ``||B||`` is pressed. Wouldn't it be nice if there was a ``||countdown||`` block which we could use. Sadly there isn't but luckily we can make one using a ``||functions:Functions||`` block.

Make a new function and all it ``||countdown||`` you'll see this makes you a function block called ``||functions:countdown||`` 

```blocks

function countdown () {	
}
```
Now you can move your countdown code into this function block.

```blocks
function countdown () {
    let start = 0
    start = 5
    while (start > 0) {
        basic.showNumber(start)
        basic.pause(500)
        start += -1
    }
}

input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P2, 90)
})

```
The last thing to do is use our new ``||functions:countdown||`` block when button ``||A||`` is pressed. This is done by using the ``||functions:call countdown||`` block that we've made.

```blocks
input.onButtonPressed(Button.A, function () {
    countdown()
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P2, 90)
})

function countdown () {
    let start = 0
    start = 5
    while (start > 0) {
        basic.showNumber(start)
        basic.pause(500)
        start += -1
    }
}
```

## Step 4 - Add code so the buggy spins when you push button ``||B||``

Now add code into an ``||input:on button B pressed||`` block so a countdown is displayed after which the buggy spins for 500ms and then stops.

```blocks
input.onButtonPressed(Button.B, function () {
})
```
## Step 5 - Experiment with a route

See if you can create functions ``||functions:spin||`` and ``||functions:forward||`` to change your code so that when button ``||A||`` is pressed the buggy goes forward several steps, spins then goes forward some more while staying on an A3 piece of paper. 

```blocks

function spin () {	
}
```

```blocks

function forward () {	
}
```
If you succeed then you can drop a Sharpie pen into the buggy so that it draws a pattern.

