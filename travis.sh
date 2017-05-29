#!/bin/bash

if [ $TRAVIS_PULL_REQUEST = "false" ];
  yarn global add firebase-tools;
  cd functions;
  yarn;
  cd ..;
  yarn lint;
  yarn test;
  yarn build;
  cp public/* dist;
  firebase deploy --token ${FIREBASE_TOKEN};
else
  yarn lint;
  yarn test;
  yarn build;
fi
