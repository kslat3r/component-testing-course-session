#!/bin/sh

docker run -it -p 0.0.0.0:8001:8001 -v `pwd`/tests/data:/data -e MOCKIFY_ROUTES=/data/stubs.yaml -e MOCKIFY_PORT=8001 newlinelabs/mockify:1.0.2