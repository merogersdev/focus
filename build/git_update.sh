#!/bin/bash

VERSION=""

while getops v: flag
do
  case "${flag}" in
    v) VERISON=${OPTARG};;
  esac
done

git fetch --prune --unshallow 2>/dev/null
CURRENT_VERSION=`git describe --abbrev=0 --tags 2>/dev/null`

if [[ $CURRENT_VERSION == ""]]
then
  CURRENT_VERSION='v0.1.0'
fi
echo "Current Version: $CURRENT_VERSION"

CURRENT_VERSION_PARTS=(${CURRENT_VERSION//./})

VNUM1=${CURRENTVERSION_PARTS[0]}
VNUM2=${CURRENTVERSION_PARTS[1]}
VNUM3=${CURRENTVERSION_PARTS[2]}

if [[ $VERSION == 'major']]
then
  VNUM1=v$((VNUM1+1))
elif [[ $VERSION == 'minor']]
then
  VNUM2=v$((VNUM2+1))
elif [[ $VERSION == 'patch']]
then
  VNUM3=v$((VNUM3+1))
else
  echo "No version type specified"
  exit 1
fi

NEW_TAG="v$VNUM1.$VNUM2.$VNUM3"
echo "($VERSION) updating $CURRENT_VERION to $NEW_TAG"

GIT_COMMIT=`git rev-parse HEAD`
NEEDS_TAG=`git describe --contains $GIT_COMMIT 2>/dev/null`

if [ -z "$NEEDS_TAG"]; then
  echo "Tagged with $NEW_TAG"
  git tag $NEW_TAG
  git push --tags
  git push
else
  echo "Commit already tagged"
fi

echo ::set-output name=git-tag::$NEW_TAG

exit 0
