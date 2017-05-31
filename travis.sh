#!/bin/bash

if [ $TRAVIS_PULL_REQUEST = "false" ]
then
  yarn global add firebase-tools;
  cd functions;
  yarn;
  cd ..;
  cp public/* dist;
  firebase deploy --token ${FIREBASE_TOKEN};
fi
