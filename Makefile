jsfiles := $(shell find ./ -name '*.js' ! -path "*node_modules/*" ! -path "*coverage/*")
specs := $(shell find ./test -name '*.js' ! -path "*node_modules/*")
reporter = spec
timeout = 15000

install:
	@npm install -d

lint:
	@./node_modules/.bin/jshint ${jsfiles}

test:
	@./node_modules/.bin/mocha \
		--reporter ${reporter} \
		--timeout ${timeout} \
		--require should \
		${specs}

cov:
	@./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha \
		-- -u exports \
		--reporter ${reporter} \
		--timeout ${timeout} \
		--require should \
		${specs}

.PHONY: install lint test cov
