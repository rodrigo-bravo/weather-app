# Weather App
Weather app in Node.js using OpenWeatherMap API.

#Requirements

    node v4.2.x
    gulp version 3.9.x
    tarifa version 0.16.x

#Install all web app dependencies
```cd project```
npm install


iOS:

    OS X and Xcode version 7.x

Init project after checkout

tarifa check --force

This will recreate the cordova folder with android and iOS platforms and also install plugins.
Install all web app dependencies

cd project
npm install

Build android

Build the native code using:

ndk-build -C app/platforms/android

Build the apk using:

tarifa build android

Build IOS

Through XCode, in the build settings menu:

    Set C++ Language Dialect option to C++11 value.
    Set C++ Standard Library option to lib++ value.

Finally, build the ios app using:

tarifa build ios
