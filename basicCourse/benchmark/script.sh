#!/bin/bash
if [ "$1" = "" ]
then
  echo "Usage: $0 <number of iterations>"
  exit
fi

SYNCAPPNAME="syncRead.js"
ASYNCAPPNAME="asyncRead.js"

echo "Creating files..."
dd if=/dev/zero of=archivo1.txt bs=1024 count=1048576
dd if=/dev/zero of=archivo2.txt bs=1024 count=1048576
echo "Files created"

echo "Executing node programs... $1 iterations" 

echo $SYNCAPPNAME
SYNCTIME=`(time seq $1 | xargs -Iz node $SYNCAPPNAME) 2>&1 | grep real`
echo $SYNCTIME

echo $ASYNCAPPNAME
ASYNCTIME=`(time seq $1 | xargs -Iz node $ASYNCAPPNAME) 2>&1 | grep real`
echo $ASYNCTIME

echo "Delete files..."
rm -f archivo*
echo "Files deleted"