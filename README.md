# The weBuild Repository for n3bulous
## Prerequisites
### Mac OSx

* Any time you see a line starting with $ it denotes running the following command in a terminal.

#### Homebrew
* If you aren't using Homebrew package manager for OSX...well, Homebrew is pretty great actually, if you already use Homebrew then run the following  
* $ brew update  

* If you don't use Homebrew already then run the following  
* $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

#### Node.js
* Install node.js
* $ brew install node

* With out Homebrew, follow directions here
* https://nodejs.org/en/

#### Mongodb
* Install mongodb
* $ brew install mongodb

* With out Homebrew, follow directions here
* https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

#### React Native
* Install react-native specific components
* brew install watchman
* npm install -g react-native-cli

#### Xcode
* Install XCode for iOS development
* You will need to register for an Apple developer account in order to download this
* https://itunes.apple.com/us/app/xcode/id497799835?mt=12
* Also install the command line tools for XCode

#### Android Studio
* Install Android Studio to run on Android
* https://developer.android.com/studio/install.html

#### Mongodb Setup
* Get Mongodb ready to run
* $ git clone https://github.com/n3bu1ous/weBuild
* $ cd weBuild
* $ cd weBuildApi
* $ mkdir -p /data/db
* $ mongod

#### NPM Packages
* Get the appropriate npm packages downloaded
* $ git clone https://github.com/n3bu1ous/weBuild
* $ cd weBuild
* $ cd weBuildApi
* $ npm install
* $ cd ..
* $ cd weBuildClient
* $ yarn install



### Windows
* I don't know what to tell you, stop using Windows?? j/k, you can run this all on Windows we will edit this once someone needs it.

### Linux
* TBD



# How To Build and Deploy
* Via command line on a MAC or Linux system run the following:
* $ git clone https://github.com/n3bu1ous/weBuild
* $ cd weBuild
* Start the mongodb
* $ cd weBuildApi
* $ mongod
* $ Start the Api backend
* $ npm start
* Now you have the appropriate backend threads running to run the app
* 
* $ cd ..
* $ cd weBuildClient
* $ react-native run-ios
* At this point you should see an iOS simulator start up and the app running in the simulator
