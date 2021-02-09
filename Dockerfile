FROM ruby:2.5-slim

# Install production dependencies.
WORKDIR /usr/src/app
COPY Gemfile Gemfile.lock ./
ENV BUNDLE_FROZEN=true
RUN gem install bundler && bundle install --without test

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD ["ruby", "./server.rb"]
