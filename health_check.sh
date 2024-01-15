#!/bin/bash

echo "Hello from shell script"

response=$(curl -s https://jonnny013-pokedex.fly.dev/health)

if [ "$response" == "ok" ]; then
    echo "Health check successful: $response"
    exit 0
else
    echo "Health check failed: $response"
    exit 1
fi