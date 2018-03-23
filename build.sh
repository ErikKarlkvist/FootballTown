#!/bin/sh
cd $TRAVIS_BUILD_DIR/FootballTownApp
sbt ++$TRAVIS_SCALA_VERSION package

