.PHONY: clean build pack upload

all: build pack upload

build:
	npm install --only=production

pack:
	cd .. && tar -czf code.tar.gz /
	#zip -r code.zip . -x *.git*

upload:
	./upload.sh
