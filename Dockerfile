FROM lambci/lambda:build-nodejs12.x

RUN curl -sL https://rpm.nodesource.com/setup_14.x | bash - && yum install -y nodejs

WORKDIR /src/

copy package.json package-lock.json /src/

RUN npm ci --silent

copy . .

CMD npm start