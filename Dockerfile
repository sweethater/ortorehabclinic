FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]

# docker build -t docker.io/jhadvig/ortorehabclinic-app .
# docker push docker.io/jhadvig/ortorehabclinic-app